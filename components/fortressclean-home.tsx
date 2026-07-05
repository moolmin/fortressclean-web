"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  if (target) {
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
          >
            <path
              d="M14 32V16C14 11.5817 17.5817 8 22 8H30"
              stroke="#1E3A8A"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 20H26"
              stroke="#1E3A8A"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="28" r="4" fill="#e6ebf7" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-brand-900">
            포트리스 클린
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
            className="font-medium text-gray-600 transition-colors hover:text-brand-900"
          >
            서비스
          </a>
          <a
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("process");
            }}
            className="font-medium text-gray-600 transition-colors hover:text-brand-900"
          >
            작업과정
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}
            className="font-medium text-gray-600 transition-colors hover:text-brand-900"
          >
            작업사진
          </a>
          <a
            href="#quote"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("quote");
            }}
            className="font-medium text-gray-600 transition-colors hover:text-brand-900"
          >
            견적안내
          </a>
          <a
            href="#as"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("as");
            }}
            className="font-medium text-gray-600 transition-colors hover:text-brand-900"
          >
            A/S
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("faq");
            }}
            className="font-medium text-gray-600 transition-colors hover:text-brand-900"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-gray-500">
              예약 및 문의
            </span>
            <span className="text-lg font-bold text-brand-900">
              010-8115-9256
            </span>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="rounded-full bg-brand-900 px-5 py-2.5 font-medium text-white shadow-md shadow-brand-900/20 transition-colors hover:bg-brand-800"
          >
            문의하기
          </a>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="relative overflow-hidden bg-brand-50 pb-32 pt-40">
    <div className="relative z-10 mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-bold text-brand-900">
            <i className="ph-fill ph-sparkle text-brand-500"></i>
            종합 환경 & 홈케어 솔루션
          </div>
          <h1 className="mb-6 text-5xl leading-[1.3] font-bold tracking-tight text-gray-900 lg:text-6xl">
            생활 공간과 가전을
            <br />
            <span className="text-brand-900">깨끗하고 안전하게</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-gray-600">
            포트리스 클린은 가전 홈케어부터 종합청소, 정기청소, 건물청소까지
            꼼꼼하게 관리하는 종합 환경·홈케어 솔루션입니다.
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white shadow-lg shadow-brand-900/30">
                <i className="ph-fill ph-phone-call text-2xl"></i>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  예약 및 상담
                </p>
                <p className="text-3xl font-black tracking-wide text-brand-900">
                  010-8115-9256
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 my-2">
              <div className="flex items-center gap-2 ">
                <i className="ph-fill ph-users text-brand-600"></i>
                <span className="text-sm font-bold text-gray-600">
                  직영 전문인력
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-list-checks text-brand-600"></i>
                <span className="text-sm font-bold text-gray-600">
                  체계적인 작업 과정
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ph-fill ph-shield-check text-brand-600"></i>
                <span className="text-sm font-bold text-gray-600">
                  책임감 있는 사후 관리
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[500px] w-full overflow-hidden rounded-[2.5rem] border-8 border-white bg-gray-200 shadow-2xl shadow-brand-900/10 lg:block">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-brand-100 to-gray-50 text-brand-300">
            <i className="ph ph-house-line mb-4 text-8xl"></i>
            <span className="text-lg font-medium">쾌적한 공간 이미지</span>
          </div>
          <div className="absolute top-8 left-8 flex items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-900">
              <i className="ph-fill ph-shield-check text-2xl"></i>
            </div>
            <div>
              <p className="text-xs text-gray-500">믿을 수 있는</p>
              <p className="font-bold text-gray-900">30일 A/S 보증</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="curve-bg absolute bottom-0 h-[120px] w-full"></div>
  </section>
);

const FeaturesSection = () => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
        {[
          [
            "ph-fill ph-magnifying-glass",
            "꼼꼼한 작업",
            "보이지 않는 곳까지",
            "철저하게 청소합니다",
          ],
          [
            "ph-fill ph-package",
            "제품 보호",
            "가전 및 주변 환경을",
            "안전하게 보호합니다",
          ],
          [
            "ph-fill ph-bell-ringing",
            "사전 안내",
            "방문 전 일정과",
            "주의사항을 안내합니다",
          ],
          [
            "ph-fill ph-check-square-offset",
            "작업 후 확인",
            "고객님과 함께",
            "최종 결과를 확인합니다",
          ],
        ].map(([icon, title, line1, line2]) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-3xl bg-gray-50 p-6 text-center transition-colors hover:bg-brand-50"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-900 shadow-sm">
              <i className={`${icon} text-3xl`}></i>
            </div>
            <h3 className="mb-2 font-bold text-gray-900">{title}</h3>
            <p className="text-sm leading-snug text-gray-500">
              {line1}
              <br />
              {line2}
            </p>
          </div>
        ))}
        <div className="col-span-2 flex flex-col items-center rounded-3xl bg-gray-50 p-6 text-center transition-colors hover:bg-brand-50 lg:col-span-1">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-900 text-white shadow-sm">
            <i className="ph-fill ph-shield-check text-3xl"></i>
          </div>
          <h3 className="mb-2 font-bold text-brand-900">30일 A/S 보증</h3>
          <p className="text-sm leading-snug text-gray-500">
            작업 후 문제 발생 시<br />
            확실하게 책임집니다
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HomeCareSection = () => {
  const services = [
    {
      icon: "ph ph-wind",
      title: "에어컨 관리",
      desc: "내부 곰팡이와 먼지를 고압 세척으로 완벽하게 제거하여 맑은 바람을 찾아드립니다.",
      features: ["벽걸이/스탠드/시스템", "완전 분해 고압 세척"],
    },
    {
      icon: "ph ph-washing-machine",
      title: "세탁기 관리",
      desc: "보이지 않는 세탁조 안팎의 찌든 때와 유해 세균을 살균 소독하여 세탁 품질을 높입니다.",
      features: ["통돌이/드럼 세탁기", "이물질 완벽 제거"],
    },
    {
      icon: "ph ph-fan",
      title: "공기청정기 관리",
      desc: "필터 교체만으로는 부족한 내부 팬과 센서의 오염을 정밀하게 청소합니다.",
      features: ["내부 부품 분해 세척", "성능 저하 방지"],
    },
    {
      icon: "ph ph-thermometer-cold",
      title: "냉장고 관리",
      desc: "음식물 냄새와 얼룩, 고무패킹의 곰팡이를 스팀 살균하여 위생적인 보관 환경을 만듭니다.",
      features: ["내부 스팀 살균", "선반/서랍 탈거 세척"],
    },
  ];

  return (
    <section id="services" className="relative bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
            HOME CARE
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            가전 홈케어 서비스
          </h2>
          <p className="text-gray-500">
            완전 분해 청소로 가전제품의 수명을 늘리고 쾌적한 실내 공기를
            만듭니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal rounded-[2rem] border border-gray-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-900">
                <i className={`${service.icon} text-4xl`}></i>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <i className="ph-fill ph-check-circle text-brand-500"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComprehensiveSection = () => {
  const items = [
    {
      icon: "ph-fill ph-sparkle",
      title: "종합청소",
      desc: "공간 전체의 오염을 제거하는 맞춤형 대청소 서비스",
    },
    {
      icon: "ph-fill ph-calendar-check",
      title: "정기청소",
      desc: "주/월 단위로 방문하여 항상 청결한 상태를 유지",
    },
    {
      icon: "ph-fill ph-buildings",
      title: "건물청소",
      desc: "상가, 빌라 등 건물 내외부 공용 공간 위생 관리",
    },
    {
      icon: "ph-fill ph-house-line",
      title: "입주·이사·거주청소",
      desc: "새집증후군 완화 및 묵은 때 제거로 안전한 입주 준비",
    },
    {
      icon: "ph-fill ph-office-chair",
      title: "사무실·병원·학원",
      desc: "업무 및 진료 환경에 맞는 전문적인 살균 청소",
    },
    {
      icon: "ph-fill ph-stairs",
      title: "계단·아파트·공장·외벽",
      desc: "특수 장비가 필요한 대형 공간 및 고난이도 구역 청소",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-50 py-24">
      <div className="curve-top absolute top-0 h-[80px] w-full"></div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-8">
        <div className="mb-16 text-center">
          <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
            COMPREHENSIVE CLEANING
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            종합 청소 서비스
          </h2>
          <p className="text-gray-500">
            주거공간부터 상업공간까지, 전문 장비와 약품으로 쾌적한 환경을
            조성합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                <i className={`${item.icon} text-2xl`}></i>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { step: "STEP 01", icon: "ph ph-headset", title: "상담", active: false },
    {
      step: "STEP 02",
      icon: "ph ph-camera",
      title: "사진/방문 견적",
      active: false,
    },
    {
      step: "STEP 03",
      icon: "ph ph-calendar-plus",
      title: "일정 예약",
      active: false,
    },
    {
      step: "STEP 04",
      icon: "ph-fill ph-broom",
      title: "방문 작업",
      active: true,
    },
    { step: "STEP 05", icon: "ph ph-trash", title: "정리", active: false },
    {
      step: "STEP 06",
      icon: "ph ph-check-circle",
      title: "작업 후 확인",
      active: false,
    },
  ];

  return (
    <section id="process" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            체계적인 작업 과정
          </h2>
          <p className="text-gray-500">
            상담부터 사후 관리까지 투명하고 꼼꼼하게 진행됩니다.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-between lg:flex-row">
          <div className="absolute top-12 left-[5%] right-[5%] z-0 hidden h-0.5 bg-gray-100 lg:block"></div>
          {steps.map((step, index) => (
            <div key={step.step} className="contents">
              <div className="reveal group relative z-10 mb-8 flex w-full flex-col items-center text-center lg:mb-0 lg:w-40">
                <div
                  className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 shadow-sm transition-all duration-300 ${step.active ? "border-brand-100 bg-brand-900 text-white shadow-md group-hover:scale-110 group-hover:shadow-xl" : "border-gray-50 bg-white text-brand-900 group-hover:scale-110 group-hover:border-brand-200 group-hover:shadow-lg"}`}
                >
                  <i className={`${step.icon} text-4xl`}></i>
                </div>
                <span className="mb-1 text-sm font-bold text-brand-600">
                  {step.step}
                </span>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
              {index < steps.length - 1 && (
                <div className="mb-8 block text-gray-300 lg:hidden">
                  <i className="ph-bold ph-caret-down text-2xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => (
  <section id="quote" className="bg-gray-50 py-20">
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          편리한 견적 안내
        </h2>
        <p className="text-gray-500">
          고객님의 편의를 위해 서비스별 맞춤 견적 방식을 제공합니다.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="reveal flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <div className="mb-4 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-900">
              가전 홈케어
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              사진 견적 가능
            </h3>
            <p className="mb-6 leading-relaxed text-gray-500">
              에어컨, 세탁기 등 가전제품은 제품의 전체 사진과 모델명이 보이는
              라벨 사진을 보내주시면 빠르고 정확하게 견적을 안내해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-900 shadow-sm">
              <i className="ph-fill ph-image text-xl"></i>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">사진 2장 전송</p>
              <p className="text-xs text-gray-500">
                제품 전면 사진 + 모델명 라벨 사진
              </p>
            </div>
          </div>
        </div>
        <div className="reveal flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div>
            <div className="mb-4 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-700">
              종합/건물 청소
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              무료 방문 견적
            </h3>
            <p className="mb-6 leading-relaxed text-gray-500">
              오염도와 평수에 따라 비용이 달라지는 종합청소, 정기청소 등은
              전문가가 직접 현장을 방문하여 정확한 견적을 산출해 드립니다.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-900 shadow-sm">
              <i className="ph-fill ph-map-pin-line text-xl"></i>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                일정 조율 후 방문
              </p>
              <p className="text-xs text-gray-500">
                현장 상황 파악 및 투명한 견적 제시
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = () => {
  const items = [
    {
      title: "세탁기 완전 분해 청소",
      desc: "세탁조 외부의 찌든 때와 곰팡이 완벽 제거",
    },
    {
      title: "에어컨 내부 고압 세척",
      desc: "냉각핀 사이의 먼지와 세균층 고압 살균 세척",
    },
    {
      title: "주차장 바닥 찌든 때 제거",
      desc: "건물 주차장 바닥의 오랜 오일 마크 및 오염 제거",
    },
    {
      title: "주방 후드 기름때 제거",
      desc: "거주 청소 시 주방 후드망의 굳은 기름때 완전 분해",
    },
  ];

  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              실제 작업 사례
            </h2>
            <p className="text-gray-500">
              포트리스 클린의 확실한 변화를 확인하세요.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="reveal group overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative flex h-64 bg-gray-100">
                <div className="relative flex h-full w-1/2 flex-col items-center justify-center border-r border-white/50 bg-gray-200 text-gray-400">
                  <i className="ph ph-image-broken mb-2 text-4xl"></i>
                  <span className="absolute top-4 left-4 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                    작업 전
                  </span>
                </div>
                <div className="relative flex h-full w-1/2 flex-col items-center justify-center bg-brand-50 text-brand-300">
                  <i className="ph ph-sparkle mb-2 text-4xl"></i>
                  <span className="absolute top-4 left-4 rounded bg-brand-900 px-2 py-1 text-xs text-white">
                    작업 후
                  </span>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="mb-1 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-1 text-sm font-bold text-brand-600 transition-colors hover:text-brand-800"
                  >
                    자세히 보기 <i className="ph ph-caret-right"></i>
                  </a>
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ASSection = () => (
  <section id="as" className="bg-white py-16">
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="reveal relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] bg-brand-900 p-10 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/30 lg:flex-row lg:p-16">
        <svg
          className="absolute top-0 right-0 h-full text-brand-800 opacity-50"
          viewBox="0 0 200 400"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M200 0C100 100 50 250 200 400V0Z" />
        </svg>
        <div className="relative z-10 w-full flex-1">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <i className="ph-fill ph-map-pin text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold">서비스 가능 지역</h3>
          </div>
          <p className="ml-16 text-lg text-brand-100">
            서울 남부 및 경기, 인천 등{" "}
            <strong className="text-white">수도권역 전역</strong>
          </p>
          <p className="mt-2 ml-16 text-sm text-brand-200">
            *상세 지역은 상담 시 확인 가능합니다.
          </p>
        </div>
        <div className="relative z-10 hidden h-24 w-px bg-white/20 lg:block"></div>
        <div className="relative z-10 block h-px w-full bg-white/20 lg:hidden"></div>
        <div className="relative z-10 w-full flex-1">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <i className="ph-fill ph-shield-check text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold">포트리스 30일 안심 A/S</h3>
          </div>
          <p className="ml-16 text-lg text-brand-100">
            작업 <strong className="text-white">다음날로부터 30일까지</strong>{" "}
            무상 보증
          </p>
          <p className="mt-2 ml-16 text-sm text-brand-200">
            *고객 과실 제외, 청소 불량 및 장비 이상 발생 시
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const faqs = [
    {
      q: "예약은 어떻게 진행하나요?",
      a: "전화(010-8115-9256) 또는 문자 메시지로 원하시는 서비스와 일정을 남겨주시면, 담당자가 확인 후 신속하게 상담 및 예약을 도와드립니다.",
    },
    {
      q: "가전 청소 시간은 얼마나 걸리나요?",
      a: "제품의 종류와 오염도에 따라 다릅니다만, 일반적으로 벽걸이 에어컨은 1시간~1시간 30분, 스탠드 에어컨은 1시간 30분~2시간, 드럼 세탁기는 2시간~3시간 정도 소요됩니다.",
    },
    {
      q: "결제는 언제 어떻게 하나요?",
      a: "모든 청소 작업이 완료된 후, 고객님과 함께 현장을 꼼꼼히 확인하고 이상이 없을 시 전액 후불 결제로 진행됩니다. 계좌이체 등 편리한 방법으로 결제 가능합니다.",
    },
    {
      q: "주말이나 공휴일에도 작업이 가능한가요?",
      a: "네, 고객님의 일정에 맞춰 주말 및 공휴일에도 예약 및 작업이 가능합니다. 단, 주말 예약은 조기 마감될 수 있으니 미리 연락 주시면 감사하겠습니다.",
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            자주 묻는 질문
          </h2>
          <p className="text-gray-500">
            고객님들께서 가장 많이 궁금해하시는 내용을 모았습니다.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group faq-details rounded-2xl border border-gray-100 bg-white shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 font-bold text-gray-900">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-black text-brand-600">Q.</span>
                  {faq.q}
                </div>
                <span className="relative h-5 w-5 shrink-0">
                  <i className="ph ph-plus absolute inset-0 text-xl text-gray-400 transition duration-300 group-open:opacity-0"></i>
                  <i className="ph ph-minus absolute inset-0 text-xl text-brand-900 opacity-0 transition duration-300 group-open:opacity-100"></i>
                </span>
              </summary>
              <div className="mt-2 border-t border-gray-50 px-6 pt-4 pb-6 leading-relaxed text-gray-600">
                <div className="flex gap-3">
                  <span className="text-xl font-black text-gray-400">A.</span>
                  <p>{faq.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="relative overflow-hidden bg-white py-24">
    <svg
      className="absolute bottom-0 left-0 -z-10 h-[200px] w-full text-brand-50 opacity-50"
      viewBox="0 0 1440 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 200V0C400 150 800 150 1440 0V200H0Z" />
    </svg>
    <div className="mx-auto max-w-[800px] px-6 text-center">
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-brand-900 shadow-sm">
        <i className="ph-fill ph-headset text-4xl"></i>
      </div>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
        깨끗한 공간, 지금 바로 문의하세요
      </h2>
      <p className="mb-10 text-lg text-gray-600">
        친절하고 상세하게 상담해 드리겠습니다.
      </p>
      <div className="mb-10 rounded-3xl border-2 border-brand-100 bg-white p-8 shadow-lg shadow-brand-900/5">
        <p className="mb-2 text-sm font-bold text-brand-600">
          예약 및 상담 번호
        </p>
        <p className="text-4xl font-black tracking-wider text-brand-900 lg:text-5xl">
          010-8115-9256
        </p>
        <p className="mt-4 text-sm text-gray-500">
          상담 시간: 매일 09:00 ~ 20:00 (주말/공휴일 가능)
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-gray-800 bg-gray-900 py-16 text-gray-400">
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center gap-3">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 opacity-90"
            >
              <path
                d="M14 32V16C14 11.5817 17.5817 8 22 8H30"
                stroke="white"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 20H26"
                stroke="white"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="28"
                cy="28"
                r="4"
                fill="currentColor"
                className="text-gray-700"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight text-white">
              포트리스 클린
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            가전 홈케어부터 종합 환경 청소까지, 포트리스 클린은 정직하고 꼼꼼한
            서비스로 고객님의 쾌적한 생활 공간을 책임집니다.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">서비스 메뉴</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="transition-colors hover:text-white"
              >
                가전 홈케어
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="transition-colors hover:text-white"
              >
                종합 청소 서비스
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("process");
                }}
                className="transition-colors hover:text-white"
              >
                작업 과정
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("gallery");
                }}
                className="transition-colors hover:text-white"
              >
                실제 작업 사진
              </a>
            </li>
            <li>
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("quote");
                }}
                className="transition-colors hover:text-white"
              >
                견적 안내
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">고객센터</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <i className="ph-fill ph-phone mt-0.5 text-gray-500"></i>
              <span className="font-bold text-white">010-8115-9256</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ph-fill ph-clock mt-0.5 text-gray-500"></i>
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

export default function FortressCleanHome() {
  useEffect(() => {
    const phosphorScript = document.createElement("script");
    phosphorScript.src = "https://unpkg.com/@phosphor-icons/web";
    document.head.appendChild(phosphorScript);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
      observer.observe(element);
    });

    const detailsElements = Array.from(
      document.querySelectorAll<HTMLDetailsElement>("details"),
    );
    detailsElements.forEach((item) => {
      const onToggle = () => {
        if (item.open) {
          detailsElements.forEach((other) => {
            if (other !== item && other.open) {
              other.open = false;
            }
          });
        }
      };

      item.addEventListener("toggle", onToggle);
      item.dataset.toggleBound = "true";
      (
        item as HTMLDetailsElement & { __toggleHandler?: () => void }
      ).__toggleHandler = onToggle;
    });

    return () => {
      observer.disconnect();
      detailsElements.forEach((item) => {
        const boundItem = item as HTMLDetailsElement & {
          __toggleHandler?: () => void;
        };
        if (boundItem.__toggleHandler) {
          item.removeEventListener("toggle", boundItem.__toggleHandler);
        }
      });
      if (document.head.contains(phosphorScript)) {
        document.head.removeChild(phosphorScript);
      }
    };
  }, []);

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HomeCareSection />
        <ComprehensiveSection />
        <ProcessSection />
        <QuoteSection />
        <GallerySection />
        <ASSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
