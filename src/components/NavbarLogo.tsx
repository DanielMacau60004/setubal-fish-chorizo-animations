import { AnchorMark } from "./AnchorMark";

/**
 * Compact logo for the navbar: static letters, gently swaying anchor
 * and an occasional tiny bubble — subtle enough to live there permanently.
 */
export function NavbarLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`epexe-nav ${className}`} role="img" aria-label="ÉPÊXE">
      <span className="epexe-nav-bubble" aria-hidden="true" />
      <span className="epexe-nav-text">
        <span>É</span>
        <span className="epexe-nav-anchor">
          <AnchorMark className="epexe-anchor-svg" />
        </span>
        <span>PÊXE</span>
      </span>
    </span>
  );
}
