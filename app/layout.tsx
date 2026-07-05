import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "포트리스 클린",
  description: "가전 홈케어부터 종합청소까지 제공하는 포트리스 클린 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
