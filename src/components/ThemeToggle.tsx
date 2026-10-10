import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={dark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      title={dark ? "Mudar para modo claro" : "Mudar para modo escuro"}
      className="h-10 w-10 shrink-0 rounded-full border border-foam/20 text-foam hover:border-foam/50 hover:bg-deep-2 hover:text-foam"
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
