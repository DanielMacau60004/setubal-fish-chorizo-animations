import { i as stringType, n as numberType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-Dqx3DyH9.js
var enchido_choco_default = "/setubal-fish-chorizo-animations/assets/enchido_choco-CwSqVskV.jpeg";
var enchido_pescada_default = "/setubal-fish-chorizo-animations/assets/enchido_pescada-BGe4sjx4.jpeg";
var enchido_pescada_1_default = "/setubal-fish-chorizo-animations/assets/enchido_pescada_1-CXgJtSP0.jpeg";
var enchido_salmao_default = "/setubal-fish-chorizo-animations/assets/enchido_salmao-D8SbzbHu.jpeg";
var prato_arroz_morcela_default = "/setubal-fish-chorizo-animations/assets/prato-arroz-morcela-DjCBc9JG.jpg";
var prato_bolinhas_farinheira_default = "/setubal-fish-chorizo-animations/assets/prato-bolinhas-farinheira-Dq6X4leu.jpg";
var prato_caldeirada_default = "/setubal-fish-chorizo-animations/assets/prato-caldeirada-BdVg8zKC.jpg";
var prato_feijoada_default = "/setubal-fish-chorizo-animations/assets/prato-feijoada-NNo-vdaE.jpg";
var prato_ovos_mexidos_default = "/setubal-fish-chorizo-animations/assets/prato-ovos-mexidos-CoYr64tL.jpg";
var prato_pao_chourico_pescada_default = "/setubal-fish-chorizo-animations/assets/prato-pao-chourico-pescada-D_wWzmhA.jpg";
var choco_default = {
	ordem: 2,
	slug: "choco",
	nome: "Enchido de choco estilo morcela",
	resumo: "",
	descricao: ["Inspirado na morcela tradicional, este enchido combina a identidade do choco com a herança gastronómica portuguesa, numa homenagem aos sabores e à cultura marítima de Setúbal."],
	imagens: ["enchido_choco.jpeg"]
};
var pescada_default = {
	ordem: 1,
	slug: "pescada",
	nome: "Enchido de pescada estilo chouriço",
	resumo: "",
	descricao: ["A tradição do chouriço português reinventada com pescada, num enchido que combina a identidade dos sabores tradicionais com a inspiração do mar."],
	imagens: ["enchido_pescada.jpeg", "enchido_pescada_1.jpeg"]
};
var salmao_default = {
	ordem: 3,
	slug: "salmao",
	nome: "Enchido de salmão estilo farinheira",
	resumo: "",
	descricao: ["A suavidade e a riqueza do salmão encontram inspiração na farinheira tradicional, dando origem a uma nova interpretação dos enchidos portugueses."],
	imagens: ["enchido_salmao.jpeg"]
};
var arroz_morcela_default = {
	ordem: 3,
	slug: "arroz-morcela",
	nome: "Arroz de morcela",
	descricao: "Um arroz cheio de sabor, onde o choco e a tradição dos enchidos se encontram à mesa.",
	imagens: ["prato-arroz-morcela.jpg"]
};
var bolinhas_farinheira_default = {
	ordem: 4,
	slug: "bolinhas-farinheira",
	nome: "Bolinhas de farinheira de salmão",
	descricao: "Pequenos petiscos crocantes por fora e saborosos por dentro, perfeitos para partilhar.",
	imagens: ["prato-bolinhas-farinheira.jpg"]
};
var caldeirada_safio_pata_roxa_default = {
	ordem: 6,
	slug: "caldeirada-safio-pata-roxa",
	nome: "Caldeirada de safio e pata-roxa",
	descricao: "Um clássico da tradição piscatória portuguesa, onde os sabores autênticos do peixe e do mar celebram a riqueza gastronómica de Setúbal.",
	imagens: ["prato-caldeirada.jpg"]
};
var feijoada_mar_default = {
	ordem: 2,
	slug: "feijoada-mar",
	nome: "Feijoada de mar e enchidos",
	descricao: "Os sabores do mar encontram o conforto da feijoada tradicional, numa combinação rica e cheia de identidade.",
	imagens: ["prato-feijoada.jpg"]
};
var ovos_mexidos_farinheira_default = {
	ordem: 5,
	slug: "ovos-mexidos-farinheira",
	nome: "Ovos mexidos com farinheira",
	descricao: "Um clássico reconfortante reinventado com salmão, ideal para um brunch ou uma refeição descontraída.",
	imagens: ["prato-ovos-mexidos.jpg"]
};
var pao_chourico_pescada_default = {
	ordem: 1,
	slug: "pao-chourico-pescada",
	nome: "Pão com chouriço de pescada",
	descricao: "Uma versão original de um clássico português, onde a tradição do pão com chouriço ganha sabor a mar.",
	imagens: ["prato-pao-chourico-pescada.jpg"]
};
var imageModules = /* #__PURE__ */ Object.assign({
	"../content/imagens/enchido_choco.jpeg": enchido_choco_default,
	"../content/imagens/enchido_pescada.jpeg": enchido_pescada_default,
	"../content/imagens/enchido_pescada_1.jpeg": enchido_pescada_1_default,
	"../content/imagens/enchido_salmao.jpeg": enchido_salmao_default,
	"../content/imagens/prato-arroz-morcela.jpg": prato_arroz_morcela_default,
	"../content/imagens/prato-bolinhas-farinheira.jpg": prato_bolinhas_farinheira_default,
	"../content/imagens/prato-caldeirada.jpg": prato_caldeirada_default,
	"../content/imagens/prato-feijoada.jpg": prato_feijoada_default,
	"../content/imagens/prato-ovos-mexidos.jpg": prato_ovos_mexidos_default,
	"../content/imagens/prato-pao-chourico-pescada.jpg": prato_pao_chourico_pescada_default
});
var pointerModules = /* #__PURE__ */ Object.assign({});
var imageLookup = Object.fromEntries(Object.entries(imageModules).map(([filePath, url]) => [filePath.split("/").pop() ?? filePath, url]));
var pointerLookup = Object.fromEntries(Object.entries(pointerModules).map(([filePath, pointer]) => [(filePath.replace(/\.asset\.json$/, "").split("/").pop() ?? filePath).replace(/\\/g, "/"), pointer.url]));
function resolveImage(filename) {
	const normalized = filename.replace(/\\/g, "/").split("/").pop() ?? filename;
	return pointerLookup[normalized] ?? imageLookup[normalized] ?? `/src/content/imagens/${normalized}`;
}
var baseSchema = objectType({
	ordem: numberType(),
	slug: stringType().min(1),
	nome: stringType().min(1),
	imagens: arrayType(stringType().min(1)).nonempty()
});
var productSchema = baseSchema.extend({
	resumo: stringType(),
	descricao: arrayType(stringType())
});
var dishSchema = baseSchema.extend({ descricao: stringType() });
var productFiles = /* #__PURE__ */ Object.assign({
	"../content/produtos/choco.json": choco_default,
	"../content/produtos/pescada.json": pescada_default,
	"../content/produtos/salmao.json": salmao_default
});
var dishFiles = /* #__PURE__ */ Object.assign({
	"../content/pratos/arroz-morcela.json": arroz_morcela_default,
	"../content/pratos/bolinhas-farinheira.json": bolinhas_farinheira_default,
	"../content/pratos/caldeirada-safio-pata-roxa.json": caldeirada_safio_pata_roxa_default,
	"../content/pratos/feijoada-mar.json": feijoada_mar_default,
	"../content/pratos/ovos-mexidos-farinheira.json": ovos_mexidos_farinheira_default,
	"../content/pratos/pao-chourico-pescada.json": pao_chourico_pescada_default
});
var PRODUCTS = Object.values(productFiles).map((value) => productSchema.parse(value)).sort((a, b) => a.ordem - b.ordem).map((p) => ({
	slug: p.slug,
	name: p.nome,
	short: p.resumo,
	long: p.descricao,
	images: p.imagens.map(resolveImage)
}));
var DISHES = Object.values(dishFiles).map((value) => dishSchema.parse(value)).sort((a, b) => a.ordem - b.ordem).map((d) => ({
	slug: d.slug,
	name: d.nome,
	text: d.descricao,
	images: d.imagens.map(resolveImage),
	image: resolveImage(d.imagens[0])
}));
//#endregion
export { PRODUCTS as n, DISHES as t };
