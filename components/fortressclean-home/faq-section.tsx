"use client";

import { useState } from "react";

import { Minus, Plus } from "./icons";
import { FAQ_INTRO, HOME_FAQ_ITEMS } from "./content";
import { PhosphorIcon } from "./phosphor-icon";
import { SectionHeading } from "./shared";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[800px] px-6">
        <SectionHeading {...FAQ_INTRO} />
        <div className="space-y-4">
          {HOME_FAQ_ITEMS.map((faq, index) => {
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
                    <PhosphorIcon
                      icon={Plus}
                      className={`absolute inset-0 text-xl text-gray-400 transition duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <PhosphorIcon
                      icon={Minus}
                      className={`absolute inset-0 text-xl text-brand-900 transition duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                    />
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
