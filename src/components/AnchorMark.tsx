import { useId } from "react";

export function AnchorMark({ className }: { className?: string }) {
  const gradientId = `epexe-steel-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 100 112" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="100"
          y2="112"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e3ebf7" />
          <stop offset="100%" stopColor="#a5badc" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeLinecap="round">
        <circle cx="50" cy="15" r="10" strokeWidth="9" />
        <line x1="50" y1="26" x2="50" y2="84" strokeWidth="14" />
        <line x1="27" y1="44" x2="73" y2="44" strokeWidth="10" />
        <path d="M17 64 C17 90 32 100 50 100 C68 100 83 90 83 64" strokeWidth="13" />
      </g>
      <polygon points="17,48 5,70 29,70" fill={`url(#${gradientId})`} />
      <polygon points="83,48 71,70 95,70" fill={`url(#${gradientId})`} />
      <polygon points="50,112 39,92 61,92" fill={`url(#${gradientId})`} />
    </svg>
  );
}
