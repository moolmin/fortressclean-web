import { GallerySection } from "@/components/fortressclean-home/quote-gallery-sections";
import { SiteFooter } from "@/components/fortressclean-home/site-footer";
import { SiteHeader } from "@/components/fortressclean-home/site-header";

export default function CasesPage() {
  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <SiteHeader />
      <main className="pt-20">
        <GallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}
