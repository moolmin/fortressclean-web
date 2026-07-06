"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Broom,
  Buildings,
  CheckCircle,
  HouseLine,
  OfficeChair,
  Sparkle,
  ThermometerCold,
  WashingMachine,
  Wind,
} from "@/components/fortressclean-home/icons";
import { PhosphorIcon } from "@/components/fortressclean-home/phosphor-icon";
import { SiteFooter } from "@/components/fortressclean-home/site-footer";
import { SiteHeader } from "@/components/fortressclean-home/site-header";

const HOME_CARE_ITEMS = [
  {
    icon: Wind,
    imageSrc: "/images/scope/homecare-aircon.jpg",
    title: "에어컨 청소",
    desc: "내부 오염 상태를 확인하고, 필터와 열교환기 주변을 제품 구조에 맞춰 세척합니다.",
    features: [
      "분해 가능한 부품 분리 세척",
      "필터 및 커버 오염 제거",
      "열교환기 주변 고압 세척",
      "작동 상태 및 송풍 확인",
    ],
  },
  {
    icon: WashingMachine,
    imageSrc: "/images/scope/homecare-washing-machine.jpg",
    title: "세탁기 청소",
    desc: "세탁조와 내부 부품 주변에 쌓인 세제 찌꺼기와 오염을 꼼꼼하게 세척합니다.",
    features: [
      "세탁조 및 분해 가능 부품 세척",
      "세탁조 외부 오염 제거",
      "배수 필터 및 고무패킹 세척",
      "수평 및 탈수 기능 확인",
    ],
  },
  {
    icon: Broom,
    imageSrc: "/images/scope/homecare-air-purifier.jpg",
    title: "공기청정기 청소",
    desc: "공기가 지나가는 내부 부품과 필터 주변 먼지를 정리해 쾌적한 사용 환경을 돕습니다.",
    features: [
      "외부 커버 및 프리필터 세척",
      "내부 송풍 팬 먼지 제거",
      "먼지 센서 주변 클리닝",
      "본체 내·외부 닦아 마감",
    ],
  },
  {
    icon: ThermometerCold,
    imageSrc: "/images/scope/homecare-refrigerator.jpg",
    title: "냉장고 청소",
    desc: "음식물이 닿는 내부 공간과 고무패킹 오염을 관리해 위생적인 보관 환경을 만듭니다.",
    features: [
      "선반 및 서랍장 분리 세척",
      "내부 오염 및 얼룩 제거",
      "고무패킹 이물질 청소",
      "내부 정리 및 마감 클리닝",
    ],
  },
] as const;

const SPACE_ITEMS = [
  {
    icon: HouseLine,
    imageSrc: "/images/scope/space-home-cleaning.jpg",
    title: "주거 청소",
    desc: "거주 중인 공간의 먼지와 생활 오염을 구역별로 나누어 꼼꼼하게 관리합니다.",
    features: [
      "욕실 물때 및 환풍기 주변 청소",
      "주방 후드 및 기름때 제거",
      "창틀 및 방충망 먼지 제거",
    ],
  },
  {
    icon: Sparkle,
    imageSrc: "/images/scope/space-move-cleaning.jpg",
    title: "입주·이사 청소",
    desc: "입주 전후, 이사 전후 공간에 남은 먼지와 오염을 정리해 깨끗한 시작을 돕습니다.",
    features: [
      "공사 분진 및 생활 오염 제거",
      "붙박이장 내부 및 수납공간 청소",
      "전등 커버, 몰딩, 창틀 먼지 제거",
    ],
  },
  {
    icon: Broom,
    imageSrc: "/images/scope/space-regular-cleaning.jpg",
    title: "정기 관리 청소",
    desc: "정해진 주기에 맞춰 방문하여 공간의 청결한 상태를 꾸준히 유지합니다.",
    features: [
      "바닥 청소 및 쓰레기 정리",
      "공용 구역 일상 먼지 관리",
      "요청 구역 중심의 맞춤 관리",
    ],
  },
  {
    icon: OfficeChair,
    imageSrc: "/images/scope/space-commercial-cleaning.jpg",
    title: "상업 공간 청소",
    desc: "카페, 식당, 매장 등 고객 방문이 잦은 공간을 쾌적하게 관리합니다.",
    features: [
      "집기류 외부 먼지 및 오염 제거",
      "바닥 재질에 맞는 세정 관리",
      "유리창 및 쇼윈도 오염 관리",
    ],
  },
  {
    icon: Buildings,
    imageSrc: "/images/scope/space-common-area-cleaning.jpg",
    title: "건물·공용공간 청소",
    desc: "빌딩 로비, 계단, 화장실 등 여러 사람이 이용하는 공용 공간을 체계적으로 관리합니다.",
    features: [
      "승강기 내·외부 오염 제거",
      "계단 논슬립 및 난간대 청소",
      "공용 화장실 물때 및 오염 관리",
    ],
  },
  {
    icon: Buildings,
    imageSrc: "/images/scope/space-facility-cleaning.jpg",
    title: "시설·단체 청소",
    desc: "학교, 병원, 학원, 군부대, 지하주차장 등 규모 있는 현장도 작업 환경에 맞춰 진행합니다.",
    features: [
      "대면적 바닥 기계 세척",
      "시설 내 집기 및 설비 먼지 제거",
      "폐기물 집하장 및 주변 공간 정리",
    ],
  },
] as const;

const SCOPE_SUMMARY_COLUMNS = [
  {
    title: "가전 홈케어",
    items: [
      "분해 가능한 부품 세척",
      "필터 및 열교환기 주변 세척",
      "제품별 오염 상태 확인",
      "조립 후 작동 확인",
    ],
  },
  {
    title: "주거 청소",
    items: [
      "방, 거실 바닥 및 벽면 관리",
      "주방 후드 및 기름때 관리",
      "욕실 물때 및 배수구 청소",
      "창틀 및 내부 유리 청소",
    ],
  },
  {
    title: "상업 공간",
    items: [
      "매장 집기류 겉면 먼지 제거",
      "쇼윈도 및 출입문 유리 관리",
      "바닥 재질에 맞춘 세정",
      "창고 및 비품실 바닥 정리",
    ],
  },
  {
    title: "공용 공간",
    items: [
      "건물 로비 및 현관 청소",
      "승강기 내·외부 클리닝",
      "계단 논슬립 및 난간 청소",
      "층별 공용 화장실 관리",
    ],
  },
  {
    title: "대형 시설",
    items: [
      "대면적 바닥 기계 세척",
      "강당 등 넓은 공간 관리",
      "시설 내 및 설비 먼지 제거",
      "폐기물 집하장 주변 정리",
    ],
  },
] as const;

function ServiceCard({
  icon,
  imageSrc,
  title,
  desc,
  features,
}: {
  icon: (typeof HOME_CARE_ITEMS)[number]["icon"];
  imageSrc: string;
  title: string;
  desc: string;
  features: readonly string[];
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
          <ul className="space-y-2.5 text-sm font-medium text-gray-600">
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
    <div className="bg-white font-sans text-gray-800 antialiased">
      <SiteHeader />
      <main>
        <section
          id="scope-hero"
          className="relative overflow-hidden bg-brand-900 pb-32 pt-40"
        >
          <div className="relative z-10 mx-auto max-w-[1200px] px-6">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-1.5 text-sm font-bold text-brand-100 backdrop-blur-sm">
                  <PhosphorIcon
                    icon={Sparkle}
                    weight="fill"
                    className="text-brand-300"
                  />
                  종합 환경·홈케어 솔루션
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

              <div className="relative hidden h-[500px] w-full overflow-hidden rounded-[2.5rem] border-8 border-white bg-brand-950 shadow-2xl shadow-black/20 lg:block">
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

        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-16 flex flex-col items-center">
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
                  className={`relative z-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[16px] font-bold transition-colors duration-300 md:flex-none md:w-64 ${
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
                  className={`relative z-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition-colors duration-300 md:flex-none md:w-64 ${
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
                (item) => (
                  <ServiceCard key={item.title} {...item} />
                ),
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-white py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-12">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                서비스 범위 요약
              </h3>
              <p className="text-sm text-gray-500">
                상담을 통해 현장에 맞는 상세 작업 범위를 확인하실 수 있습니다.
              </p>
            </div>

            <div className="space-y-4 md:hidden">
              {SCOPE_SUMMARY_COLUMNS.map((column) => (
                <div
                  key={column.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <h4 className="mb-4 text-sm font-bold tracking-wider text-brand-900 uppercase">
                    {column.title}
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
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

            <div className="hidden overflow-x-auto border-y border-gray-200 md:block">
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
  );
}
