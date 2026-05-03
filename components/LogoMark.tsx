export default function LogoMark({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* D-shape badge — replace this SVG with exported AI file when ready */}
      <path
        d="M8 4 H52 Q94 4 94 55 Q94 106 52 106 H8 Z"
        fill="currentColor"
      />
      <path
        d="M16 14 H50 Q80 14 80 55 Q80 96 50 96 H16 Z"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
      />
      <text
        x="47"
        y="72"
        fill="white"
        fontSize="34"
        fontWeight="900"
        fontFamily="Arial, sans-serif"
        textAnchor="middle"
        letterSpacing="-1"
      >
        NB
      </text>
    </svg>
  );
}
