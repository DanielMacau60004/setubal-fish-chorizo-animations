import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/content";

const COMPANY_EMAIL = "encomendas@epexe.pt";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto e Encomendas — ÉPÊXE" },
      { name: "description", content: "Envie-nos um email para encomendar chouriços de peixe ÉPÊXE." },
      { property: "og:title", content: "Contacto e Encomendas — ÉPÊXE" },
      { property: "og:description", content: "Encomende os nossos chouriços de peixe de Setúbal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-xl border border-foam/15 bg-deep px-4 py-2.5 text-foam placeholder:text-foam/40 focus:border-marine focus:outline-none";

function Contact() {
  const [qty, setQty] = useState<Record<string, number>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const items = PRODUCTS.filter((p) => (qty[p.slug] ?? 0) > 0).map((p) => `- ${p.name}: ${qty[p.slug]}`);
    const body = [
      `Nome: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Telefone: ${f.get("phone") || "-"}`,
      "",
      items.length ? `Encomenda:\n${items.join("\n")}` : "",
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent("Encomenda ÉPÊXE — " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-display text-4xl text-foam">Contacto</h1>
      <p className="mt-3 text-foam/70">Preencha o formulário para nos enviar um email com a sua encomenda.</p>
      <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-2xl border border-foam/10 bg-deep-2 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required maxLength={100} placeholder="Nome" className={field} />
          <input name="email" type="email" required maxLength={255} placeholder="Email" className={field} />
        </div>
        <input name="phone" maxLength={30} placeholder="Telefone (opcional)" className={field} />
        <div>
          <p className="mb-2 text-sm font-medium text-foam">Produtos</p>
          <div className="space-y-2">
            {PRODUCTS.map((p) => (
              <label key={p.slug} className="flex items-center justify-between gap-4 text-sm text-foam/80">
                {p.name}
                <input
                  type="number"
                  min={0}
                  max={99}
                  value={qty[p.slug] ?? 0}
                  onChange={(e) => setQty({ ...qty, [p.slug]: Math.max(0, Number(e.target.value)) })}
                  className={`${field} w-24`}
                />
              </label>
            ))}
          </div>
        </div>
        <textarea name="message" rows={4} maxLength={1000} placeholder="Mensagem (morada de entrega, dúvidas...)" className={field} />
        <button type="submit" className="rounded-full bg-marine px-6 py-3 text-sm font-medium text-on-marine hover:bg-marine-deep">
          Enviar email
        </button>
      </form>
      <p className="mt-6 text-sm text-foam/60">Ou escreva-nos diretamente para {COMPANY_EMAIL}</p>
    </main>
  );
}
