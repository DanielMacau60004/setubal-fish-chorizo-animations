import { createServerFn } from "@tanstack/react-start";

export type SendEmailInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown): SendEmailInput => {
    if (!data || typeof data !== "object") {
      throw new Error("Dados inválidos.");
    }
    const d = data as Record<string, unknown>;
    const name = typeof d.name === "string" ? d.name.trim() : "";
    const email = typeof d.email === "string" ? d.email.trim() : "";
    const message = typeof d.message === "string" ? d.message.trim() : "";
    const phone = typeof d.phone === "string" ? d.phone.trim() : "";

    if (!name || !email || !message) {
      throw new Error("Por favor, preencha o Nome, Email e Mensagem.");
    }

    return { name, email, phone, message };
  })
  .handler(async ({ data }) => {
    const { sendMailViaSmtp } = await import("./send-mail.server");
    await sendMailViaSmtp(data);
    return { success: true };
  });
