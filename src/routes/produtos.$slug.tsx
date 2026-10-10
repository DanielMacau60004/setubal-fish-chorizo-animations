import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/content";

export const Route = createFileRoute("/produtos/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Produto não encontrado — ÉPÊXE" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — ÉPÊXE` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — ÉPÊXE` },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 text-center">
      <h1 className="font-display text-3xl text-foam">Produto não encontrado</h1>
      <Link to="/produtos" className="mt-6 inline-block text-marine">← Voltar aos produtos</Link>
    </main>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [active, setActive] = useState(0);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <Link to="/produtos" className="text-sm text-foam/60 hover:text-foam">← Todos os produtos</Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <img src={product.images[active]} alt={product.name} width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          <div className="mt-3 grid grid-cols-3 gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-xl border-2 ${i === active ? "border-marine" : "border-transparent opacity-70 hover:opacity-100"}`}
              >
                <img src={img} alt={`${product.name} foto ${i + 1}`} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-display text-4xl text-foam">{product.name}</h1>
          <p className="mt-3 text-lg text-foam/80">{product.short}</p>
          <div className="mt-6 space-y-4 text-foam/70">
            {product.long.map((t, i) => <p key={i}>{t}</p>)}
          </div>
          <Link to="/contacto" className="mt-8 inline-block rounded-full bg-marine px-6 py-3 text-sm font-medium text-on-marine hover:bg-marine-deep">
            Encomendar
          </Link>
        </div>
      </div>
    </main>
  );
}
