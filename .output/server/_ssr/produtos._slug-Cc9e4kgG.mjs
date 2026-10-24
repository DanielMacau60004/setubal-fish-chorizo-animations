import { n as PRODUCTS } from "./content-Dqx3DyH9.mjs";
import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/produtos._slug-Cc9e4kgG.js
var $$splitComponentImporter = () => import("./produtos._slug-ucdqqts3.mjs");
var $$splitNotFoundComponentImporter = () => import("./produtos._slug-qo4wxwZW.mjs");
var Route = createFileRoute("/produtos/$slug")({
	loader: ({ params }) => {
		const product = PRODUCTS.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Produto não encontrado — ÉPÊXE" }, {
			name: "robots",
			content: "noindex"
		}] };
		const p = loaderData.product;
		return { meta: [
			{ title: `${p.name} — ÉPÊXE` },
			{
				name: "description",
				content: p.short
			},
			{
				property: "og:title",
				content: `${p.name} — ÉPÊXE`
			},
			{
				property: "og:description",
				content: p.short
			},
			{
				property: "og:type",
				content: "product"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
