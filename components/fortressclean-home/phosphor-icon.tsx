import type { Icon, IconWeight } from "@phosphor-icons/react";

type PhosphorIconProps = {
  icon: Icon;
  weight?: IconWeight;
  className?: string;
};

export function PhosphorIcon({
  icon: IconComponent,
  weight = "regular",
  className,
}: PhosphorIconProps) {
  return (
    <IconComponent
      aria-hidden="true"
      className={className}
      weight={weight}
    />
  );
}
