import { GALLERY_ITEMS } from "./constants";

export function QuoteSection() {
  return (
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
}

export function GallerySection() {
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
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="reveal group overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative flex h-64 bg-gray-100">
                <div className="relative flex h-full w-1/2 flex-col items-center justify-center border-r border-white/50 bg-gray-200 text-gray-400">
                  <i className="ph ph-image-broken mb-2 text-4xl"></i>
                  <span className="absolute left-4 top-4 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                    작업 전
                  </span>
                </div>
                <div className="relative flex h-full w-1/2 flex-col items-center justify-center bg-brand-50 text-brand-300">
                  <i className="ph ph-sparkle mb-2 text-4xl"></i>
                  <span className="absolute left-4 top-4 rounded bg-brand-900 px-2 py-1 text-xs text-white">
                    작업 후
                  </span>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="mb-1 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-bold text-brand-600 transition-colors hover:text-brand-800"
                  >
                    자세히 보기 <i className="ph ph-caret-right"></i>
                  </button>
                </div>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
