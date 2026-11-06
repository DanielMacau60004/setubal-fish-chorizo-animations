import nodemailer from "nodemailer";

export type MailPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendMailViaSmtp(data: MailPayload) {
  const host = process.env.SMTP_HOST || "localhost";
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE === "false" ? false : port === 465;
  const user = process.env.SMTP_USER || "apoioaocliente@epexe.pt";
  const pass = process.env.SMTP_PASS || "";
  const to = process.env.CONTACT_RECEIVER_EMAIL || "apoioaocliente@epexe.pt";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });

  const mailText = [
    `Nome: ${data.name}`,
    `Email: ${data.email}`,
    `Telefone: ${data.phone || "Não indicado"}`,
    "",
    "Mensagem:",
    data.message,
  ].join("\n");

  const mailHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #1a365d;">Novo contacto / encomenda recebida no site ÉPÊXE</h2>
      <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Nome:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Telefone:</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(data.phone || "-")}</td>
        </tr>
      </table>
      <h3 style="color: #2b6cb0; margin-bottom: 8px;">Mensagem:</h3>
      <div style="background: #f7fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap;">
        ${escapeHtml(data.message)}
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"${data.name} via ÉPÊXE" <${user}>`,
    replyTo: data.email,
    to,
    subject: `Novo contacto no site ÉPÊXE — ${data.name}`,
    text: mailText,
    html: mailHtml,
  });
}

function escapeHtml(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
