"use client";

import { useState } from "react";

import { FAQ_ITEMS } from "./constants";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          {FAQ_ITEMS.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.q}
                className={`faq-details rounded-2xl border border-gray-100 bg-white shadow-sm ${isOpen ? "open" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                  className="flex w-full cursor-pointer items-center justify-between gap-1.5 p-6 text-left font-bold text-gray-900"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl font-black text-brand-600">Q.</span>
                    {faq.q}
                  </span>
                  <span className="relative h-5 w-5 shrink-0">
                    <i
                      className={`ph ph-plus absolute inset-0 text-xl text-gray-400 transition duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                    ></i>
                    <i
                      className={`ph ph-minus absolute inset-0 text-xl text-brand-900 transition duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    ></i>
                  </span>
                </button>
                {isOpen ? (
                  <div
                    id={panelId}
                    className="mt-2 border-t border-gray-50 px-6 pb-6 pt-4 leading-relaxed text-gray-600"
                  >
                    <div className="flex gap-3">
                      <span className="text-xl font-black text-gray-400">A.</span>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
