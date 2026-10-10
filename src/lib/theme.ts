export type Theme = "light" | "dark";

export function resolveTheme(saved: string | null, systemDark: boolean): Theme {
  if (saved === "light" || saved === "dark") return saved;
  return systemDark ? "dark" : "light";
}