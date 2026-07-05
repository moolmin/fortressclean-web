import { CaretDown } from "./icons";
import { PROCESS_STEPS } from "./constants";
import { PhosphorIcon } from "./phosphor-icon";

export function ProcessSection() {
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
          <div className="absolute left-[5%] right-[5%] top-12 z-0 hidden h-0.5 bg-gray-100 lg:block"></div>
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.step} className="contents">
              <div className="reveal group relative z-10 mb-8 flex w-full flex-col items-center text-center lg:mb-0 lg:w-40">
                <div
                  className={`mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 shadow-sm transition-all duration-300 ${step.active ? "border-brand-100 bg-brand-900 text-white shadow-md group-hover:scale-110 group-hover:shadow-xl" : "border-gray-50 bg-white text-brand-900 group-hover:scale-110 group-hover:border-brand-200 group-hover:shadow-lg"}`}
                >
                  <PhosphorIcon
                    icon={step.icon}
                    weight={step.weight}
                    className="text-4xl"
                  />
                </div>
                <span className="mb-1 text-sm font-bold text-brand-600">
                  {step.step}
                </span>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
              </div>
              {index < PROCESS_STEPS.length - 1 && (
                <div className="mb-8 block text-gray-300 lg:hidden">
                  <PhosphorIcon
                    icon={CaretDown}
                    weight="bold"
                    className="text-2xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
