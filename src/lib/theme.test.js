import { describe, expect, test } from "bun:test";
import { resolveTheme } from "./theme";

describe("theme preference", () => {
  test("uses the user's dark system preference without an override", () => {
    expect(resolveTheme(null, true)).toBe("dark");
  });
  test("uses the user's light system preference without an override", () => {
    expect(resolveTheme(null, false)).toBe("light");
  });
  test("keeps a manually selected theme over the system preference", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });
});