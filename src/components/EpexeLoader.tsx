import { useEffect } from "react";
import { AnchorMark } from "./AnchorMark";

const TRAILING_LETTERS = ["P", "Ê", "X", "E"];

const BUBBLES = [
  { left: "8%", size: 8, delay: 0, dur: 3.4 },
  { left: "20%", size: 5, delay: 0.9, dur: 2.9 },
  { left: "32%", size: 11, delay: 0.4, dur: 3.8 },
  { left: "47%", size: 6, delay: 1.4, dur: 3.1 },
  { left: "58%", size: 9, delay: 0.2, dur: 3.6 },
  { left: "70%", size: 5, delay: 1.1, dur: 2.8 },
  { left: "82%", size: 10, delay: 0.6, dur: 4.0 },
  { left: "92%", size: 6, delay: 1.7, dur: 3.3 },
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
    const t = setTimeout(onComplete, 2600);
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
