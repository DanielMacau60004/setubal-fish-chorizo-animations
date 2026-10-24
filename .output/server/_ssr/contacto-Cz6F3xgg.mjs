import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-Cz6F3xgg.js
var import_jsx_runtime = require_jsx_runtime();
var COMPANY_EMAIL = "encomendas@epexe.pt";
var field = "w-full rounded-xl border border-foam/15 bg-deep px-4 py-2.5 text-foam placeholder:text-foam/40 focus:border-marine focus:outline-none";
function Contact() {
	const onSubmit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const body = [
			`Nome: ${f.get("name")}`,
			`Email: ${f.get("email")}`,
			`Telefone: ${f.get("phone") || "-"}`,
			"",
			`${f.get("message") || ""}`
		].join("\n");
		window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent("Encomenda ÉPÊXE — " + f.get("name"))}&body=${encodeURIComponent(body)}`;
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-10 space-y-5 rounded-2xl border border-foam/10 bg-deep-2 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							required: true,
							maxLength: 100,
							placeholder: "Nome",
							className: field
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							required: true,
							maxLength: 255,
							placeholder: "Email",
							className: field
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "phone",
						maxLength: 30,
						placeholder: "Telefone (opcional)",
						className: field
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 4,
						maxLength: 1e3,
						placeholder: "Mensagem",
						className: field
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "h-auto rounded-full bg-marine px-6 py-3 text-sm font-medium text-on-marine hover:bg-marine-deep",
						children: "Enviar email"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-foam/60",
				children: "Ou escreva-nos diretamente para apoioaocliente@epexe.pt"
			})
		]
	});
}
//#endregion
export { Contact as component };
