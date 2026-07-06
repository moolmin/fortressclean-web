import { CheckCircle } from "./icons";
import {
  COMPREHENSIVE_BADGES,
  COMPREHENSIVE_INTRO,
  COMPREHENSIVE_ITEMS,
  FEATURE_ITEMS,
  HOME_CARE_INTRO,
  HOME_CARE_SERVICES,
} from "./content";
import { PhosphorIcon } from "./phosphor-icon";
import { SectionHeading } from "./shared";

export function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
          {FEATURE_ITEMS.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col items-center rounded-3xl bg-gray-50 p-6 text-center transition-colors hover:bg-brand-50 ${
                item.title === "사전 안내" ? "hidden md:flex" : ""
              }`}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-900 shadow-sm">
                <PhosphorIcon
                  icon={item.icon}
                  weight={item.weight}
                  className="text-3xl"
                />
              </div>
              <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-snug text-gray-500">
                {item.description[0]}
                <br />
                {item.description[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCareSection() {
  return (
    <section id="services" className="relative bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading {...HOME_CARE_INTRO} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOME_CARE_SERVICES.map((service) => (
            <div
              key={service.title}
              className="reveal rounded-[2rem] border border-gray-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-900">
                <PhosphorIcon icon={service.icon} className="text-4xl" />
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
                    <PhosphorIcon
                      icon={CheckCircle}
                      weight="fill"
                      className="text-brand-500"
                    />
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
}

export function ComprehensiveSection() {
  return (
    <section
      id="comprehensive"
      className="relative overflow-hidden bg-brand-50 py-24"
    >
      <div className="curve-top absolute top-0 h-[80px] w-full"></div>
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-8">
        <SectionHeading {...COMPREHENSIVE_INTRO} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPREHENSIVE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-5 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-900">
                <PhosphorIcon
                  icon={item.icon}
                  weight={item.weight}
                  className="text-2xl"
                />
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
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {COMPREHENSIVE_BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-brand-100 bg-brand-100/70 px-4 py-2 text-sm font-medium tracking-tight text-brand-700"
            >
              #{badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
