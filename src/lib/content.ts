import atum from "@/assets/prod-atum.jpg";
import choco from "@/assets/prod-choco.jpg";
import polvo from "@/assets/prod-polvo.jpg";
import arroz from "@/assets/dish-arroz.jpg";
import tosta from "@/assets/dish-tosta.jpg";
import assado from "@/assets/dish-assado.jpg";

export type Product = {
  slug: string;
  name: string;
  short: string;
  long: string[];
  images: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "atum",
    name: "Chouriço de Atum",
    short: "Atum fresco, azeite e um toque de pimentão. O nosso clássico.",
    long: [
      "Feito com lombos de atum fresco comprados na lota de Setúbal, temperado com alho, pimentão doce e azeite virgem extra.",
      "Fumado lentamente em lenha de azinho, tem uma textura firme e um sabor suave a mar. Ideal para petiscar, grelhar ou juntar a um arroz.",
    ],
    images: [atum, tosta, arroz],
  },
  {
    slug: "choco",
    name: "Chouriço de Choco",
    short: "Choco de Setúbal com a sua tinta. Intenso, escuro e único.",
    long: [
      "Uma homenagem ao choco frito de Setúbal: choco fresco picado à mão e envolvido na sua própria tinta, com limão e salsa.",
      "Sabor profundo e marinho, perfeito para grelhar e servir com uma gota de limão.",
    ],
    images: [choco, assado, tosta],
  },
  {
    slug: "polvo",
    name: "Chouriço de Polvo",
    short: "Polvo tenro com colorau. Para quem gosta de sabores fortes.",
    long: [
      "Polvo cozido lentamente e cortado em pedaços generosos, temperado com colorau, alho e louro.",
      "Um chouriço com caráter, que brilha numa tábua de petiscos com azeitonas e pão alentejano.",
    ],
    images: [polvo, assado, arroz],
  },
];

export const DISHES = [
  {
    name: "Arroz de Marisco com Chouriço de Atum",
    image: arroz,
    text: "Um arroz malandrinho com camarão, amêijoa e rodelas de chouriço de atum que dão fumo e profundidade ao caldo.",
  },
  {
    name: "Tostas de Chouriço com Tomate",
    image: tosta,
    text: "Pão rústico tostado, tomate picado, azeite e fatias grelhadas de chouriço. Petisco rápido para partilhar.",
  },
  {
    name: "Chouriço Assado no Barro",
    image: assado,
    text: "O clássico das tascas, à moda do mar: chouriço de choco ou polvo flamejado em aguardente no assador de barro.",
  },
];
