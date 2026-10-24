import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PRODUCTS } from "./content-ofujsWjp.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produtos.index-nVjjBPTm.js
var import_jsx_runtime = require_jsx_runtime();
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl text-foam",
				children: "Os nossos produtos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-foam/70",
				children: "Clique num produto para ver mais fotos e detalhes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/produtos/$slug",
					params: { slug: p.slug },
					className: "group overflow-hidden rounded-2xl border border-foam/10 bg-deep-2 transition-transform hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images[0],
						alt: p.name,
						width: 1153,
						height: 768,
						loading: "lazy",
						className: "aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-foam",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-foam/65",
								children: p.short
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 inline-block text-sm font-medium text-marine",
								children: "Ver mais →"
							})
						]
					})]
				}, p.slug))
			})
		]
	});
}
//#endregion
export { Products as component };
