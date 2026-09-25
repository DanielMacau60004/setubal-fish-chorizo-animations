import { useId } from "react";

export function AnchorMark({ className }: { className?: string }) {
  const gradientId = `epexe-steel-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 100 124" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e3ebf7" />
          <stop offset="100%" stopColor="#a5badc" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeLinecap="round">
        <circle cx="50" cy="17" r="9" strokeWidth="8" />
        <line x1="50" y1="27" x2="50" y2="92" strokeWidth="10" />
        <line x1="30" y1="42" x2="70" y2="42" strokeWidth="8" />
        <path d="M20 72 C20 98 33 109 50 109 C67 109 80 98 80 72" strokeWidth="10" />
      </g>
      <polygon points="20,58 10,76 30,76" fill={`url(#${gradientId})`} />
      <polygon points="80,58 70,76 90,76" fill={`url(#${gradientId})`} />
      <polygon points="50,122 41,103 59,103" fill={`url(#${gradientId})`} />
    </svg>
  );
}
