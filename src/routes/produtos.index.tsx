import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/content";

export const Route = createFileRoute("/produtos/")({
  head: () => ({
    meta: [
      { title: "Produtos — ÉPÊXE Chouriços de Peixe" },
      { name: "description", content: "Conheça os chouriços de salmão, choco e pescada da ÉPÊXE, de Setúbal." },
      { property: "og:title", content: "Produtos — ÉPÊXE" },
      { property: "og:description", content: "Conheça os nossos chouriços de peixe artesanais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-display text-4xl text-foam">Os nossos produtos</h1>
      <p className="mt-3 text-foam/70">Clique num produto para ver mais fotos e detalhes.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <Link
            key={p.slug}
            to="/produtos/$slug"
            params={{ slug: p.slug }}
            className="group overflow-hidden rounded-2xl border border-foam/10 bg-deep-2 transition-transform hover:-translate-y-1"
          >
            <img src={p.images[0]} alt={p.name} width={1153} height={768} loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="p-5">
              <h2 className="font-display text-xl text-foam">{p.name}</h2>
              <p className="mt-2 text-sm text-foam/65">{p.short}</p>
              <span className="mt-4 inline-block text-sm font-medium text-marine">Ver mais →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
