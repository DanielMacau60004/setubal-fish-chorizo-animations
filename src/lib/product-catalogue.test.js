import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const product = (slug) => JSON.parse(readFileSync(new URL(`../content/produtos/${slug}.json`, import.meta.url), "utf8"));

describe("Confirmed product photographs", () => {
  test("salmon uses the first two supplied photos", () => {
    const salmon = product("salmao");
    expect(salmon.nome).toBe("Chouriço de Salmão");
    expect(salmon.imagens).toEqual(["chourico-salmao.jpeg", "chourico-salmao-assador.jpeg"]);
  });
  test("cuttlefish uses the third supplied photo", () => {
    const cuttlefish = product("choco");
    expect(cuttlefish.nome).toBe("Chouriço de Choco");
    expect(cuttlefish.imagens).toEqual(["chourico-choco.jpeg"]);
  });
  test("hake uses the fourth supplied photo", () => {
    const hake = product("pescada");
    expect(hake.nome).toBe("Chouriço de Pescada");
    expect(hake.imagens).toEqual(["chourico-pescada.jpeg"]);
  });
});