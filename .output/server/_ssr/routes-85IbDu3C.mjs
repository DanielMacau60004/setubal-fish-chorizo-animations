import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-85IbDu3C.js
var import_jsx_runtime = require_jsx_runtime();
var OWNERS = [{
	name: "Tiago Barão",
	role: "",
	img: "/setubal-fish-chorizo-animations/assets/owner-1-DySlAp-V.jpg"
}, {
	name: "Sergio Mayorga",
	role: "",
	img: "/setubal-fish-chorizo-animations/assets/owner-2-CnONKfaV.jpg"
}];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.3em] text-marine",
					children: "A nossa história"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl leading-tight text-foam md:text-5xl",
					children: "Do mar para a sua mesa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 text-foam/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A ÉPÊXE nasceu da vontade de valorizar as raízes e a identidade de Setúbal, celebrando a sua profunda ligação ao mar e a um dos maiores tesouros naturais de Portugal: o peixe." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inspirados pela riqueza da nossa costa e pela tradição gastronómica portuguesa, decidimos reinventar uma categoria tão enraizada na nossa cultura como a dos enchidos tradicionais de porco. Assim nasceu a ÉPÊXE: uma nova forma de olhar para a tradição, onde os sabores do peixe encontram a autenticidade e o saber-fazer que fazem parte da nossa identidade." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Inovar não significa esquecer o passado, mas encontrar novas formas de o honrar. Por isso, criamos produtos que respeitam a tradição portuguesa, abraçando simultaneamente a criatividade e o potencial dos recursos que o nosso mar nos oferece." })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-foam",
				children: "Quem somos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2",
				children: OWNERS.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-2xl border border-foam/10 bg-deep-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: o.img,
						alt: o.name,
						width: 768,
						height: 960,
						loading: "lazy",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-foam",
							children: o.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-foam/60",
							children: o.role
						})]
					})]
				}, o.name))
			})]
		})]
	});
}
//#endregion
export { Home as component };
