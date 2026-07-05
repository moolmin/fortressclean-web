import Image from "next/image";
import Link from "next/link";

import { Clock, Phone } from "./icons";
import { NAV_ITEMS } from "./content";
import { PhosphorIcon } from "./phosphor-icon";
import { PhoneLink } from "./shared";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-16 text-gray-400">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="relative h-6 w-6 overflow-hidden">
                <Image
                  src="/logo.svg"
                  alt="포트리스 클린 로고"
                  fill
                  sizes="32px"
                  className="scale-[1.28] object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white pt-1">
                포트리스 클린
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              가전 홈케어부터 종합 환경 청소까지, 포트리스 클린은 정직하고
              꼼꼼한 서비스로 고객님의 쾌적한 생활 공간을 책임집니다.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">서비스 메뉴</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">고객센터</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <PhosphorIcon
                  icon={Phone}
                  weight="fill"
                  className="mt-0.5 text-gray-500"
                />
                <PhoneLink className="font-bold text-white" />
              </li>
              <li className="flex items-start gap-2">
                <PhosphorIcon
                  icon={Clock}
                  weight="fill"
                  className="mt-0.5 text-gray-500"
                />
                <span>
                  매일 09:00 - 20:00
                  <br />
                  (연중무휴)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-gray-800 pt-8 text-sm md:flex-row">
          <p>© Fortressclean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
