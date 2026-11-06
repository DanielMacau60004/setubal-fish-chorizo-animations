import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const COMPANY_EMAIL = "apoioaocliente@epexe.pt";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto e Encomendas — ÉPÊXE" },
      {
        name: "description",
        content: "Envie-nos um email para encomendar chouriços de peixe ÉPÊXE.",
      },
      { property: "og:title", content: "Contacto e Encomendas — ÉPÊXE" },
      { property: "og:description", content: "Encomende os nossos chouriços de peixe de Setúbal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const field =
  "w-full rounded-xl border border-foam/15 bg-deep px-4 py-2.5 text-foam placeholder:text-foam/40 focus:border-marine focus:outline-none";

const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedPhone = form.phone.trim();
    if (trimmedPhone && !PHONE_REGEX.test(trimmedPhone)) {
      setStatus("error");
      setErrorMessage(
        "Por favor insira um número de telefone válido (ex: 912345678 ou +351 912345678).",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: trimmedPhone || "-",
          message: form.message,
        }),
      });

      const resData = await response.json().catch(() => null);

      if (response.ok && resData?.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          resData?.message ||
            "Não foi possível enviar a mensagem. Por favor tente mais tarde.",
        );
      }
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "Erro de rede ao enviar mensagem. Por favor tente novamente ou envie email direto.",
      );
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-display text-4xl text-foam">Contacto</h1>
      <p className="mt-3 text-foam/70">
        Tem interesse em conhecer melhor a ÉPÊXE ou explorar uma possível colaboração?{"\u00a0"}
        <br />
        <br />
        <br />
        Para questões, parcerias ou oportunidades de colaboração, entre em contacto connosco.
      </p>

      {status === "success" && (
        <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-emerald-200">
          <p className="font-medium">Mensagem enviada com sucesso!</p>
          <p className="mt-1 text-sm text-emerald-300/80">
            Obrigado pelo seu contacto. A sua mensagem foi enviada diretamente para a nossa equipa.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-8 rounded-xl border border-rose-500/30 bg-rose-950/40 p-4 text-rose-200">
          <p className="font-medium">Erro ao enviar mensagem</p>
          <p className="mt-1 text-sm text-rose-300/80">{errorMessage}</p>
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="mt-10 space-y-5 rounded-2xl border border-foam/10 bg-deep-2 p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            required
            maxLength={100}
            placeholder="Nome *"
            className={field}
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            required
            maxLength={255}
            placeholder="Email *"
            className={field}
          />
        </div>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
          maxLength={30}
          placeholder="Telefone (opcional, ex: +351 912345678)"
          pattern="^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$"
          title="Insira um número de telefone válido (mínimo 7 dígitos, opcionalmente com indicativo +351)"
          className={field}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          required
          rows={4}
          maxLength={1000}
          placeholder="Mensagem *"
          className={field}
        />

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-auto rounded-full bg-marine px-6 py-3 text-sm font-medium text-on-marine hover:bg-marine-deep disabled:opacity-50"
        >
          {status === "submitting" ? "A enviar..." : "Enviar mensagem"}
        </Button>
      </form>

      <p className="mt-6 text-sm text-foam/60">
        Ou escreva-nos diretamente para{" "}
        <a
          href={`mailto:${COMPANY_EMAIL}`}
          className="text-marine underline underline-offset-4 hover:text-foam"
        >
          {COMPANY_EMAIL}
        </a>
      </p>
    </main>
  );
}
