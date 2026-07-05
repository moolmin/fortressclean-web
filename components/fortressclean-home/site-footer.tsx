import { Clock, Phone } from "./icons";
import { NAV_ITEMS, PHONE_NUMBER } from "./constants";
import { LogoMark } from "./logo-mark";
import { PhosphorIcon } from "./phosphor-icon";

const FOOTER_SERVICE_LINKS = [
  { href: "#services", label: "가전 홈케어" },
  { href: "#comprehensive", label: "종합 청소 서비스" },
  ...NAV_ITEMS.filter((item) =>
    ["#process", "#gallery", "#quote"].includes(item.href),
  ),
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 py-16 text-gray-400">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <LogoMark
                className="h-8 w-8"
                stroke="white"
                circleClassName="text-gray-700"
              />
              <span className="text-xl font-bold tracking-tight text-white">
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
              {FOOTER_SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
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
                <span className="font-bold text-white">{PHONE_NUMBER}</span>
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
          <p>© 포트리스 클린. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
