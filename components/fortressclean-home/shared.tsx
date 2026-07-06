import type { ReactNode } from "react";

import { PHONE_HREF, PHONE_NUMBER } from "./content";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

type PhoneLinkProps = {
  className?: string;
  label?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClassName = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignmentClassName} ${className}`.trim()}>
      {eyebrow ? (
        <span className="mb-3 block text-sm font-bold tracking-wider text-brand-600">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
        {title}
      </h2>
      <p className="whitespace-pre-line text-gray-500">{description}</p>
    </div>
  );
}

export function PhoneLink({
  className,
  label = PHONE_NUMBER,
}: PhoneLinkProps) {
  return (
    <a href={PHONE_HREF} className={className}>
      {label}
    </a>
  );
}

export function DetailCard({
  badge,
  badgeClassName,
  title,
  description,
  detail,
  className = "",
}: {
  badge: ReactNode;
  badgeClassName: string;
  title: string;
  description: string;
  detail: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`reveal flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${className}`.trim()}
    >
      <div>
        <div
          className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${badgeClassName}`.trim()}
        >
          {badge}
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mb-6 leading-relaxed text-gray-500">{description}</p>
      </div>
      {detail}
    </div>
  );
}
