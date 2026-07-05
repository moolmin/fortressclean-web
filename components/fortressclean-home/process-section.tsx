"use client";

import { useEffect, useRef, useState } from "react";

import { CaretDown } from "./icons";
import { PROCESS_INTRO, PROCESS_STEPS } from "./content";
import { PhosphorIcon } from "./phosphor-icon";
import { SectionHeading } from "./shared";

const STEP_DELAY_MS = 120;

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let timerId: number | null = null;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      timerId = window.setTimeout(() => {
        setActiveCount(PROCESS_STEPS.length);
      }, 0);

      return () => {
        if (timerId !== null) {
          window.clearTimeout(timerId);
        }
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        let nextCount = 0;
        setActiveCount(0);

        timerId = window.setInterval(() => {
          nextCount += 1;
          setActiveCount(nextCount);

          if (nextCount >= PROCESS_STEPS.length && timerId !== null) {
            window.clearInterval(timerId);
          }
        }, STEP_DELAY_MS);

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      if (timerId !== null) {
        window.clearInterval(timerId);
      }
    };
  }, []);

  const progressWidth =
    PROCESS_STEPS.length > 1
      ? (Math.max(activeCount - 1, 0) / (PROCESS_STEPS.length - 1)) * 100
      : 100;

  return (
    <section ref={sectionRef} id="process" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading {...PROCESS_INTRO} className="reveal" />
        <div className="relative flex flex-col items-center justify-between lg:flex-row">
          <div className="absolute left-[5%] right-[5%] top-12 z-0 hidden h-0.5 bg-gray-100 lg:block" />
          <div
            className="absolute left-[5%] top-12 z-0 hidden h-0.5 bg-brand-300 transition-[width] duration-500 ease-out lg:block"
            style={{ width: `${progressWidth * 0.9}%` }}
          />
          {PROCESS_STEPS.map((step, index) => {
            const isVisible = index < activeCount;
            const isPrimaryStep = index === 0;

            return (
              <div key={step.step} className="contents">
                <div
                  className={`group relative z-10 mb-8 flex w-full flex-col items-center text-center transition-all duration-500 ease-out lg:mb-0 lg:w-40 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <div
                    className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 shadow-sm transition-all duration-300 ${
                      isPrimaryStep
                        ? "process-step-primary scale-100 border-brand-100 bg-brand-900 text-white shadow-md group-hover:-translate-y-1 group-hover:shadow-xl"
                        : "scale-95 border-gray-100 bg-white text-brand-900/65 group-hover:-translate-y-1 group-hover:border-brand-200 group-hover:text-brand-900 group-hover:shadow-lg"
                    }`}
                  >
                    <PhosphorIcon
                      icon={step.icon}
                      weight={step.weight}
                      className={`text-4xl transition-transform duration-300 ${
                        isPrimaryStep || isVisible ? "scale-100" : "scale-90"
                      }`}
                    />
                  </div>
                  <span
                    className={`mb-1 text-sm font-bold transition-colors duration-300 ${
                      isPrimaryStep || isVisible
                        ? "text-brand-600"
                        : "text-brand-300"
                    }`}
                  >
                    {step.step}
                  </span>
                  <h3
                    className={`font-bold transition-colors duration-300 ${
                      isPrimaryStep || isVisible
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className={`mb-8 block transition-all duration-500 lg:hidden ${
                      index + 1 < activeCount
                        ? "translate-y-0 text-brand-300 opacity-100"
                        : "translate-y-3 text-gray-200 opacity-0"
                    }`}
                  >
                    <PhosphorIcon
                      icon={CaretDown}
                      weight="bold"
                      className="text-2xl"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
