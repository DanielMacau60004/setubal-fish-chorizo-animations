import { z } from "zod";

const imageModules = import.meta.glob<string>("../content/imagens/*.{jpg,jpeg,png,webp,avif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const pointerModules = import.meta.glob<{ url: string }>("../content/imagens/*.asset.json", {
  eager: true,
  import: "default",
});

const imageLookup = Object.fromEntries(
  Object.entries(imageModules).map(([filePath, url]) => [filePath.split("/").pop() ?? filePath, url]),
);

const pointerLookup = Object.fromEntries(
  Object.entries(pointerModules).map(([filePath, pointer]) => [
    (filePath.replace(/\.asset\.json$/, "").split("/").pop() ?? filePath).replace(/\\/g, "/"),
    pointer.url,
  ]),
);

function resolveImage(filename: string): string {
  const normalized = filename.replace(/\\/g, "/").split("/").pop() ?? filename;
  return pointerLookup[normalized] ?? imageLookup[normalized] ?? `/src/content/imagens/${normalized}`;
}

const baseSchema = z.object({
  ordem: z.number(),
  slug: z.string().min(1),
  nome: z.string().min(1),
  imagens: z.array(z.string().min(1)).nonempty(),
});
const productSchema = baseSchema.extend({
  resumo: z.string(),
  descricao: z.array(z.string()),
});
const dishSchema = baseSchema.extend({ descricao: z.string() });

const productFiles = import.meta.glob("../content/produtos/*.json", { eager: true, import: "default" });
const dishFiles = import.meta.glob("../content/pratos/*.json", { eager: true, import: "default" });

export type Product = {
  slug: string;
  name: string;
  short: string;
  long: string[];
  images: string[];
};

export const PRODUCTS: Product[] = Object.values(productFiles)
  .map((value) => productSchema.parse(value))
  .sort((a, b) => a.ordem - b.ordem)
  .map((p) => ({ slug: p.slug, name: p.nome, short: p.resumo, long: p.descricao, images: p.imagens.map(resolveImage) }));

export const DISHES = Object.values(dishFiles)
  .map((value) => dishSchema.parse(value))
  .sort((a, b) => a.ordem - b.ordem)
  .map((d) => ({ slug: d.slug, name: d.nome, text: d.descricao, images: d.imagens.map(resolveImage), image: resolveImage(d.imagens[0]) }));
