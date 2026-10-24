import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./produtos._slug-Cc9e4kgG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produtos._slug-ucdqqts3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/produtos",
			className: "text-sm text-foam/60 hover:text-foam",
			children: "← Todos os produtos"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.images[active] ?? product.images[0],
				alt: product.name,
				width: 1153,
				height: 768,
				className: "aspect-[3/2] w-full rounded-2xl object-cover"
			}), product.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-3 gap-3",
				children: product.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					"aria-label": `Ver fotografia ${i + 1} de ${product.name}`,
					"aria-pressed": i === active,
					onClick: () => setActive(i),
					className: `h-auto overflow-hidden rounded-xl border-2 p-0 ${i === active ? "border-marine" : "border-transparent opacity-70 hover:opacity-100"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: `${product.name} foto ${i + 1}`,
						width: 1153,
						height: 768,
						loading: "lazy",
						className: "aspect-[3/2] w-full object-cover"
					})
				}, i))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-foam",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg text-foam/80",
					children: product.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4 text-foam/70",
					children: product.long.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t }, i))
				})
			] })]
		})]
	});
}
//#endregion
export { ProductPage as component };
