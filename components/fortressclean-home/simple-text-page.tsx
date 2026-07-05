import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SimpleTextPageProps = {
  text: string;
};

export function SimpleTextPage({ text }: SimpleTextPageProps) {
  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <SiteHeader />
      <main className="flex min-h-screen items-center justify-center px-6 pt-20">
        <p className="text-2xl font-bold text-brand-900">{text}</p>
      </main>
      <SiteFooter />
    </div>
  );
}
