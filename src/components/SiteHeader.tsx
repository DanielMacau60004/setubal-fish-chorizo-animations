import { Link } from "@tanstack/react-router";
import { NavbarLogo } from "./NavbarLogo";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/pratos", label: "Pratos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-foam/10 bg-deep/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 md:flex md:justify-between">
        <Link to="/" aria-label="Início" className="min-w-0 w-fit" onClick={() => setOpen(false)}>
          <NavbarLogo />
        </Link>
        <div className="flex shrink-0 items-center gap-2 md:gap-6">
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-sm md:flex">
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
        </nav>
        <ThemeToggle />
        <Button ref={menuRef} variant="ghost" size="icon" className="h-10 w-10 shrink-0 text-foam hover:bg-deep-2 hover:text-foam md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} title={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X /> : <Menu />}
        </Button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Navegação móvel" hidden={!open} className="border-t border-foam/10 bg-deep px-5 py-3 md:hidden">
        {LINKS.map((link) => (
          <Link key={link.to} to={link.to} activeOptions={{ exact: link.to === "/" }} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm text-foam/70 hover:bg-deep-2 hover:text-foam" activeProps={{ className: "bg-deep-2 text-marine font-semibold" }}>{link.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-foam/10 py-8 text-center text-xs text-foam/50">
      ÉPÊXE · Chouriços de Peixe · Setúbal
      <p className="mt-3 px-5">
        Fotografia: <a href="https://commons.wikimedia.org/wiki/File:Miradouro_das_Fonta%C3%ADnhas_-_Vista_para_o_Porto_de_Set%C3%BAbal.jpg" target="_blank" rel="noreferrer" className="underline hover:text-foam">El-Kelaa-des-Sraghna · Miradouro das Fontaínhas</a>
        {" · "}<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="underline hover:text-foam">CC BY-SA 4.0</a>
      </p>
    </footer>
  );
}
