import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produtos._slug-qo4wxwZW.js
var import_jsx_runtime = require_jsx_runtime();
function ProductNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-foam",
			children: "Produto não encontrado"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/produtos",
			className: "mt-6 inline-block text-marine",
			children: "← Voltar aos produtos"
		})]
	});
}
//#endregion
export { ProductNotFound as notFoundComponent };
