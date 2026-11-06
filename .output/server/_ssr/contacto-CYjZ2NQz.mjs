import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-CYjZ2NQz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COMPANY_EMAIL = "apoioaocliente@epexe.pt";
var field = "w-full rounded-xl border border-foam/15 bg-deep px-4 py-2.5 text-foam placeholder:text-foam/40 focus:border-marine focus:outline-none";
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const onSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		setErrorMessage("");
		try {
			const response = await fetch("/api/contact.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					name: form.name,
					email: form.email,
					phone: form.phone,
					message: form.message
				})
			});
			const resData = await response.json().catch(() => null);
			if (response.ok && resData?.success) {
				setStatus("success");
				setForm({
					name: "",
					email: "",
					phone: "",
					message: ""
				});
			} else {
				setStatus("error");
				setErrorMessage(resData?.message || "Não foi possível enviar a mensagem. Por favor tente mais tarde.");
			}
		} catch (err) {
			console.error(err);
			setStatus("error");
			setErrorMessage("Erro de rede ao enviar mensagem. Por favor tente novamente ou envie email direto.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-foam",
				children: "Contacto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-foam/70",
				children: [
					"Tem interesse em conhecer melhor a ÉPÊXE ou explorar uma possível colaboração?",
					"\xA0",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Para questões, parcerias ou oportunidades de colaboração, entre em contacto connosco."
				]
			}),
			status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-emerald-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Mensagem enviada com sucesso!"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-emerald-300/80",
					children: "Obrigado pelo seu contacto. A sua mensagem foi enviada diretamente para a nossa equipa."
				})]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border border-rose-500/30 bg-rose-950/40 p-4 text-rose-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Erro ao enviar mensagem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-rose-300/80",
					children: errorMessage
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-10 space-y-5 rounded-2xl border border-foam/10 bg-deep-2 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							value: form.name,
							onChange: (e) => setForm((prev) => ({
								...prev,
								name: e.target.value
							})),
							required: true,
							maxLength: 100,
							placeholder: "Nome *",
							className: field
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							value: form.email,
							onChange: (e) => setForm((prev) => ({
								...prev,
								email: e.target.value
							})),
							required: true,
							maxLength: 255,
							placeholder: "Email *",
							className: field
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "phone",
						value: form.phone,
						onChange: (e) => setForm((prev) => ({
							...prev,
							phone: e.target.value
						})),
						maxLength: 30,
						placeholder: "Telefone (opcional)",
						className: field
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						value: form.message,
						onChange: (e) => setForm((prev) => ({
							...prev,
							message: e.target.value
						})),
						required: true,
						rows: 4,
						maxLength: 1e3,
						placeholder: "Mensagem *",
						className: field
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: status === "submitting",
						className: "h-auto rounded-full bg-marine px-6 py-3 text-sm font-medium text-on-marine hover:bg-marine-deep disabled:opacity-50",
						children: status === "submitting" ? "A enviar..." : "Enviar mensagem"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-foam/60",
				children: [
					"Ou escreva-nos diretamente para",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${COMPANY_EMAIL}`,
						className: "text-marine underline underline-offset-4 hover:text-foam",
						children: COMPANY_EMAIL
					})
				]
			})
		]
	});
}
//#endregion
export { Contact as component };
