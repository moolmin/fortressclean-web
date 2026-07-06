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
    desc: "내부 부품 분해 및 고압 세척을 통해 필터와 열교환기의 찌든 오염을 관리합니다.",
    features: [
      "부품 완전 분해 및 조립",
      "친환경 전용 세제 도포",
      "열교환기 고압수 세척",
      "작동 및 풍속 점검",
    ],
  },
  {
    icon: WashingMachine,
    imageSrc: "/images/scope/homecare-washing-machine.jpg",
    title: "세탁기 청소",
    desc: "세탁조 외부와 내부 부품에 쌓인 찌꺼기를 물리적으로 분해하여 세척합니다.",
    features: [
      "세탁조 및 회전판 분해",
      "세탁조 외부 찌든 때 제거",
      "배수 필터 및 고무패킹 세척",
      "수평 및 탈수 기능 테스트",
    ],
  },
  {
    icon: Broom,
    imageSrc: "/images/scope/homecare-air-purifier.jpg",
    title: "공기청정기 청소",
    desc: "내부 팬과 센서에 쌓인 먼지를 제거하여 기기 본연의 공기 순환 효율을 회복합니다.",
    features: [
      "외부 커버 및 프리필터 세척",
      "내부 송풍 팬 먼지 제거",
      "먼지 센서 클리닝",
      "본체 내·외부 살균 닦기",
    ],
  },
  {
    icon: ThermometerCold,
    imageSrc: "/images/scope/homecare-refrigerator.jpg",
    title: "냉장고 청소",
    desc: "선반 분리 세척 및 내부 성에 제거를 통해 위생적인 식품 보관 환경을 조성합니다.",
    features: [
      "선반 및 서랍장 분리 세척",
      "내벽 오염물질 및 얼룩 제거",
      "고무패킹(도어) 이물질 청소",
      "스팀 기기를 활용한 마감",
    ],
  },
] as const;

const SPACE_ITEMS = [
  {
    icon: HouseLine,
    imageSrc: "/images/scope/space-home-cleaning.jpg",
    title: "주거 청소",
    desc: "거주 중인 공간의 일상적인 묵은 때와 먼지를 구역별로 나누어 꼼꼼히 관리합니다.",
    features: [
      "욕실 물때 및 환풍기 청소",
      "주방 후드 및 기름때 제거",
      "창틀 및 방충망 먼지 제거",
    ],
  },
  {
    icon: Sparkle,
    imageSrc: "/images/scope/space-move-cleaning.jpg",
    title: "입주·이사 청소",
    desc: "비어있는 상태에서 이전 거주자의 흔적이나 신축 공사 분진을 집중적으로 제거합니다.",
    features: [
      "공사 분진 및 도배풀 제거",
      "붙박이장 탈거 및 내부 청소",
      "전등 커버 및 몰딩 먼지 제거",
    ],
  },
  {
    icon: Broom,
    imageSrc: "/images/scope/space-regular-cleaning.jpg",
    title: "정기 관리 청소",
    desc: "계약된 주기에 맞춰 방문하여 공간의 청결도를 일정하게 유지하는 맞춤형 서비스입니다.",
    features: [
      "바닥 청소 및 쓰레기 수거",
      "공용 구역 일상 먼지 관리",
      "고객 맞춤형 집중 관리 구역 설정",
    ],
  },
  {
    icon: OfficeChair,
    imageSrc: "/images/scope/space-commercial-cleaning.jpg",
    title: "상업 공간 청소",
    desc: "카페, 식당, 매장 등 고객 방문이 잦은 상업 공간의 위생 상태를 전문적으로 개선합니다.",
    features: [
      "집기류 외부 먼지 및 오염 제거",
      "바닥 재질에 따른 맞춤 세정",
      "유리창 및 쇼윈도 투명도 복원",
    ],
  },
  {
    icon: Buildings,
    imageSrc: "/images/scope/space-common-area-cleaning.jpg",
    title: "건물·공용공간 청소",
    desc: "빌딩 로비, 계단, 화장실 등 다수가 이용하는 공용 구역을 쾌적하게 관리합니다.",
    features: [
      "승강기 내·외부 오염 제거",
      "계단 논슬립 및 난간대 청소",
      "공용 화장실 악취 및 물때 제거",
    ],
  },
  {
    icon: Buildings,
    imageSrc: "/images/scope/space-facility-cleaning.jpg",
    title: "시설·단체 청소",
    desc: "학교, 병원, 학원 등 특수 목적 시설의 규격과 요구사항에 맞춘 대규모 청소를 진행합니다.",
    features: [
      "대면적 바닥 기계 세척",
      "시설 내 집기 및 설비 먼지 제거",
      "폐기물 집하장 주변 정리",
    ],
  },
] as const;

const SCOPE_SUMMARY_COLUMNS = [
  {
    title: "가전 홈케어",
    items: [
      "부품 완전 분해 세척",
      "열교환기/필터 고압수",
      "전용 친환경 세제 적용",
      "조립 후 작동 테스트",
    ],
  },
  {
    title: "주거 청소",
    items: [
      "방/거실 바닥 및 벽면",
      "주방 기름때 및 후드",
      "욕실 물때 및 배수구",
      "창틀 및 내측 유리",
    ],
  },
  {
    title: "상업 공간",
    items: [
      "매장 집기류 겉면 먼지",
      "쇼윈도 및 출입문 유리",
      "바닥 재질별 맞춤 세척",
      "창고/비품실 바닥 정리",
    ],
  },
  {
    title: "공용 공간",
    items: [
      "건물 로비 및 현관",
      "승강기 내·외부 클리닝",
      "계단실 논슬립 및 난간",
      "층별 공용 화장실",
    ],
  },
  {
    title: "대형 시설",
    items: [
      "대면적 바닥 장비 세척",
      "강당/체육관 전문 관리",
      "시설 내 설비 외부 먼지",
      "폐기물 집하 구역 정리",
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
        <p className="mb-5 text-sm leading-relaxed text-gray-500">{desc}</p>
        <div className="mt-auto border-t border-gray-50 pt-5">
          <ul className="space-y-2.5 text-[13px] font-medium text-gray-600">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <PhosphorIcon
                  icon={CheckCircle}
                  weight="fill"
                  className="mt-0.5 text-xs text-brand-700"
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
