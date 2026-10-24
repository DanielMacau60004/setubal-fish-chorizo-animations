import { type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

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
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Nome: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Telefone: ${f.get("phone") || "-"}`,
      "",
      `${f.get("message") || ""}`,
    ].join("\n");
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent("Encomenda ÉPÊXE — " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-display text-4xl text-foam">Contacto</h1>
      <p className="mt-3 text-foam/70">Tem interesse em conhecer melhor a ÉPÊXE ou explorar uma possível colaboração?{"\u00a0"}<br /><br /><br />Para questões, parcerias ou oportunidades de colaboração, entre em contacto connosco.</p>
      <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-2xl border border-foam/10 bg-deep-2 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required maxLength={100} placeholder="Nome" className={field} />
          <input name="email" type="email" required maxLength={255} placeholder="Email" className={field} />
        </div>
        <input name="phone" maxLength={30} placeholder="Telefone (opcional)" className={field} />
        <textarea name="message" rows={4} maxLength={1000} placeholder="Mensagem" className={field} />
        <Button type="submit" className="h-auto rounded-full bg-marine px-6 py-3 text-sm font-medium text-on-marine hover:bg-marine-deep">
          Enviar email
        </Button>
      </form>
      <p className="mt-6 text-sm text-foam/60">Ou escreva-nos diretamente para apoioaocliente@epexe.pt</p>
    </main>
  );
}
