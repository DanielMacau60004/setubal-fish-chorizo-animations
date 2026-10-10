import { Link } from "@tanstack/react-router";
import { NavbarLogo } from "./NavbarLogo";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/pratos", label: "Pratos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-foam/10 bg-deep/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" aria-label="Início">
          <NavbarLogo />
        </Link>
        <nav className="flex items-center gap-4 text-sm md:gap-6">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-foam/60 transition-colors hover:text-foam"
              activeProps={{ className: "text-marine font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-foam/10 py-8 text-center text-xs text-foam/50">
      ÉPÊXE · Chouriços de Peixe · Setúbal
    </footer>
  );
}
