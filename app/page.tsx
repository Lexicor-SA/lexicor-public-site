

import Services from "@/components/Services";
import Hero from "@/components/Hero";
import WhyLexicor from "@/components/MyLexicor";
import KnowledgePreview from "@/components/KnowledgePreview";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <WhyLexicor />
        <KnowledgePreview />
        <AboutPreview />
        <ContactCTA />
      </main>
    </>
  );
}
