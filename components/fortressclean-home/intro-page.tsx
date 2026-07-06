import {
  HandWaving,
  Heart,
  ListNumbers,
  Medal,
  Quotes,
  ShieldCheck,
  Star,
  UsersThree,
  Clock,
  Buildings,
  Handshake,
} from "./icons";
import { PhosphorIcon } from "./phosphor-icon";
import { RevealObserver } from "./reveal-observer";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function GreetingSection() {
  return (
    <section
      id="greeting"
      className="relative overflow-hidden bg-brand-50 pt-40 pb-32"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="reveal active">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-900">
              <PhosphorIcon
                icon={HandWaving}
                weight="fill"
                className="text-brand-500"
              />
              대표 인사말
            </div>
            <h1 className="mb-8 text-4xl leading-[1.4] font-bold tracking-tight text-gray-900 lg:text-5xl">
              고객님의 공간을 지키는
              <br />
              <span className="text-brand-900">가장 든든한 요새(Fortress)</span>
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>안녕하십니까, 포트리스 클린입니다.</p>
              <p>
                우리가 머무는 공간은 단순한 물리적 장소를 넘어, 가족의 행복이
                깃들고 내일의 에너지를 충전하는 소중한 안식처입니다. 포트리스
                클린은 그 소중한 공간을 유해 환경으로부터 보호하는
                &apos;요새&apos;가 되겠다는 약속을 담아 시작되었습니다.
              </p>
              <p>
                단순한 청소를 넘어 고객님의 건강과 삶의 질을 높이는 프리미엄
                케어를 지향합니다. 정직한 마음과 숙련된 기술로 믿음을 드리는
                파트너가 되겠습니다.
              </p>
            </div>
            <div className="mt-10 border-t border-brand-200 pt-8">
              <p className="mb-1 text-sm text-gray-500">
                포트리스 클린 임직원 일동
              </p>
              <p className="text-xl font-bold text-brand-900">대표 김산하</p>
            </div>
          </div>

          <div
            className="reveal relative hidden lg:block"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border-8 border-white bg-gray-200 shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-brand-200 to-gray-100 text-brand-300">
                <PhosphorIcon icon={Buildings} className="mb-4 text-9xl" />
                <span className="text-lg font-medium">브랜드 대표 이미지</span>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 max-w-xs rounded-3xl bg-white p-8 shadow-xl">
              <PhosphorIcon
                icon={Quotes}
                weight="fill"
                className="mb-4 text-4xl text-brand-200"
              />
              <p className="font-medium leading-relaxed text-gray-700">
                &quot;우리는 보이지 않는 곳의 청결이 공간의 가치를 결정한다고
                믿습니다.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="curve-bg absolute bottom-0 h-[120px] w-full" />
    </section>
  );
}

function PhilosophySection() {
  const items = [
    {
      icon: Heart,
      title: "정직 (Honesty)",
      description:
        "고객이 보지 않는 곳까지 정량의 약품과 정해진 공정을 엄격히 준수하여 투명한 서비스를 제공합니다.",
    },
    {
      icon: Medal,
      title: "전문성 (Expertise)",
      description:
        "지속적인 기술 교육과 최신 장비 도입을 통해 환경과 가전을 가장 안전하게 케어하는 전문가 집단을 지향합니다.",
    },
    {
      icon: ShieldCheck,
      title: "책임 (Responsibility)",
      description:
        "한 번 맺은 인연을 소중히 여깁니다. 철저한 사후 관리를 통해 고객님의 만족을 끝까지 책임집니다.",
    },
  ] as const;

  return (
    <section id="philosophy" className="bg-white py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal mb-20 text-center">
          <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
            PHILOSOPHY & VALUES
          </span>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            포트리스 클린의 경영철학
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-brand-900" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="reveal group rounded-[2.5rem] bg-gray-50 p-10 transition-all hover:bg-brand-900 hover:text-white"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="icon-box mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand-900 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[5deg]">
                <PhosphorIcon icon={item.icon} className="text-4xl" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
              <p className="leading-relaxed text-gray-500 group-hover:text-brand-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const stats = [
    { icon: Star, value: "98%", label: "고객 만족도" },
    { icon: UsersThree, value: "100%", label: "직영 인력" },
    { icon: ShieldCheck, value: "30일", label: "A/S 무상 보증" },
    { icon: Clock, value: "3년+", label: "평균 업무 경력" },
  ] as const;

  const strengths = [
    {
      icon: UsersThree,
      title: "직영 전문 인력 운용",
      description: "하청을 주지 않고 검증된 직영 팀이 직접 현장을 관리합니다.",
    },
    {
      icon: ListNumbers,
      title: "표준화된 시스템 프로세스",
      description: "체계적인 매뉴얼에 따라 일관된 고품질 서비스를 보장합니다.",
    },
    {
      icon: Handshake,
      title: "30일 안심 책임 보증",
      description: "작업 후 발생하는 문제에 대해 끝까지 추적하여 해결합니다.",
    },
  ] as const;

  return (
    <section id="why" className="bg-brand-50 py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div
            className="reveal order-2 grid grid-cols-2 gap-4 lg:order-1 lg:w-1/2"
            style={{ transitionDelay: "0.2s" }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-brand-200 bg-white p-8 text-center shadow-soft"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <PhosphorIcon
                    icon={item.icon}
                    weight="fill"
                    className="text-2xl"
                  />
                </div>
                <p className="mb-2 text-4xl font-black text-brand-900">
                  {item.value}
                </p>
                <p className="font-bold text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal order-1 lg:order-2 lg:w-1/2">
            <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
              CORE STRENGTHS
            </span>
            <h2 className="mb-6 text-4xl leading-tight font-bold text-gray-900">
              왜 많은 분들이
              <br />
              포트리스 클린을 선택할까요?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              포트리스 클린만의 3대 핵심 경쟁력은 고객님의 소중한 공간을 대하는
              우리의 진심에서 나옵니다.
            </p>

            <div className="space-y-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:translate-x-2"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                    <PhosphorIcon
                      icon={item.icon}
                      weight="fill"
                      className="text-2xl"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IntroPageContent() {
  return (
    <>
      <RevealObserver />
      <div className="bg-white font-sans text-gray-800 antialiased">
        <SiteHeader />
        <main>
          <GreetingSection />
          <PhilosophySection />
          <WhySection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
