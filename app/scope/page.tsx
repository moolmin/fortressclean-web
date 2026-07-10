"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Broom,
  Building,
  Buildings,
  CheckCircle,
  OfficeChair,
  Sparkle,
  ThermometerCold,
  WashingMachine,
  Wind,
} from "@/components/fortressclean-home/icons";
import { PhosphorIcon } from "@/components/fortressclean-home/phosphor-icon";
import { RevealObserver } from "@/components/fortressclean-home/reveal-observer";
import { SiteFooter } from "@/components/fortressclean-home/site-footer";
import { SiteHeader } from "@/components/fortressclean-home/site-header";

const HOME_CARE_ITEMS = [
  {
    icon: Wind,
    imageSrc: "/images/scope/homecare-aircon.jpg",
    title: "에어컨 청소",
    desc: "내부 곰팡이와 먼지 상태를 확인한 뒤, 제품 구조에 맞춰 필터·열교환기·송풍부를 꼼꼼하게 세척합니다.",
    features: [
      "시스템·스탠드·벽걸이 에어컨",
      "분해 가능한 커버와 필터 세척",
      "열교환기·송풍팬 고압 세척",
      "조립 후 작동 및 송풍 상태 확인",
    ],
  },
  {
    icon: WashingMachine,
    imageSrc: "/images/scope/homecare-washing-machine.jpg",
    title: "세탁기 청소",
    desc: "세탁조와 고무패킹, 배수부에 쌓인 세제 찌꺼기와 오염을 분해 세척해 위생적인 세탁 환경을 만듭니다.",
    features: [
      "드럼·통돌이 세탁기 및 건조기",
      "세탁조와 분해 가능한 부품 세척",
      "고무패킹·배수필터 오염 제거",
      "조립 후 수평·탈수 상태 확인",
    ],
  },
  {
    icon: Broom,
    imageSrc: "/images/scope/homecare-air-purifier.jpg",
    title: "공기청정기 청소",
    desc: "필터 주변과 내부 송풍부의 먼지를 제거해 공기 흐름을 원활하게 하고 쾌적한 사용 환경을 돕습니다.",
    features: [
      "외부 커버와 필터 주변 청소",
      "내부 팬·흡입구·토출구 분해 세척",
      "먼지 센서 주변 먼지 제거",
      "본체 내외부 클리닝 및 작동 확인",
    ],
  },
  {
    icon: ThermometerCold,
    imageSrc: "/images/scope/homecare-refrigerator.jpg",
    title: "냉장고 외부·기계실 청소",
    desc: "냉장고 외부와 후면 기계실에 쌓인 먼지를 제거해 위생을 관리하고 과열 및 화재 위험 예방을 돕습니다.",
    features: [
      "외부 표면과 손잡이 스팀 세척",
      "후면 기계실 및 방열부 먼지 제거",
      "컴프레서 주변 이물질 정리",
      "외부 표면 마감 클리닝",
    ],
  },
] as const;

const SPACE_ITEMS = [
  {
    icon: Buildings,
    imageSrc: "/images/scope/space-facility-cleaning.jpg",
    title: "시설·단체 청소",
    desc: "지하주차장, 공장, 군부대 등 규모가 큰 현장도 작업 환경에 맞춰 체계적으로 진행합니다.",
    features: [
      "현장 규모에 맞춘 인력·장비 배치",
      "시설 내 집기와 설비 주변 먼지 제거",
      "폐기물 정리 및 주변 공간 마무리",
    ],
  },
  {
    icon: OfficeChair,
    imageSrc: "/images/scope/space-commercial-cleaning.jpg",
    title: "상업 공간 청소",
    desc: "카페, 식당, 매장 등 고객의 이용이 많은 공간을 깨끗하고 쾌적하게 관리합니다.",
    features: [
      "바닥과 출입구 오염 제거",
      "테이블·집기 주변 먼지 관리",
      "유리창과 쇼윈도 얼룩 제거",
    ],
  },
  {
    icon: Building,
    imageSrc: "/images/scope/space-school.jpg",
    title: "학교·교육시설 청소",
    desc: "친환경 세제로 교실과 공용공간을 청소해 안전하고 쾌적한 교육 환경을 조성합니다.",
    features: [
      "교실·복도·계단 청소",
      "책상과 공용 집기 주변 먼지 제거",
      "공간에 적합한 친환경 세제 사용",
    ],
  },
  {
    icon: Broom,
    imageSrc: "/images/scope/space-regular-cleaning.jpg",
    title: "정기 관리 청소",
    desc: "정해진 주기에 맞춰 방문해 사무실, 매장, 공용공간의 청결한 상태를 꾸준히 유지합니다.",
    features: [
      "바닥 청소와 쓰레기 정리",
      "공용 구역 일상 먼지 관리",
      "요청 구역 중심의 맞춤 관리",
    ],
  },
  {
    icon: Buildings,
    imageSrc: "/images/scope/space-common-area-cleaning.jpg",
    title: "건물·공용공간 청소",
    desc: "로비, 계단, 엘리베이터 등 여러 사람이 이용하는 공용공간을 체계적으로 관리합니다.",
    features: [
      "승강기 내·외부 오염 제거",
      "계단과 손잡이 청소",
      "로비와 출입구 바닥 관리",
    ],
  },
  {
    icon: Sparkle,
    imageSrc: "/images/scope/space-move-cleaning.jpg",
    title: "입주·이사 청소",
    desc: "입주 전후 또는 이사 후 공간에 남은 먼지와 오염을 제거해 깨끗한 시작을 돕습니다.",
    features: [
      "화장실·주방·유리창 오염 제거",
      "붙박이장 내부와 수납공간 청소",
      "전등 커버·몰딩·창틀 먼지 제거",
    ],
  },
] as const;

const SCOPE_SUMMARY_COLUMNS = [
  {
    title: "가전·홈케어",
    items: [
      "에어컨 분해 세척 및 관리",
      "세탁기 분해 가능 범위 세척",
      "공기청정기 내부·필터 주변",
      "냉장고 외부·후면 기계실 청소",
    ],
  },
  {
    title: "주거 청소",
    items: [
      "입주·이사·거주 청소",
      "주방·욕실·창틀 집중 청소",
      "거주 공간 곰팡이 제거",
      "공실·빈집 청소",
    ],
  },
  {
    title: "상업·교육시설",
    items: [
      "사무실·학원 정기 청소",
      "학교·교육시설 청소",
      "병원·매장 위생 관리",
      "카페·식당·상가 청소",
    ],
  },
  {
    title: "건물·공용공간",
    items: [
      "계단 및 건물 청소",
      "아파트 공용부 관리",
      "로비·승강기·복도 청소",
      "외벽·유리창·대리석 관리",
    ],
  },
  {
    title: "시설·특수 현장",
    items: [
      "공장 및 대형 시설 청소",
      "지하주차장 바닥 청소",
      "왁스·카펫·특수 바닥 관리",
      "정화조 등 특수 현장 상담",
    ],
  },
] as const;

function ServiceCard({
  icon,
  imageSrc,
  title,
  desc,
  features,
  delay = 0,
}: {
  icon: (typeof HOME_CARE_ITEMS)[number]["icon"];
  imageSrc: string;
  title: string;
  desc: string;
  features: readonly string[];
  delay?: number;
}) {
  return (
    <div
      className="reveal flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative h-44 overflow-hidden border-b border-gray-100 bg-gray-50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-900">
            <PhosphorIcon icon={icon} weight="fill" />
          </div>
          <h3 className="text-lg font-bold tracking-tight text-gray-900">
            {title}
          </h3>
        </div>
        <p className="mb-5 text-md leading-relaxed text-gray-500">{desc}</p>
        <div className="mt-auto border-t border-gray-100 pt-5">
          <ul className="space-y-2.5 text-base font-medium text-gray-600 md:text-sm">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] size-1 rounded-full bg-brand-700"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ScopePage() {
  const [activeTab, setActiveTab] = useState<"homecare" | "space">("homecare");

  return (
    <>
      <RevealObserver />
      <div className="bg-white font-sans text-gray-800 antialiased">
        <SiteHeader />
        <main>
          <section
            id="scope-hero"
            className="relative overflow-hidden bg-brand-900 pb-32 pt-40"
          >
            <div
              aria-hidden="true"
              className="scope-orb scope-orb-left absolute top-24 left-[8%] h-40 w-40 rounded-full bg-brand-300/12 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="scope-orb scope-orb-right absolute right-[10%] bottom-24 h-52 w-52 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative z-10 mx-auto max-w-300 px-6">
              <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="reveal active max-w-2xl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-2 text-sm font-bold text-brand-100 backdrop-blur-sm">
                    <PhosphorIcon
                      icon={Sparkle}
                      weight="fill"
                      className="shrink-0 text-brand-300"
                    />
                    <span className="inline-flex translate-y-px items-center leading-none">
                      종합 환경·홈케어 솔루션
                    </span>
                  </div>
                  <h1 className="mb-6 text-5xl leading-[1.3] font-bold tracking-tight text-white lg:text-6xl">
                    작업범위
                  </h1>
                  <p className="mb-10 text-xl leading-relaxed font-medium text-brand-100">
                    가전 홈케어부터 공간·시설 청소까지,
                    <br />
                    현장에 맞는 방식으로 꼼꼼하게 관리합니다.
                  </p>
                </div>

                <div
                  className="reveal relative hidden h-[500px] w-full overflow-hidden rounded-[2.5rem] border-8 border-white bg-brand-950 shadow-2xl shadow-black/20 lg:block"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <Image
                    src="/images/scope/scope-hero.jpg"
                    alt="포트리스 클린 작업범위 대표 이미지"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="curve-bg absolute bottom-0 h-[120px] w-full" />
          </section>

          <section className="bg-white py-18">
            <div className="mx-auto max-w-300 px-6">
              <div className="reveal mb-16 flex flex-col items-center">
                <h2 className="mb-3 block text-sm font-bold tracking-wider text-brand-600 uppercase">
                  Service Categories
                </h2>
                <div className="relative inline-flex w-full rounded-full border border-gray-200 bg-gray-50 p-1.5 shadow-sm md:w-auto">
                  <div
                    aria-hidden="true"
                    className={`absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] rounded-full bg-brand-900 shadow-md transition-transform duration-300 ease-out ${
                      activeTab === "homecare"
                        ? "translate-x-0"
                        : "translate-x-[calc(100%+0.25rem)]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setActiveTab("homecare")}
                    className={`relative z-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[17px] font-bold transition-colors duration-300 md:flex-none md:w-64 ${
                      activeTab === "homecare"
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    가전 홈케어
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("space")}
                    className={`relative z-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[17px] font-bold transition-colors duration-300 md:flex-none md:w-64 ${
                      activeTab === "space"
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    공간·시설 청소
                  </button>
                </div>
              </div>

              <div
                className={`grid grid-cols-1 gap-6 ${
                  activeTab === "homecare"
                    ? "md:grid-cols-2 lg:grid-cols-4"
                    : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {(activeTab === "homecare" ? HOME_CARE_ITEMS : SPACE_ITEMS).map(
                  (item, index) => (
                    <ServiceCard
                      key={item.title}
                      {...item}
                      delay={Math.min(index * 0.08, 0.32)}
                    />
                  ),
                )}
              </div>
            </div>
          </section>

          <section className="border-t border-gray-100 bg-white py-24">
            <div className="mx-auto max-w-300 px-6">
              <div className="reveal mb-12">
                <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">
                  서비스 범위 요약
                </h3>
                <p className="text-md text-gray-500">
                  상담을 통해 현장에 맞는 상세 작업 범위를 확인하실 수 있습니다.
                </p>
              </div>

              <div className="space-y-4 md:hidden">
                {SCOPE_SUMMARY_COLUMNS.map((column) => (
                  <div
                    key={column.title}
                    className="reveal rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <h4 className="mb-4 text-base font-bold tracking-wider text-brand-900 uppercase">
                      {column.title}
                    </h4>
                    <div className="space-y-3 text-base text-gray-700">
                      {column.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <PhosphorIcon
                            icon={CheckCircle}
                            weight="fill"
                            className="mt-0.5 text-xs text-brand-700"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal hidden overflow-x-auto border-y border-gray-200 md:block">
                <div className="min-w-[900px]">
                  <div className="grid grid-cols-5 border-b border-gray-200 bg-gray-50 text-sm font-bold tracking-wider text-gray-500 uppercase">
                    {SCOPE_SUMMARY_COLUMNS.map((column) => (
                      <div
                        key={column.title}
                        className="border-r border-gray-200/60 px-6 py-4 last:border-r-0"
                      >
                        {column.title}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-5 text-sm text-gray-700">
                    {SCOPE_SUMMARY_COLUMNS.map((column) => (
                      <div
                        key={column.title}
                        className="space-y-3 border-r border-gray-100 px-6 py-6 last:border-r-0"
                      >
                        {column.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <PhosphorIcon
                              icon={CheckCircle}
                              weight="fill"
                              className="text-xs text-brand-700"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
