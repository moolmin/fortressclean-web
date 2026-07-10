import { Fragment } from "react";

import { EnvelopeSimple, Headset } from "./icons";
import {
  ASSURANCE_ITEMS,
  EMAIL_ADDRESS,
  EMAIL_HREF,
} from "./content";
import { PhosphorIcon } from "./phosphor-icon";
import { PhoneLink } from "./shared";

export function ASSection() {
  return (
    <section id="as" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-300 px-6">
        <div className="reveal relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[2.5rem] bg-brand-900 p-10 text-white transition-all duration-500 hover:shadow-2xl hover:shadow-brand-900/30 lg:flex-row lg:p-16">
          <svg
            className="absolute right-0 top-0 h-full text-brand-800 opacity-50"
            viewBox="0 0 200 400"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M200 0C100 100 50 250 200 400V0Z" />
          </svg>
          {ASSURANCE_ITEMS.map((item, index) => (
            <Fragment key={item.title}>
              <div className="relative z-10 w-full flex-1">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <PhosphorIcon
                      icon={item.icon}
                      weight={item.weight}
                      className="text-2xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="ml-16 text-lg text-brand-100">
                  {item.description}
                </p>
                <p className="ml-16 mt-2 text-sm text-brand-200">{item.note}</p>
              </div>
              {index < ASSURANCE_ITEMS.length - 1 ? (
                <>
                  <div className="relative z-10 hidden h-24 w-px bg-white/20 lg:block"></div>
                  <div className="relative z-10 block h-px w-full bg-white/20 lg:hidden"></div>
                </>
              ) : null}
            </Fragment>
          ))}
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
          <PhosphorIcon icon={Headset} weight="fill" className="text-4xl" />
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
          상담·예약 문의
        </h2>
        <p className="mb-10 text-lg text-gray-600">
          서비스 범위와 현장 상황을 확인한 뒤 <br /> 필요한 작업을 친절하게
          안내해드립니다.
        </p>
        <div className="mb-10 rounded-3xl border-2 border-brand-100 bg-white p-8 shadow-lg shadow-brand-900/5">
          <p className="mb-2 text-sm font-bold text-brand-600">
            예약 및 상담 번호
          </p>
          <PhoneLink className="text-4xl font-black tracking-wider text-brand-900 lg:text-5xl" />
          <div className="mx-auto mt-6 flex w-fit flex-wrap items-center justify-center gap-2 border-t border-gray-100 pt-5 text-base text-gray-500">
            <PhosphorIcon
              icon={EnvelopeSimple}
              weight="fill"
              className="text-lg text-brand-600"
            />
            <span>이메일 상담</span>
            <a
              href={EMAIL_HREF}
              className="break-all font-semibold text-brand-900 underline decoration-brand-200 underline-offset-4"
            >
              {EMAIL_ADDRESS}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            상담 시간: 매일 09:00 ~ 18:00 (주말·공휴일 가능)
          </p>
        </div>
      </div>
    </section>
  );
}
