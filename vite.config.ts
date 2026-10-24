
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/setubal-fish-chorizo-animations/",
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
    spa: {
      enabled: true,
    },
  },
});
