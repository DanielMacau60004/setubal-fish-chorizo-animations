import { useEffect } from "react";
import { AnchorMark } from "./AnchorMark";

const TRAILING_LETTERS = ["P", "Ê", "X", "E"];

const BUBBLES = [
  { left: "4%", size: 16, delay: -0.3, dur: 1.7 },
  { left: "10%", size: 9, delay: -1.1, dur: 1.4 },
  { left: "16%", size: 22, delay: -0.7, dur: 2.0 },
  { left: "22%", size: 12, delay: -1.3, dur: 1.6 },
  { left: "28%", size: 18, delay: -0.5, dur: 1.8 },
  { left: "34%", size: 10, delay: -1.5, dur: 1.7 },
  { left: "40%", size: 24, delay: -0.9, dur: 2.1 },
  { left: "46%", size: 14, delay: -0.2, dur: 1.5 },
  { left: "52%", size: 9, delay: -1.2, dur: 1.4 },
  { left: "58%", size: 20, delay: -0.6, dur: 1.9 },
  { left: "64%", size: 12, delay: -1.4, dur: 1.6 },
  { left: "70%", size: 25, delay: -0.8, dur: 2.0 },
  { left: "76%", size: 10, delay: -0.4, dur: 1.5 },
  { left: "82%", size: 17, delay: -1.6, dur: 1.8 },
  { left: "88%", size: 13, delay: -1.0, dur: 1.7 },
  { left: "94%", size: 21, delay: -0.5, dur: 1.9 },
];

type EpexeLoaderProps = {
  /** Called once the entrance animation has fully settled (~2.6s). */
  onComplete?: () => void;
  /** Fill the whole viewport (fixed overlay). */
  fullscreen?: boolean;
};

export function EpexeLoader({ onComplete, fullscreen = false }: EpexeLoaderProps) {
  useEffect(() => {
    if (!onComplete) return;
    const t = setTimeout(onComplete, 1800);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className={fullscreen ? "epexe-loader epexe-loader--fullscreen" : "epexe-loader"}>
      <div className="epexe-bubbles" aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="epexe-bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.dur}s`,
            }}
          />
        ))}
      </div>
      <div className="epexe-word" role="img" aria-label="ÉPÊXE">
        <span className="epexe-letter" style={{ animationDelay: "0.05s" }}>
          É
        </span>
        <span className="epexe-anchor epexe-anchor-in" style={{ animationDelay: "0.15s" }}>
          <AnchorMark className="epexe-anchor-svg" />
        </span>
        {TRAILING_LETTERS.map((letter, i) => (
          <span key={`${letter}-${i}`} className="epexe-letter" style={{ animationDelay: `${0.28 + i * 0.11}s` }}>
            {letter}
          </span>
        ))}
      </div>
      <p className="epexe-tagline">Chouriços de Peixe · Setúbal</p>
    </div>
  );
}
