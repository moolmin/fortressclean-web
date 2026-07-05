"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_ITEMS } from "./content";
import { PhoneLink } from "./shared";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden">
            <Image
              src="/logo.svg"
              alt="포트리스 클린 로고"
              fill
              sizes="40px"
              className="scale-[1.28] object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-900 pt-1">
            포트리스 클린
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-600 transition-colors hover:text-brand-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-gray-500">
              예약 및 문의
            </span>
            <PhoneLink className="text-lg font-bold text-brand-900" />
          </div>
          <a
            href="#contact"
            className="rounded-full bg-brand-900 px-5 py-2.5 font-medium text-white shadow-md shadow-brand-900/20 transition-colors hover:bg-brand-800"
          >
            문의하기
          </a>
        </div>
      </div>
    </header>
  );
}
