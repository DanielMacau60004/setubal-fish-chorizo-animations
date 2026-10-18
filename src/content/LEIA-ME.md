# Conteúdos ÉPÊXE

Esta pasta reúne as descrições e as imagens dos chouriços e pratos.

- `produtos/`: um ficheiro JSON por chouriço.
- `pratos/`: um ficheiro JSON por prato.
- `imagens/`: as fotografias referidas nos ficheiros JSON.

## Alterar um conteúdo

Abra o ficheiro do produto ou prato e altere apenas os valores entre aspas. Mantenha as aspas, vírgulas e parênteses retos. Guarde o ficheiro para atualizar o site; para atualizar o site público, volte a publicar.

### Campos dos chouriços

- `nome`: título apresentado no site.
- `resumo`: descrição curta no cartão e na página do produto.
- `descricao`: lista de parágrafos da descrição longa, um texto entre aspas por parágrafo.
- `imagens`: lista dos nomes das fotografias, pela ordem em que aparecem. A primeira aparece no cartão.
- `ordem`: posição na lista, do menor para o maior.
- `slug`: parte do endereço da página. Não altere nos produtos existentes para manter as ligações a funcionar.

### Campos dos pratos

- `nome`: título do prato.
- `descricao`: texto apresentado no cartão.
- `imagens`: lista de fotografias. Atualmente, o cartão do prato mostra apenas a primeira.
- `ordem`: posição na lista.
- `slug`: identificador único do prato.

## Trocar uma fotografia

Substitua a fotografia em `imagens/` mantendo o mesmo nome, ou coloque uma nova fotografia nessa pasta e escreva o nome exato (incluindo a extensão) em `imagens` no JSON. Pode usar JPG, JPEG, PNG, WebP, AVIF ou SVG; use extensões em minúsculas.

Imagens carregadas através do Lovable podem ter um ficheiro de referência terminado em `.asset.json`. Nesse caso, escreva no JSON apenas o nome original da fotografia, sem `.asset.json`.

## Adicionar um chouriço ou prato

Duplique um JSON da pasta correspondente, dê um novo nome ao ficheiro e preencha os campos. Escolha um `slug` único, sem espaços nem acentos, e coloque as fotografias em `imagens/`. O novo conteúdo é incluído automaticamente, sem alterar código.

Os produtos são salmão, choco e pescada. As fotografias dos produtos foram fornecidas pela empresa; o salmão tem duas fotografias. Os textos dos produtos são provisórios, sem informação técnica sobre ingredientes ou preparação. As fotografias dos pratos continuam a ser exemplos gerados e devem ser substituídas por fotografias reais.