"use client";

import { useState } from "react";

import {
  EMAIL_ADDRESS,
  EMAIL_HREF,
  FAQ_ITEMS,
  PHONE_NUMBER,
} from "./content";
import { Headset, Minus, Plus } from "./icons";
import { PhosphorIcon } from "./phosphor-icon";
import { RevealObserver } from "./reveal-observer";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function FAQPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <RevealObserver />
      <div className="bg-white font-sans text-gray-800 antialiased">
        <SiteHeader />
        <main>
          <section className="pb-28 pt-40">
            <div className="relative z-10 mx-auto max-w-300 px-6">
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="reveal active max-w-2xl">
                  <h1 className="mb-6 text-5xl leading-[1.25] font-bold tracking-tight text-gray-900 lg:text-6xl">
                    FAQ
                  </h1>
                  <p className="text-xl leading-relaxed font-medium text-gray-600">
                    예약부터 작업 완료 후 확인까지, <br />
                    상담 전 자주 궁금해하시는 내용을 모았습니다.
                  </p>
                </div>

                <div
                  className="reveal rounded-[2.5rem] border border-brand-100 bg-white p-8 shadow-soft"
                  style={{ transitionDelay: "0.18s" }}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-white">
                      <PhosphorIcon
                        icon={Headset}
                        weight="fill"
                        className="text-2xl"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-600">
                        빠른 상담 문의
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {PHONE_NUMBER}
                      </p>
                      <a
                        href={EMAIL_HREF}
                        className="break-all font-semibold text-brand-900 underline decoration-brand-200 underline-offset-4"
                      >
                        {EMAIL_ADDRESS}
                      </a>
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-600">
                    현장 상황에 따라 안내 내용이 달라질 수 있습니다. FAQ에서
                    해결되지 않는 내용은 전화 또는 이메일 상담을 통해 서비스
                    종류, 일정, 작업 범위를 자세히 안내해드립니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 py-24">
            <div className="mx-auto max-w-[920px] px-6">
              <div className="reveal mb-14 text-center">
                <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
                  COMMON QUESTIONS
                </span>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                  자주 묻는 질문
                </h2>
                <p className="text-gray-500">
                  포트리스 클린 이용 전 고객님들이 가장 많이 문의하시는 내용을
                  모았습니다.
                </p>
              </div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, index) => {
                  const panelId = `faq-page-panel-${index}`;
                  const isOpen = openIndex === index;

                  return (
                    <article
                      key={faq.q}
                      className={`reveal faq-details rounded-2xl border border-gray-100 bg-white shadow-sm ${
                        isOpen ? "open" : ""
                      }`}
                      style={{
                        transitionDelay: `${Math.min(index * 0.05, 0.2)}s`,
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenIndex((current) =>
                            current === index ? null : index,
                          )
                        }
                        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
                      >
                        <span className="flex items-start gap-3 text-lg font-bold text-gray-900">
                          <span className="pt-0.5 text-brand-600">Q.</span>
                          <span>{faq.q}</span>
                        </span>
                        <span className="relative h-5 w-5 shrink-0">
                          <PhosphorIcon
                            icon={Plus}
                            className={`absolute inset-0 text-xl text-gray-400 transition duration-300 ${
                              isOpen ? "opacity-0" : "opacity-100"
                            }`}
                          />
                          <PhosphorIcon
                            icon={Minus}
                            className={`absolute inset-0 text-xl text-brand-900 transition duration-300 ${
                              isOpen ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </span>
                      </button>
                      {isOpen ? (
                        <div
                          id={panelId}
                          className="border-t border-gray-100 px-6 pb-6 pt-5 leading-relaxed text-gray-600"
                        >
                          <div className="flex gap-3">
                            <span className="text-lg font-black text-gray-400">
                              A.
                            </span>
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
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
