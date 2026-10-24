import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useNavigate,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { EpexeLoader } from "@/components/EpexeLoader";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import setubalDocks from "@/assets/setubal-fontainhas.png";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ÉPÊXE — Chouriços de Peixe de Setúbal" },
      { name: "description", content: "Chouriços de peixe artesanais de Setúbal." },
      { name: "author", content: "ÉPÊXE" },
      { property: "og:title", content: "ÉPÊXE — Chouriços de Peixe de Setúbal" },
      { property: "og:description", content: "Chouriços de peixe artesanais de Setúbal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bevan&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var saved=null;try{saved=localStorage.getItem('epexe-theme')}catch(e){}var dark=saved==='dark'||(saved!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark);document.documentElement.dataset.theme=dark?'dark':'light'})()` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D10P4B4Y09" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','G-D10P4B4Y09',{send_page_view:false});`,
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const navigate = useNavigate();
  const pagePath = useRouterState({ select: (state) => state.location.href });
  const [intro, setIntro] = useState(true);
  const finishIntro = useCallback(() => {
    setIntro(false);
    navigate({ to: "/" });
  }, [navigate]);

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pagePath]);

  useEffect(() => {
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

      if (previousScrollbarWidth) {
        document.documentElement.style.setProperty("scrollbar-width", previousScrollbarWidth);
      } else {
        document.documentElement.style.removeProperty("scrollbar-width");
      }

      if (previousMsOverflowStyle) {
        document.documentElement.style.setProperty("-ms-overflow-style", previousMsOverflowStyle);
      } else {
        document.documentElement.style.removeProperty("-ms-overflow-style");
      }
    };
  }, [intro]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      {intro && <EpexeLoader fullscreen onComplete={finishIntro} />}
      <div className="site-shell min-h-screen text-foam">
        <div className="site-backdrop" aria-hidden="true">
          <img src={setubalDocks} alt="" width={3056} height={2038} />
        </div>
        <SiteHeader />
        <Outlet />
        <SiteFooter />
      </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
