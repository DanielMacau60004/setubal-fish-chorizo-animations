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
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-10-24T10:52:49.428Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-10-24T10:52:49.428Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/assets/DistilleryStrong-Dj6Otexo.ttf": {
		"type": "font/ttf",
		"etag": "\"32430-Xp412NuTl7VoRrLAzXMXhy0UmoY\"",
		"mtime": "2026-10-24T20:59:27.099Z",
		"size": 205872,
		"path": "../public/assets/DistilleryStrong-Dj6Otexo.ttf"
	},
	"/assets/contacto-CwKIDNw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"765-xLft/gRaisRJbKdHQdeekYuwPaU\"",
		"mtime": "2026-10-24T20:59:27.090Z",
		"size": 1893,
		"path": "../public/assets/contacto-CwKIDNw1.js"
	},
	"/assets/enchido_pescada-BGe4sjx4.jpeg": {
		"type": "image/jpeg",
		"etag": "\"454de-ky5zkPfh6GrtXfqXVyNZO/28e58\"",
		"mtime": "2026-10-24T20:59:27.104Z",
		"size": 283870,
		"path": "../public/assets/enchido_pescada-BGe4sjx4.jpeg"
	},
	"/assets/enchido_choco-CwSqVskV.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4231e-mGj2bn4ANw2UfKVU/CVoh3mXpV0\"",
		"mtime": "2026-10-24T20:59:27.101Z",
		"size": 271134,
		"path": "../public/assets/enchido_choco-CwSqVskV.jpeg"
	},
	"/assets/enchido_pescada_1-CXgJtSP0.jpeg": {
		"type": "image/jpeg",
		"etag": "\"34741-baIAiisVdVzGRltrc2KklYMbt3A\"",
		"mtime": "2026-10-24T20:59:27.107Z",
		"size": 214849,
		"path": "../public/assets/enchido_pescada_1-CXgJtSP0.jpeg"
	},
	"/assets/index-Cp3KfRxC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"74c6d-IevDCdBjKQjurMg8wNBVAqxBehs\"",
		"mtime": "2026-10-24T20:59:27.088Z",
		"size": 478317,
		"path": "../public/assets/index-Cp3KfRxC.js"
	},
	"/assets/enchido_salmao-D8SbzbHu.jpeg": {
		"type": "image/jpeg",
		"etag": "\"38590-v0jLqCYZ8YW4K8WiTjWDmOoU4MI\"",
		"mtime": "2026-10-24T20:59:27.109Z",
		"size": 230800,
		"path": "../public/assets/enchido_salmao-D8SbzbHu.jpeg"
	},
	"/assets/owner-2-DVfbpcBK.jpg": {
		"type": "image/jpeg",
		"etag": "\"17b77-6t/4M051dLbVNmnHEqdUZMLmeDc\"",
		"mtime": "2026-10-24T20:59:27.113Z",
		"size": 97143,
		"path": "../public/assets/owner-2-DVfbpcBK.jpg"
	},
	"/assets/owner-1-C7l5CXfC.jpg": {
		"type": "image/jpeg",
		"etag": "\"6059f-j4tWa0AFkvEA3YyTM3ksFl4+VO4\"",
		"mtime": "2026-10-24T20:59:27.111Z",
		"size": 394655,
		"path": "../public/assets/owner-1-C7l5CXfC.jpg"
	},
	"/assets/produtos.index-3rXTQLui.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"487-4BKifF/3KDvrs9np4ck8P4VVGBA\"",
		"mtime": "2026-10-24T20:59:27.096Z",
		"size": 1159,
		"path": "../public/assets/produtos.index-3rXTQLui.js"
	},
	"/assets/pratos-DQm0eiTs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38b-3wYSfVWXqqedrPOYYUh0hAYvlXw\"",
		"mtime": "2026-10-24T20:59:27.091Z",
		"size": 907,
		"path": "../public/assets/pratos-DQm0eiTs.js"
	},
	"/assets/produtos._slug-BJ22uNPM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"593-WkiTlAz4WlFGKLW3UfxSUT4I2HU\"",
		"mtime": "2026-10-24T20:59:27.092Z",
		"size": 1427,
		"path": "../public/assets/produtos._slug-BJ22uNPM.js"
	},
	"/assets/produtos._slug-v6O18GhX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18c-who+uZIdMAI/w97CJX+GcwP1MIk\"",
		"mtime": "2026-10-24T20:59:27.095Z",
		"size": 396,
		"path": "../public/assets/produtos._slug-v6O18GhX.js"
	},
	"/assets/routes-BEqi8taR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d2-ZRoHekkw8JVguc+qZFr0qOF8f+Q\"",
		"mtime": "2026-10-24T20:59:27.098Z",
		"size": 2258,
		"path": "../public/assets/routes-BEqi8taR.js"
	},
	"/assets/styles-DUHuQ25H.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"14d56-7sz2HVIlR/G9G1XkhsCd8q5P1PU\"",
		"mtime": "2026-10-24T20:59:27.134Z",
		"size": 85334,
		"path": "../public/assets/styles-DUHuQ25H.css"
	},
	"/assets/prato-bolinhas-farinheira-Dq6X4leu.jpg": {
		"type": "image/jpeg",
		"etag": "\"e391b-R3t1FcJk8mcsKWPZQtH+7i7oxFI\"",
		"mtime": "2026-10-24T20:59:27.119Z",
		"size": 932123,
		"path": "../public/assets/prato-bolinhas-farinheira-Dq6X4leu.jpg"
	},
	"/assets/prato-arroz-morcela-DjCBc9JG.jpg": {
		"type": "image/jpeg",
		"etag": "\"102683-4N9JKoLF9MTlsXsQVeKvcQ2jnYo\"",
		"mtime": "2026-10-24T20:59:27.115Z",
		"size": 1058435,
		"path": "../public/assets/prato-arroz-morcela-DjCBc9JG.jpg"
	},
	"/assets/prato-feijoada-NNo-vdaE.jpg": {
		"type": "image/jpeg",
		"etag": "\"10f672-oIwIgwoTqRKpUuEZn8NekrBi5wY\"",
		"mtime": "2026-10-24T20:59:27.124Z",
		"size": 1111666,
		"path": "../public/assets/prato-feijoada-NNo-vdaE.jpg"
	},
	"/assets/prato-caldeirada-BdVg8zKC.jpg": {
		"type": "image/jpeg",
		"etag": "\"131310-bp8Sq3pg427ikzo7sQMtLHoZgx0\"",
		"mtime": "2026-10-24T20:59:27.122Z",
		"size": 1250064,
		"path": "../public/assets/prato-caldeirada-BdVg8zKC.jpg"
	},
	"/assets/prato-ovos-mexidos-CoYr64tL.jpg": {
		"type": "image/jpeg",
		"etag": "\"113768-SZ4Sy1xRf22m8z9brjmMr+QOXYQ\"",
		"mtime": "2026-10-24T20:59:27.127Z",
		"size": 1128296,
		"path": "../public/assets/prato-ovos-mexidos-CoYr64tL.jpg"
	},
	"/assets/prato-pao-chourico-pescada-D_wWzmhA.jpg": {
		"type": "image/jpeg",
		"etag": "\"115bf7-O7bVVm50kJCz0qDn68yo+GI1fZg\"",
		"mtime": "2026-10-24T20:59:27.129Z",
		"size": 1137655,
		"path": "../public/assets/prato-pao-chourico-pescada-D_wWzmhA.jpg"
	},
	"/assets/setubal-fontainhas-BeYXejnV.png": {
		"type": "image/png",
		"etag": "\"364975-JEbemIxDP3sFAaL4rkDBdy0PB6I\"",
		"mtime": "2026-10-24T20:59:27.132Z",
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
var _lazy_IOdUa2 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IOdUa2
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
