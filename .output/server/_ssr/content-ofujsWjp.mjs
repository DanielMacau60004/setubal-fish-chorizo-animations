import { i as stringType, n as numberType, r as objectType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-ofujsWjp.js
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
function resolveImage(filename) {
	return `/src/content/imagens/${filename}`;
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
