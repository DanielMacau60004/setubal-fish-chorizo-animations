import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as DISHES } from "./content-ofujsWjp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pratos-BKz6BSBM.js
var import_jsx_runtime = require_jsx_runtime();
function Dishes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-foam",
				children: "Pratos com ÉPÊXE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-foam/70",
				children: "Ideias para levar os nossos chouriços para a cozinha."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: DISHES.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-2xl border border-foam/10 bg-deep-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.image,
						alt: d.name,
						width: 1024,
						height: 768,
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-foam",
							children: d.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-foam/65",
							children: d.text
						})]
					})]
				}, d.name))
			})
		]
	});
}
//#endregion
export { Dishes as component };
