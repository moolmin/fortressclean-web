import { PHONE_NUMBER } from "./constants";

export function ASSection() {
  return (
    <section id="as" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] bg-brand-900 p-10 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/30 lg:flex-row lg:p-16">
          <svg
            className="absolute right-0 top-0 h-full text-brand-800 opacity-50"
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
            <p className="ml-16 mt-2 text-sm text-brand-200">
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
            <p className="ml-16 mt-2 text-sm text-brand-200">
              *고객 과실 제외, 청소 불량 및 장비 이상 발생 시
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
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
            {PHONE_NUMBER}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            상담 시간: 매일 09:00 ~ 20:00 (주말/공휴일 가능)
          </p>
        </div>
      </div>
    </section>
  );
}
