type LogoMarkProps = {
  className?: string;
  stroke?: string;
  circleClassName?: string;
};

export function LogoMark({
  className = "h-10 w-10",
  stroke = "#1E3A8A",
  circleClassName,
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 32V16C14 11.5817 17.5817 8 22 8H30"
        stroke={stroke}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20H26"
        stroke={stroke}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="28"
        cy="28"
        r="4"
        fill="currentColor"
        className={circleClassName}
      />
    </svg>
  );
}
