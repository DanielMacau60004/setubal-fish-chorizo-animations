import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { resolveTheme, type Theme } from "@/lib/theme";

const ThemeContext = createContext({ theme: "light" as Theme, toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("epexe-theme"); } catch { /* Storage may be unavailable. */ }
      const next = resolveTheme(saved, system.matches);
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.dataset.theme = next;
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
    try { localStorage.setItem("epexe-theme", next); } catch { /* Still apply for this visit. */ }
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.dataset.theme = next;
    setTheme(next);
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);