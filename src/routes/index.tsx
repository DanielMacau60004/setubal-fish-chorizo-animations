import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EpexeLoader } from "@/components/EpexeLoader";
import { NavbarLogo } from "@/components/NavbarLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ÉPÊXE · Animações de Loading e Navbar" },
      {
        name: "description",
        content:
          "Animações da marca ÉPÊXE — chouriços de peixe de Setúbal: ecrã de loading com âncora e bolhas e logótipo animado para a navbar.",
      },
      { property: "og:title", content: "ÉPÊXE · Animações de Loading e Navbar" },
      {
        property: "og:description",
        content:
          "Animações da marca ÉPÊXE — chouriços de peixe de Setúbal: ecrã de loading e logótipo animado para a navbar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaderKey, setLoaderKey] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-deep text-foam">
      {/* Mock navbar com o logótipo animado */}
      <header className="flex items-center justify-between border-b border-foam/10 px-5 py-4">
        <NavbarLogo />
        <nav className="hidden items-center gap-6 text-sm text-foam/60 md:flex">
          <span>Produtos</span>
          <span>A Nossa História</span>
          <span>Contacto</span>
        </nav>
        <button className="rounded-full bg-marine px-4 py-2 text-sm font-medium text-foam transition-colors hover:bg-marine-deep">
          Encomendar
        </button>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-5 py-12">
        <div>
          <h1 className="font-display text-3xl text-foam">Animações ÉPÊXE</h1>
          <p className="mt-2 text-sm text-foam/60">
            Duas animações curtas com a âncora, as bolhas e as letras da marca.
          </p>
        </div>

        {/* Demo do loading */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-foam">Ecrã de loading</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setLoaderKey((k) => k + 1)}
                className="rounded-full border border-foam/20 px-4 py-1.5 text-sm text-foam/80 transition-colors hover:border-foam/40 hover:text-foam"
              >
                Rever
              </button>
              <button
                onClick={() => setShowFullscreen(true)}
                className="rounded-full bg-marine px-4 py-1.5 text-sm font-medium text-foam transition-colors hover:bg-marine-deep"
              >
                Ecrã inteiro
              </button>
            </div>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-foam/10 bg-deep">
            <EpexeLoader key={loaderKey} />
          </div>
          <p className="text-xs text-foam/50">
            Dura ~2,5 segundos: as letras caem uma a uma, a âncora desce a balançar e as
            bolhas sobem. Repete-se em loop enquanto a página carrega.
          </p>
        </section>

        {/* Demo da navbar */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-foam">Logótipo na navbar</h2>
          <div className="flex items-center justify-between rounded-2xl border border-foam/10 bg-deep-2 px-5 py-4">
            <NavbarLogo />
            <div className="hidden items-center gap-5 text-xs text-foam/50 sm:flex">
              <span>Início</span>
              <span>Loja</span>
              <span>Contactos</span>
            </div>
          </div>
          <p className="text-xs text-foam/50">
            Versão discreta e contínua: a âncora balança ligeiramente e uma bolha pequena
            sobe de vez em quando.
          </p>
        </section>
      </main>

      {/* Loading em ecrã inteiro */}
      {showFullscreen && (
        <div
          className="fixed inset-0 z-50 cursor-pointer"
          onClick={() => setShowFullscreen(false)}
          title="Clique para fechar"
        >
          <EpexeLoader fullscreen onComplete={() => setShowFullscreen(false)} />
        </div>
      )}
    </div>
  );
}
