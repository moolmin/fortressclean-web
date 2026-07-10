import { PhoneCall, Broom, EnvelopeSimple, Sparkle } from "./icons";
import { EMAIL_ADDRESS, EMAIL_HREF, HERO_HIGHLIGHTS } from "./content";
import { HeroImageRotator } from "./hero-image-rotator";
import { PhosphorIcon } from "./phosphor-icon";
import { PhoneLink } from "./shared";

export function HeroSection() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-brand-50 pb-32 pt-40"
    >
      <div className="relative z-10 mx-auto max-w-300 px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-bold text-brand-900">
              <PhosphorIcon
                icon={Sparkle}
                weight="fill"
                className="shrink-0 text-brand-500"
              />
              <span className="inline-flex translate-y-px items-center leading-none">
                종합 환경·홈케어 솔루션
              </span>
            </div>
            <h1 className="mb-6 text-[2.2rem] leading-[1.28] font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              가정부터 시설까지
              <br />
              <span className="hero-highlight-sweep whitespace-nowrap text-brand-900">
                깨끗하게, 책임 있게
              </span>
            </h1>
            <p className="mb-10 text-lg leading-relaxed font-medium text-gray-600">
              포트리스 클린은 가전 홈케어부터 종합청소, 정기청소, 건물청소까지
              공간에 맞는 방식으로 꼼꼼하게 관리합니다.
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-3 text-sm font-medium text-gray-500">
                  예약 및 상담 방법
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-lg shadow-brand-900/30">
                      <PhosphorIcon
                        icon={PhoneCall}
                        weight="fill"
                        className="text-2xl"
                      />
                    </div>
                    <PhoneLink className="text-3xl font-black tracking-wide text-brand-900" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pl-1 text-base font-medium text-gray-500">
                    <PhosphorIcon
                      icon={EnvelopeSimple}
                      weight="fill"
                      className="shrink-0 text-base text-brand-600"
                    />
                    <span>이메일 상담</span>
                    <a
                      href={EMAIL_HREF}
                      className="break-all font-semibold text-brand-900 underline decoration-brand-200 underline-offset-4"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>
              </div>
              <div className="my-2 flex flex-wrap gap-6">
                {HERO_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.label}
                    className={`items-center gap-2 ${item.label === "책임감 있는 사후 관리" ? "hidden sm:flex" : "flex"}`}
                  >
                    <PhosphorIcon
                      icon={item.icon}
                      weight={item.weight}
                      className="text-brand-600"
                    />
                    <span className="text-sm font-bold text-gray-600">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative hidden h-[500px] w-full overflow-hidden rounded-[2.5rem] border-8 border-white bg-gray-200 shadow-2xl shadow-brand-900/10 lg:block">
            <HeroImageRotator />
            <div className="absolute left-8 top-8 flex items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                <PhosphorIcon icon={Broom} weight="fill" className="text-2xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500">공간에 맞춘</p>
                <p className="font-bold text-gray-900">전문 청소 솔루션</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="curve-bg absolute bottom-0 h-[120px] w-full"></div>
    </section>
  );
}
