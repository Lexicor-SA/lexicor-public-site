
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(100),
  email: z.email("Enter a valid email address.").max(254),
  phone: z.string().trim().max(30).optional(),
  category: z.enum([
    "general",
    "entity-changes",
    "ownership",
    "governance",
    "compliance",
  ]),
  message: z.string()
    .trim()
    .min(10, "Please provide more information.")
    .max(5000),
  website: z.string().max(200).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
