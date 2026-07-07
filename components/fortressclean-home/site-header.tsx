"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV_ITEMS, PHONE_NUMBER } from "./content";
import { PhoneCall } from "./icons";
import { PhosphorIcon } from "./phosphor-icon";
import { PhoneLink } from "./shared";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      id="main-header"
      className={`fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-300 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-8 overflow-hidden">
            <Image
              src="/logo.svg"
              alt="포트리스 클린 로고"
              fill
              sizes="40px"
              className="scale-[1.28] object-contain"
              priority
            />
          </div>
          <span className="pt-1 text-[1.4rem] font-extrabold tracking-tight text-brand-900">
            포트리스 클린
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActivePath(item.href) ? "page" : undefined}
              className={`group relative -mx-2 rounded-full px-2 py-2 text-[0.97rem] font-semibold transition-all duration-300 ${
                isActivePath(item.href)
                  ? "text-brand-900"
                  : "text-gray-600 hover:text-brand-900"
              }`}
            >
              <span className="relative block">
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-900 opacity-90 transition-transform duration-300 ease-out ${
                    isActivePath(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <PhoneLink
            className="inline-flex items-center justify-center gap-1 rounded-full bg-brand-900 px-5 py-2.5 font-semibold leading-none text-white shadow-md shadow-brand-900/20 transition-colors hover:bg-brand-800"
            label={
              <>
                <PhosphorIcon
                  icon={PhoneCall}
                  weight="fill"
                  className="block align-middle text-lg"
                />
                <span className="inline-flex items-center leading-none pt-1">
                  {PHONE_NUMBER}
                </span>
              </>
            }
          />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <PhoneLink
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-white shadow-md shadow-brand-900/20"
            label={
              <PhosphorIcon
                icon={PhoneCall}
                weight="fill"
                className="text-xl"
              />
            }
          />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-site-nav"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((current) => !current)}
            className={`group relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
              menuOpen
                ? "border-brand-200 bg-brand-900 text-white shadow-lg shadow-brand-900/20"
                : "border-gray-200 bg-white text-brand-900 shadow-sm hover:border-brand-200 hover:bg-brand-50"
            }`}
          >
            <span className="sr-only">{menuOpen ? "닫기" : "메뉴"}</span>
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-site-nav"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-out lg:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div
          className={`px-6 py-4 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-3"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActivePath(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 font-semibold transition-colors ${
                  isActivePath(item.href)
                    ? "bg-brand-50 text-brand-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-brand-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 p-4">
            <p className="text-xs font-bold tracking-wide text-brand-600">
              빠른 상담
            </p>
            <PhoneLink className="mt-1 block text-2xl font-black text-brand-900" />
            <p className="mt-1 text-sm text-gray-500">매일 09:00 - 20:00</p>
          </div>
        </div>
      </div>
    </header>
  );
}
