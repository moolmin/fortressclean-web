import Image from "next/image";

import { Star } from "./icons";
import {
  GALLERY_INTRO,
  GALLERY_ITEMS,
  QUOTE_INTRO,
  QUOTE_METHODS,
  REVIEW_INTRO,
  REVIEW_ITEMS,
} from "./content";
import { PhosphorIcon } from "./phosphor-icon";
import { DetailCard, SectionHeading } from "./shared";

export function QuoteSection() {
  return (
    <section id="quote" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading {...QUOTE_INTRO} className="mb-12" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {QUOTE_METHODS.map((method) => (
            <DetailCard
              key={method.title}
              badge={method.badge}
              badgeClassName={method.badgeClassName}
              title={method.title}
              description={method.description}
              detail={
                <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-900 shadow-sm">
                    <PhosphorIcon
                      icon={method.icon}
                      weight={method.weight}
                      className="text-xl"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {method.detailTitle}
                    </p>
                    <p className="text-xs text-gray-500">{method.detailText}</p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section id="reviews" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading {...REVIEW_INTRO} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEW_ITEMS.map((review) => (
            <div
              key={`${review.name}-${review.service}`}
              className="reveal rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <PhosphorIcon
                    key={index}
                    icon={Star}
                    weight="fill"
                    className="text-base"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-gray-700">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-900">
                  {review.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-300 px-6">
        <SectionHeading {...GALLERY_INTRO} align="left" className="mb-12" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="reveal group overflow-hidden rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative flex h-64 bg-gray-100">
                <div className="relative h-full w-1/2 overflow-hidden border-r border-white/50">
                  <Image
                    src={item.beforeSrc}
                    alt={item.beforeAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-950/18" />
                  <span className="absolute left-4 top-4 rounded bg-gray-800 px-2 py-1 text-xs text-white">
                    작업 전
                  </span>
                </div>
                <div className="relative h-full w-1/2 overflow-hidden">
                  <Image
                    src={item.afterSrc}
                    alt={item.afterAlt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-950/10" />
                  <span className="absolute left-4 top-4 rounded bg-brand-900 px-2 py-1 text-xs text-white">
                    작업 후
                  </span>
                </div>
              </div>
              <div className="bg-white p-6">
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
}
