globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.htaccess": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1d0-x3sqeF6ntPn4U0Igve/DMHqiZOM\"",
		"mtime": "2026-11-06T22:59:50.394Z",
		"size": 464,
		"path": "../public/.htaccess"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-11-05T21:41:57.064Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-11-05T21:41:57.064Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/android-chrome-192x192-Bv6ntEvc.png": {
		"type": "image/png",
		"etag": "\"63f6-Idpr7hHJ+yk820QZvgEtp2jGMXY\"",
		"mtime": "2026-11-06T23:09:31.287Z",
		"size": 25590,
		"path": "../public/assets/android-chrome-192x192-Bv6ntEvc.png"
	},
	"/assets/contacto-Bs-4AT2e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d53-Co1NGL2BOaQHTP7cw+/HOVXilWQ\"",
		"mtime": "2026-11-06T23:09:31.278Z",
		"size": 3411,
		"path": "../public/assets/contacto-Bs-4AT2e.js"
	},
	"/assets/enchido_choco-CwSqVskV.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4231e-mGj2bn4ANw2UfKVU/CVoh3mXpV0\"",
		"mtime": "2026-11-06T23:09:31.288Z",
		"size": 271134,
		"path": "../public/assets/enchido_choco-CwSqVskV.jpeg"
	},
	"/assets/enchido_pescada-BGe4sjx4.jpeg": {
		"type": "image/jpeg",
		"etag": "\"454de-ky5zkPfh6GrtXfqXVyNZO/28e58\"",
		"mtime": "2026-11-06T23:09:31.290Z",
		"size": 283870,
		"path": "../public/assets/enchido_pescada-BGe4sjx4.jpeg"
	},
	"/assets/DistilleryStrong-Dj6Otexo.ttf": {
		"type": "font/ttf",
		"etag": "\"32430-Xp412NuTl7VoRrLAzXMXhy0UmoY\"",
		"mtime": "2026-11-06T23:09:31.286Z",
		"size": 205872,
		"path": "../public/assets/DistilleryStrong-Dj6Otexo.ttf"
	},
	"/assets/index-C1QD9Z19.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7589e-QPXnySySu5z88RZDUinh30Gojco\"",
		"mtime": "2026-11-06T23:09:31.278Z",
		"size": 481438,
		"path": "../public/assets/index-C1QD9Z19.js"
	},
	"/assets/enchido_pescada_1-CXgJtSP0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"34741-baIAiisVdVzGRltrc2KklYMbt3A\"",
		"mtime": "2026-11-06T23:09:31.291Z",
		"size": 214849,
		"path": "../public/assets/enchido_pescada_1-CXgJtSP0.jpeg"
	},
	"/assets/enchido_salmao-D8SbzbHu.jpeg": {
		"type": "image/jpeg",
		"etag": "\"38590-v0jLqCYZ8YW4K8WiTjWDmOoU4MI\"",
		"mtime": "2026-11-06T23:09:31.292Z",
		"size": 230800,
		"path": "../public/assets/enchido_salmao-D8SbzbHu.jpeg"
	},
	"/assets/owner-1-B6tiEhmo.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4d89f-4ENS1xtyuQfZEqpBDKCTIbYkAfw\"",
		"mtime": "2026-11-06T23:09:31.293Z",
		"size": 317599,
		"path": "../public/assets/owner-1-B6tiEhmo.jpeg"
	},
	"/assets/owner-2-D38dFFbS.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4e2c6-np9Vn0z3pmrwihcgw0WqrP1LFXk\"",
		"mtime": "2026-11-06T23:09:31.294Z",
		"size": 320198,
		"path": "../public/assets/owner-2-D38dFFbS.jpeg"
	},
	"/assets/produtos.index-DKfDorGF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"487-zPlFOI5wspVsU2K3incK2gv/MOs\"",
		"mtime": "2026-11-06T23:09:31.285Z",
		"size": 1159,
		"path": "../public/assets/produtos.index-DKfDorGF.js"
	},
	"/assets/pratos-CEYgd23T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38b-hf7Q7uPfyCay225Ms+wZlKnXlhs\"",
		"mtime": "2026-11-06T23:09:31.279Z",
		"size": 907,
		"path": "../public/assets/pratos-CEYgd23T.js"
	},
	"/assets/produtos._slug-CyAhJ7O1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-FrEYgu0hik82k7zqc2Cg3sWstbI\"",
		"mtime": "2026-11-06T23:09:31.284Z",
		"size": 396,
		"path": "../public/assets/produtos._slug-CyAhJ7O1.js"
	},
	"/assets/produtos._slug-DG_dzBok.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"593-ynXkvUtNec6gtLQ1YqNWrDkDUs8\"",
		"mtime": "2026-11-06T23:09:31.284Z",
		"size": 1427,
		"path": "../public/assets/produtos._slug-DG_dzBok.js"
	},
	"/assets/routes-OoUIKiJA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"894-SdSm2Qb3elGmzznp8FO0YJF2uE8\"",
		"mtime": "2026-11-06T23:09:31.286Z",
		"size": 2196,
		"path": "../public/assets/routes-OoUIKiJA.js"
	},
	"/assets/styles-BzBQ7PYF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1538e-cK55qqQx0sdUqAYeR6YSa+Yavjg\"",
		"mtime": "2026-11-06T23:09:31.305Z",
		"size": 86926,
		"path": "../public/assets/styles-BzBQ7PYF.css"
	},
	"/api/contact.php": {
		"type": "application/x-httpd-php",
		"etag": "\"a2a-sBdVHnrRfuYIDYIlmtzWyQe9xr0\"",
		"mtime": "2026-11-06T23:08:07.628Z",
		"size": 2602,
		"path": "../public/api/contact.php"
	},
	"/assets/prato-bolinhas-farinheira-Dq6X4leu.jpg": {
		"type": "image/jpeg",
		"etag": "\"e391b-R3t1FcJk8mcsKWPZQtH+7i7oxFI\"",
		"mtime": "2026-11-06T23:09:31.296Z",
		"size": 932123,
		"path": "../public/assets/prato-bolinhas-farinheira-Dq6X4leu.jpg"
	},
	"/assets/prato-arroz-morcela-DjCBc9JG.jpg": {
		"type": "image/jpeg",
		"etag": "\"102683-4N9JKoLF9MTlsXsQVeKvcQ2jnYo\"",
		"mtime": "2026-11-06T23:09:31.294Z",
		"size": 1058435,
		"path": "../public/assets/prato-arroz-morcela-DjCBc9JG.jpg"
	},
	"/assets/prato-ovos-mexidos-CoYr64tL.jpg": {
		"type": "image/jpeg",
		"etag": "\"113768-SZ4Sy1xRf22m8z9brjmMr+QOXYQ\"",
		"mtime": "2026-11-06T23:09:31.300Z",
		"size": 1128296,
		"path": "../public/assets/prato-ovos-mexidos-CoYr64tL.jpg"
	},
	"/assets/prato-feijoada-NNo-vdaE.jpg": {
		"type": "image/jpeg",
		"etag": "\"10f672-oIwIgwoTqRKpUuEZn8NekrBi5wY\"",
		"mtime": "2026-11-06T23:09:31.299Z",
		"size": 1111666,
		"path": "../public/assets/prato-feijoada-NNo-vdaE.jpg"
	},
	"/assets/prato-caldeirada-BdVg8zKC.jpg": {
		"type": "image/jpeg",
		"etag": "\"131310-bp8Sq3pg427ikzo7sQMtLHoZgx0\"",
		"mtime": "2026-11-06T23:09:31.298Z",
		"size": 1250064,
		"path": "../public/assets/prato-caldeirada-BdVg8zKC.jpg"
	},
	"/assets/prato-pao-chourico-pescada-D_wWzmhA.jpg": {
		"type": "image/jpeg",
		"etag": "\"115bf7-O7bVVm50kJCz0qDn68yo+GI1fZg\"",
		"mtime": "2026-11-06T23:09:31.301Z",
		"size": 1137655,
		"path": "../public/assets/prato-pao-chourico-pescada-D_wWzmhA.jpg"
	},
	"/assets/setubal-fontainhas-BeYXejnV.png": {
		"type": "image/png",
		"etag": "\"364975-JEbemIxDP3sFAaL4rkDBdy0PB6I\"",
		"mtime": "2026-11-06T23:09:31.305Z",
		"size": 3557749,
		"path": "../public/assets/setubal-fontainhas-BeYXejnV.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_D89BoE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_D89BoE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
