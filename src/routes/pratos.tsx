import { createFileRoute } from "@tanstack/react-router";
import { DISHES } from "@/lib/content";

export const Route = createFileRoute("/pratos")({
  head: () => ({
    meta: [
      { title: "Pratos e Receitas — ÉPÊXE" },
      { name: "description", content: "Ideias de pratos para cozinhar com os chouriços de peixe ÉPÊXE." },
      { property: "og:title", content: "Pratos e Receitas — ÉPÊXE" },
      { property: "og:description", content: "Arroz, tostas e assados com chouriço de peixe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dishes,
});

function Dishes() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-4xl text-foam">Pratos com ÉPÊXE</h1>
      <p className="mt-3 text-foam/70">Ideias para levar os nossos chouriços para a cozinha.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DISHES.map((d) => (
          <article key={d.name} className="overflow-hidden rounded-2xl border border-foam/10 bg-deep-2">
            <img src={d.image} alt={d.name} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-xl text-foam">{d.name}</h2>
              <p className="mt-2 text-sm text-foam/65">{d.text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
