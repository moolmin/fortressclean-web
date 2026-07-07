import {
  Buildings,
  Camera,
  CheckCircle,
  HouseLine,
  Info,
  MapPinLine,
  Package,
  Sparkle,
  Stairs,
  Trash,
  Users,
  WashingMachine,
  Wind,
} from "./icons";
import type { Icon, IconWeight } from "./icons";
import { PhosphorIcon } from "./phosphor-icon";
import { RevealObserver } from "./reveal-observer";
import { SectionHeading } from "./shared";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type IconListItem = {
  icon: Icon;
  weight?: IconWeight;
};

const PHOTO_REQUIREMENTS = [
  "제품의 전체 모습이 나오는 정면 사진 1장",
  "제품 모델명이 적힌 라벨(제원표) 사진 1장",
  "가전이 설치된 주변 환경 사진",
  "원하시는 작업 일정 및 특이사항",
] as const;

const VISIT_REQUIREMENTS = [
  "청소가 필요한 공간의 종류 (주거 / 상가 / 공장 등)",
  "대략적인 면적(평수) 및 위치",
  "원하시는 작업 범위 (전체 / 부분 / 특수 오염 제거)",
  "현재 오염 상태 및 희망 일정",
] as const;

const QUOTE_FACTORS: readonly (IconListItem & { label: string })[] = [
  { icon: Package, label: "제품 종류와 모델" },
  { icon: HouseLine, label: "현장 환경과 접근성" },
  { icon: Stairs, label: "공간 면적과 작업 범위" },
  { icon: Sparkle, weight: "fill" as const, label: "오염 상태와 난이도" },
  { icon: Users, label: "투입 인원과 소요 시간" },
  { icon: Trash, label: "추가 장비 필요 여부" },
] as const;

const SERVICE_METHODS: readonly (IconListItem & {
  title: string;
  description: string;
  accentClassName: string;
})[] = [
  {
    icon: Wind,
    title: "가전 홈케어",
    description: "사진 확인 후 견적 안내",
    accentClassName: "bg-brand-50 text-brand-700",
  },
  {
    icon: WashingMachine,
    title: "주거 청소",
    description: "공간 크기와 요청 범위 확인",
    accentClassName: "bg-gray-100 text-gray-700",
  },
  {
    icon: Buildings,
    weight: "fill" as const,
    title: "시설·단체 청소",
    description: "담당자 현장 방문 확인",
    accentClassName: "bg-gray-100 text-gray-700",
  },
] as const;

function RequirementList({
  items,
  accentClassName,
}: {
  items: readonly string[];
  accentClassName: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${accentClassName}`.trim()}
          >
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function QuoteGuidePageContent() {
  return (
    <>
      <RevealObserver />
      <div className="bg-white font-sans text-gray-800 antialiased">
        <SiteHeader />
        <main>
          <section id="quote" className="relative bg-white pt-40 pb-16">
            <div className="mx-auto max-w-300 px-6 text-center">
              <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
                ESTIMATE GUIDE
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                상세 견적 안내
              </h1>
              <p className="text-lg text-gray-600">
                서비스에 따라 가장 빠르고 정확한 견적 방식을 제공합니다.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 py-12 lg:py-16">
            <div className="mx-auto max-w-300 px-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <article className="reveal group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-10">
                  <div className="absolute top-0 right-0 h-32 w-32 scale-90 rounded-bl-[100px] bg-brand-50 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-900">
                      가전 홈케어
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-md">
                        <PhosphorIcon
                          icon={Camera}
                          weight="fill"
                          className="text-3xl"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        사진 견적 가능
                      </h2>
                    </div>
                    <p className="mb-8 leading-relaxed text-gray-500">
                      에어컨, 세탁기 등 가전 홈케어는 제품 사진과 모델명만으로도
                      빠르고 정확하게 견적을 확인하실 수 있습니다.
                    </p>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                      <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                        <PhosphorIcon
                          icon={CheckCircle}
                          weight="fill"
                          className="text-xl text-brand-500"
                        />
                        필요한 정보
                      </h3>
                      <RequirementList
                        items={PHOTO_REQUIREMENTS}
                        accentClassName="border-brand-100 bg-white text-brand-900"
                      />
                    </div>
                  </div>
                </article>

                <article className="reveal group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-10">
                  <div className="absolute top-0 right-0 h-32 w-32 scale-90 rounded-bl-[100px] bg-gray-100 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-full bg-gray-100 px-4 py-1.5 text-sm font-bold text-gray-700">
                      종합청소·정기청소·건물청소·시설청소
                    </div>
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-800 text-white shadow-md">
                        <PhosphorIcon
                          icon={MapPinLine}
                          weight="fill"
                          className="text-3xl"
                        />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        방문 견적 가능
                      </h2>
                    </div>
                    <p className="mb-8 leading-relaxed text-gray-500">
                      공간의 크기와 오염도에 따라 작업 범위가 크게 달라지는 청소
                      서비스는 전문가가 직접 방문하여 정확한 견적을
                      안내드립니다.
                    </p>
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                      <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                        <PhosphorIcon
                          icon={CheckCircle}
                          weight="fill"
                          className="text-xl text-gray-500"
                        />
                        상담 시 준비 정보
                      </h3>
                      <RequirementList
                        items={VISIT_REQUIREMENTS}
                        accentClassName="border-gray-200 bg-white text-gray-700"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="mx-auto max-w-300 px-6">
              <SectionHeading
                title="견적은 이런 기준으로 안내됩니다"
                description="모든 현장의 조건이 다르기 때문에, 서비스 유형과 작업 범위에 맞춰 견적을 안내드립니다."
                className="mb-12"
              />

              <div className="mb-24 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {QUOTE_FACTORS.map((factor) => (
                  <div
                    key={factor.label}
                    className="reveal flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:border-brand-200 hover:shadow-soft"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <PhosphorIcon
                        icon={factor.icon}
                        weight={factor.weight ?? "fill"}
                        className="text-lg"
                      />
                    </div>
                    <span className="font-medium text-gray-800">
                      {factor.label}
                    </span>
                  </div>
                ))}
              </div>

              <SectionHeading
                title="서비스별 견적 방식"
                description="서비스 유형에 따라 가장 적합한 견적 방법을 제공합니다."
                className="mb-10"
              />

              <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {SERVICE_METHODS.map((method) => (
                  <div
                    key={method.title}
                    className="reveal flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${method.accentClassName}`.trim()}
                    >
                      <PhosphorIcon
                        icon={method.icon}
                        weight={method.weight ?? "regular"}
                        className="text-2xl"
                      />
                    </div>
                    <h3 className="mb-2 font-bold text-gray-900">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="reveal mx-auto flex max-w-2xl items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-6 py-4">
                <PhosphorIcon
                  icon={Info}
                  weight="fill"
                  className="shrink-0 text-gray-400"
                />
                <p className="text-center text-sm text-gray-500">
                  같은 서비스라도 현장 조건에 따라 견적이 달라질 수 있습니다.
                </p>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
