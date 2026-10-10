import { createFileRoute } from "@tanstack/react-router";
import owner1 from "@/assets/owner-1.jpg";
import owner2 from "@/assets/owner-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ÉPÊXE — A nossa história · Chouriços de Peixe de Setúbal" },
      { name: "description", content: "Conheça a história da ÉPÊXE e dos seus fundadores, criadores dos chouriços de peixe artesanais de Setúbal." },
      { property: "og:title", content: "ÉPÊXE — A nossa história" },
      { property: "og:description", content: "Chouriços de peixe artesanais nascidos no porto de Setúbal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const OWNERS = [
  { name: "João Marques", role: "Cofundador · Mestre salsicheiro", img: owner1 },
  { name: "Ana Correia", role: "Cofundadora · Sabores e receitas", img: owner2 },
];

function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-marine">A nossa história</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-foam md:text-5xl">
          Do porto de Setúbal para a sua mesa.
        </h1>
        <div className="mt-6 space-y-4 text-foam/75">
          <p>
            A ÉPÊXE nasceu entre as redes e as bancas da lota de Setúbal. Crescemos a ver o peixe
            chegar todas as manhãs e a ouvir as receitas que passavam de geração em geração.
          </p>
          <p>
            Um dia perguntámo-nos: e se o chouriço, tão nosso, fosse feito com o melhor do mar?
            Depois de muitas experiências na cozinha, nasceram os primeiros chouriços de peixe —
            artesanais, fumados em lenha e sem conservantes.
          </p>
          <p>
            Hoje continuamos a fazê-los à mão, em pequenos lotes, com peixe fresco comprado aos
            pescadores da nossa terra.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-foam">Quem somos</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {OWNERS.map((o) => (
            <article key={o.name} className="overflow-hidden rounded-2xl border border-foam/10 bg-deep-2">
              <img src={o.img} alt={o.name} width={768} height={960} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-xl text-foam">{o.name}</h3>
                <p className="mt-1 text-sm text-foam/60">{o.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
