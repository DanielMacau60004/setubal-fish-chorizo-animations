import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-B2wejuZy.mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useNavigate, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$5 } from "./produtos._slug-BzajSauF.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as Menu, n as Sun, r as Moon, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-jDRccgUJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BzBQ7PYF.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function AnchorMark({ className }) {
	const gradientId = `epexe-steel-${(0, import_react.useId)().replace(/:/g, "")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 112",
		className,
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: gradientId,
				gradientUnits: "userSpaceOnUse",
				x1: "0",
				y1: "0",
				x2: "100",
				y2: "112",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#ffffff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "55%",
						stopColor: "#e3ebf7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#a5badc"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: `url(#${gradientId})`,
				strokeLinecap: "round",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "15",
						r: "10",
						strokeWidth: "9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "50",
						y1: "26",
						x2: "50",
						y2: "84",
						strokeWidth: "14"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "27",
						y1: "44",
						x2: "73",
						y2: "44",
						strokeWidth: "10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M17 64 C17 90 32 100 50 100 C68 100 83 90 83 64",
						strokeWidth: "13"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "17,48 5,70 29,70",
				fill: `url(#${gradientId})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "83,48 71,70 95,70",
				fill: `url(#${gradientId})`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "50,112 39,92 61,92",
				fill: `url(#${gradientId})`
			})
		]
	});
}
var TRAILING_LETTERS = [
	"P",
	"Ê",
	"X",
	"E"
];
var BUBBLES = [
	{
		left: "4%",
		size: 16,
		delay: -.3,
		dur: 1.7
	},
	{
		left: "10%",
		size: 9,
		delay: -1.1,
		dur: 1.4
	},
	{
		left: "16%",
		size: 22,
		delay: -.7,
		dur: 2
	},
	{
		left: "22%",
		size: 12,
		delay: -1.3,
		dur: 1.6
	},
	{
		left: "28%",
		size: 18,
		delay: -.5,
		dur: 1.8
	},
	{
		left: "34%",
		size: 10,
		delay: -1.5,
		dur: 1.7
	},
	{
		left: "40%",
		size: 24,
		delay: -.9,
		dur: 2.1
	},
	{
		left: "46%",
		size: 14,
		delay: -.2,
		dur: 1.5
	},
	{
		left: "52%",
		size: 9,
		delay: -1.2,
		dur: 1.4
	},
	{
		left: "58%",
		size: 20,
		delay: -.6,
		dur: 1.9
	},
	{
		left: "64%",
		size: 12,
		delay: -1.4,
		dur: 1.6
	},
	{
		left: "70%",
		size: 25,
		delay: -.8,
		dur: 2
	},
	{
		left: "76%",
		size: 10,
		delay: -.4,
		dur: 1.5
	},
	{
		left: "82%",
		size: 17,
		delay: -1.6,
		dur: 1.8
	},
	{
		left: "88%",
		size: 13,
		delay: -1,
		dur: 1.7
	},
	{
		left: "94%",
		size: 21,
		delay: -.5,
		dur: 1.9
	}
];
function EpexeLoader({ onComplete, fullscreen = false }) {
	(0, import_react.useEffect)(() => {
		if (!onComplete) return;
		const t = setTimeout(onComplete, 1800);
		return () => clearTimeout(t);
	}, [onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: fullscreen ? "epexe-loader epexe-loader--fullscreen" : "epexe-loader",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "epexe-bubbles",
				"aria-hidden": "true",
				children: BUBBLES.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "epexe-bubble",
					style: {
						left: b.left,
						width: b.size,
						height: b.size,
						animationDelay: `${b.delay}s`,
						animationDuration: `${b.dur}s`
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "epexe-word",
				role: "img",
				"aria-label": "ÉPÊXE",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "epexe-letter",
						style: { animationDelay: "0.05s" },
						children: "É"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "epexe-anchor epexe-anchor-in",
						style: { animationDelay: "0.15s" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorMark, { className: "epexe-anchor-svg" })
					}),
					TRAILING_LETTERS.map((letter, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "epexe-letter",
						style: { animationDelay: `${.28 + i * .11}s` },
						children: letter
					}, `${letter}-${i}`))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "epexe-tagline",
				children: "Chouriços de Peixe · Setúbal"
			})
		]
	});
}
/**
* Compact logo for the navbar: static letters, gently swaying anchor
* and an occasional tiny bubble — subtle enough to live there permanently.
*/
function NavbarLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `epexe-nav ${className}`,
		role: "img",
		"aria-label": "ÉPÊXE",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "epexe-nav-bubbles",
			"aria-hidden": "true",
			children: Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "epexe-nav-bubble" }, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "epexe-nav-text",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "É" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "epexe-nav-anchor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnchorMark, { className: "epexe-anchor-svg" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PÊXE" })
			]
		})]
	});
}
function resolveTheme(saved, systemDark) {
	if (saved === "light" || saved === "dark") return saved;
	return systemDark ? "dark" : "light";
}
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	toggle: () => {}
});
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const system = window.matchMedia("(prefers-color-scheme: dark)");
		const sync = () => {
			let saved = null;
			try {
				saved = localStorage.getItem("epexe-theme");
			} catch {}
			const next = resolveTheme(saved, system.matches);
			document.documentElement.classList.toggle("dark", next === "dark");
			document.documentElement.dataset["theme"] = next;
			setTheme(next);
		};
		sync();
		system.addEventListener("change", sync);
		window.addEventListener("storage", sync);
		return () => {
			system.removeEventListener("change", sync);
			window.removeEventListener("storage", sync);
		};
	}, []);
	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		try {
			localStorage.setItem("epexe-theme", next);
		} catch {}
		document.documentElement.classList.toggle("dark", next === "dark");
		document.documentElement.dataset["theme"] = next;
		setTheme(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggle
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeContext);
function ThemeToggle() {
	const { theme, toggle } = useTheme();
	const dark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": dark ? "Mudar para modo claro" : "Mudar para modo escuro",
		title: dark ? "Mudar para modo claro" : "Mudar para modo escuro",
		className: "h-10 w-10 shrink-0 rounded-full border border-foam/20 text-foam hover:border-foam/50 hover:bg-deep-2 hover:text-foam",
		children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {})
	});
}
var LINKS = [
	{
		to: "/",
		label: "Início"
	},
	{
		to: "/produtos",
		label: "Produtos"
	},
	{
		to: "/pratos",
		label: "Pratos"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const headerRef = (0, import_react.useRef)(null);
	const menuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
				menuRef.current?.focus();
			}
		};
		const onPointer = (event) => {
			if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
		};
		const desktop = window.matchMedia("(min-width: 768px)");
		const onResize = () => {
			if (desktop.matches) setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("pointerdown", onPointer);
		desktop.addEventListener("change", onResize);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("pointerdown", onPointer);
			desktop.removeEventListener("change", onResize);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: headerRef,
		className: "sticky top-0 z-40 border-b border-foam/10 bg-deep/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 md:flex md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-label": "Início",
				className: "min-w-0 w-fit",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavbarLogo, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2 md:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Navegação principal",
						className: "hidden items-center gap-6 text-sm md:flex",
						children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							activeOptions: { exact: l.to === "/" },
							className: "text-foam/60 transition-colors hover:text-foam",
							activeProps: { className: "text-marine font-semibold" },
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						ref: menuRef,
						variant: "ghost",
						size: "icon",
						className: "h-10 w-10 shrink-0 text-foam hover:bg-deep-2 hover:text-foam md:hidden",
						onClick: () => setOpen(!open),
						"aria-label": open ? "Fechar menu" : "Abrir menu",
						title: open ? "Fechar menu" : "Abrir menu",
						"aria-expanded": open,
						"aria-controls": "mobile-navigation",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-navigation",
			"aria-label": "Navegação móvel",
			hidden: !open,
			className: "border-t border-foam/10 bg-deep px-5 py-3 md:hidden",
			children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				activeOptions: { exact: link.to === "/" },
				onClick: () => setOpen(false),
				className: "block rounded-md px-3 py-3 text-sm text-foam/70 hover:bg-deep-2 hover:text-foam",
				activeProps: { className: "bg-deep-2 text-marine font-semibold" },
				children: link.label
			}, link.to))
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-20 border-t border-foam/10 py-8 text-center text-xs text-foam/50",
		children: "ÉPÊXE · Enchidos de Peixe · Setúbal"
	});
}
var setubal_fontainhas_default = "/assets/setubal-fontainhas-BeYXejnV.png";
var favicon_32x32_default = "data:image/png;base64,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";
var favicon_16x16_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYUlEQVR4AXyQTUiUURSGnzNWmoMzZaCoQZvctcgkIspFWCANGkhBLTLKhSXSj0GLtP8olAiCIGiliSAYGpOopEE/pKHEKNliXLVSwhzd+JcjX+feOzrMxsM59z3nPee89/uuzx/I8fyBXC/TRo6XGcz1/JtFYt7s+DX3kTBRFBFE0blmWmMCzR2JiGhoIRrqGwKaYzoioiDsCAZpb2ul532YwsK9lhMRPA3URAMEFXApaiYTEaWFUOgksbl5+vv6qaqqspzrmEEVcqAColnCRUwhiAiRyBhHS0qouXKZb0NDltMD7eq0aDj3JVNDiA4oqsDkZJTBwY/MzMwy+GEAEdcTcahT1vUXLNpD9BQR7jQ28C4cprT0BHkFBYR7++h420VGRoaZQNVYtxQB0yivKKe7u5vmpiZGR0eJxea5p4J3G25TeeYc29LTsRfp6amKEzCMFruys7n/4CFFxcV8Hx5manqaf6urjI+PsT2YR01dPacv3EB8aTrt3Am4nPz8fG362F90QBkhHo/jeaJ3CXm797CmV/oDO0lL26p951ZAXM7ExE99/QhZWQF0S2+PE18Dk2/xllhcWqG36w3x1RXLoeZTUYWkt7a0cOjwEa7V32I2Nkc0GuV4WTnnq2sZ6O9h6vcvkOSW/QKMJT7jy+dPPHn8iFBFJdU1V9lXdJC6m42MDH/l9ctmM5kSGwJm3/wvKt7Z0c6psmNcr73EqxfPuHg2xPOnjSwvL5FiImwIYE23FT2FhcUFIj9G6Ops4+/MHwxnxA1qW6cwT5MqYJt62AFFu7WOoKXpaBhOa+P/AQAA//+y/nRjAAAABklEQVQDAMw+x49dsC1yAAAAAElFTkSuQmCC";
var android_chrome_192x192_default = "/assets/android-chrome-192x192-Bv6ntEvc.png";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ÉPÊXE — Chouriços de Peixe de Setúbal" },
			{
				name: "description",
				content: "Chouriços de peixe artesanais de Setúbal."
			},
			{
				name: "author",
				content: "ÉPÊXE"
			},
			{
				property: "og:title",
				content: "ÉPÊXE — Chouriços de Peixe de Setúbal"
			},
			{
				property: "og:description",
				content: "Chouriços de peixe artesanais de Setúbal."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: favicon_32x32_default
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: favicon_16x16_default
			},
			{
				rel: "apple-touch-icon",
				sizes: "192x192",
				href: android_chrome_192x192_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bevan&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){var saved=null;try{saved=localStorage.getItem('epexe-theme')}catch(e){}var dark=saved==='dark'||(saved!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.dataset.theme=dark?'dark':'light'})()` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				async: true,
				src: "https://www.googletagmanager.com/gtag/js?id=G-D10P4B4Y09"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','G-D10P4B4Y09',{send_page_view:false});` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	const navigate = useNavigate();
	const pagePath = useRouterState({ select: (state) => state.location.href });
	const [intro, setIntro] = (0, import_react.useState)(true);
	const finishIntro = (0, import_react.useCallback)(() => {
		setIntro(false);
		navigate({ to: "/" });
	}, [navigate]);
	(0, import_react.useEffect)(() => {
		window.gtag("event", "page_view", {
			page_path: pagePath,
			page_location: window.location.href,
			page_title: document.title
		});
	}, [pagePath]);
	(0, import_react.useEffect)(() => {
		if (!intro) return;
		const previousOverflow = document.body.style.overflow;
		const previousOverflowX = document.body.style.overflowX;
		const previousHtmlOverflow = document.documentElement.style.overflow;
		const previousScrollbarWidth = document.documentElement.style.getPropertyValue("scrollbar-width");
		const previousMsOverflowStyle = document.documentElement.style.getPropertyValue("-ms-overflow-style");
		document.body.style.overflow = "hidden";
		document.body.style.overflowX = "hidden";
		document.documentElement.style.overflow = "hidden";
		document.documentElement.style.setProperty("scrollbar-width", "none");
		document.documentElement.style.setProperty("-ms-overflow-style", "none");
		return () => {
			document.body.style.overflow = previousOverflow;
			document.body.style.overflowX = previousOverflowX;
			document.documentElement.style.overflow = previousHtmlOverflow;
			if (previousScrollbarWidth) document.documentElement.style.setProperty("scrollbar-width", previousScrollbarWidth);
			else document.documentElement.style.removeProperty("scrollbar-width");
			if (previousMsOverflowStyle) document.documentElement.style.setProperty("-ms-overflow-style", previousMsOverflowStyle);
			else document.documentElement.style.removeProperty("-ms-overflow-style");
		};
	}, [intro]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EpexeLoader, {
			fullscreen: true,
			onComplete: finishIntro
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "site-shell min-h-screen text-foam",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "site-backdrop",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: setubal_fontainhas_default,
						alt: "",
						width: 3056,
						height: 2038
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})] })
	});
}
var $$splitComponentImporter$3 = () => import("./routes-Bxr35sUG.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ÉPÊXE — A nossa história · Chouriços de Peixe de Setúbal" },
		{
			name: "description",
			content: "Conheça a história da ÉPÊXE e dos seus fundadores, criadores dos chouriços de peixe artesanais de Setúbal."
		},
		{
			property: "og:title",
			content: "ÉPÊXE — A nossa história"
		},
		{
			property: "og:description",
			content: "Chouriços de peixe artesanais nascidos no porto de Setúbal."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contacto-CYjZ2NQz.mjs");
var Route$2 = createFileRoute("/contacto")({
	head: () => ({ meta: [
		{ title: "Contacto e Encomendas — ÉPÊXE" },
		{
			name: "description",
			content: "Envie-nos um email para encomendar chouriços de peixe ÉPÊXE."
		},
		{
			property: "og:title",
			content: "Contacto e Encomendas — ÉPÊXE"
		},
		{
			property: "og:description",
			content: "Encomende os nossos chouriços de peixe de Setúbal."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./pratos-CQT97icB.mjs");
var Route$1 = createFileRoute("/pratos")({
	head: () => ({ meta: [
		{ title: "Pratos e Receitas — ÉPÊXE" },
		{
			name: "description",
			content: "Ideias de pratos para cozinhar com os chouriços de peixe ÉPÊXE."
		},
		{
			property: "og:title",
			content: "Pratos e Receitas — ÉPÊXE"
		},
		{
			property: "og:description",
			content: "Pão com chouriço, feijoada, arroz de morcela, bolinhas, ovos mexidos e caldeirada com enchidos de peixe."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./produtos.index-DYXYvIz7.mjs");
var Route = createFileRoute("/produtos/")({
	head: () => ({ meta: [
		{ title: "Produtos — ÉPÊXE Chouriços de Peixe" },
		{
			name: "description",
			content: "Conheça os chouriços de salmão, choco e pescada da ÉPÊXE, de Setúbal."
		},
		{
			property: "og:title",
			content: "Produtos — ÉPÊXE"
		},
		{
			property: "og:description",
			content: "Conheça os nossos chouriços de peixe artesanais."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var ContactoRoute = Route$2.update({
	id: "/contacto",
	path: "/contacto",
	getParentRoute: () => Route$4
});
var PratosRoute = Route$1.update({
	id: "/pratos",
	path: "/pratos",
	getParentRoute: () => Route$4
});
var ProdutosIndexRoute = Route.update({
	id: "/produtos/",
	path: "/produtos/",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute,
	ContactoRoute,
	PratosRoute,
	ProdutosSlugRoute: Route$5.update({
		id: "/produtos/$slug",
		path: "/produtos/$slug",
		getParentRoute: () => Route$4
	}),
	ProdutosIndexRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
