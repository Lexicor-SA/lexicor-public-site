
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { checkContactRateLimit } from "@/lib/contact-rate-limit";

export const runtime = "nodejs";

const categories: Record<string, string> = {
  general: "General Enquiry",
  "entity-changes": "Entity Establishment & Changes",
  ownership: "Ownership & Control",
  governance: "Governance & Records",
  compliance: "Statutory Compliance",
};

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 415 }
      );
    }

    const raw = await request.text();

    if (raw.length > 12000) {
      return NextResponse.json(
        { error: "Request too large." },
        { status: 413 }
      );
    }

    const result = contactSchema.safeParse(JSON.parse(raw));

    if (!result.success) {
      return NextResponse.json(
        { error: "Please check the information supplied." },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot: do not send an email for likely bot submissions.
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    
    // Determine the visitor's IP address.
    // Vercel provides forwarding headers for deployed requests.
    const ip =
      request.headers
        .get("x-forwarded-for")
        ?.split(",")[0]
        ?.trim() || "unknown";

    let rateLimit;

    try {
      rateLimit = await checkContactRateLimit(ip);
    } catch (error) {
      console.error("Contact rate-limit service error:", error);

      return NextResponse.json(
        { error: "Enquiries are temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            "Too many enquiries have been submitted. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.max(
                1,
                Math.ceil((rateLimit.reset - Date.now()) / 1000)
              )
            ),
          },
        }
      );
    }


    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json(
        { error: "Enquiries are temporarily unavailable." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Lexicor Enquiry: ${categories[data.category]}`,
      text: [
        "New Lexicor website enquiry",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Category: ${categories[data.category]}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend delivery error:", error);

      return NextResponse.json(
        { error: "We could not send your enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to process your enquiry." },
      { status: 400 }
    );
  }
}
