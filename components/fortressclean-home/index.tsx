import { ContactSection, ASSection } from "./as-contact-sections";
import { FAQSection } from "./faq-section";
import { HeroSection } from "./hero-section";
import { ProcessSection } from "./process-section";
import {
  GallerySection,
  QuoteSection,
  TestimonialSection,
} from "./quote-gallery-sections";
import { RevealObserver } from "./reveal-observer";
import {
  ComprehensiveSection,
  FeaturesSection,
  HomeCareSection,
} from "./services-sections";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export default function FortressCleanHome() {
  return (
    <>
      <RevealObserver />
      <div className="bg-white font-sans text-gray-800 antialiased">
        <SiteHeader />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HomeCareSection />
          <ComprehensiveSection />
          <ProcessSection />
          <QuoteSection />
          <GallerySection />
          {/* <TestimonialSection /> */}
          <ASSection />
          <FAQSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
