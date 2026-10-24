ÉPÊXE — Chouriços de Peixe de Setúbal

Website desenvolvido com React, TanStack Start, Vite e Tailwind CSS.

🌐 Website publicado

GitHub Pages:
https://danielmacau60004.github.io/setubal-fish-chorizo-animations/

Repositório:
https://github.com/DanielMacau60004/setubal-fish-chorizo-animations

🚀 Como publicar alterações

A publicação é feita automaticamente através do GitHub Actions.

1. Alterar o projeto

Faz as alterações necessárias ao código na tua cópia local do projeto.

2. Testar localmente (opcional)

Instala as dependências, se necessário:

bash
npm install


Inicia o servidor de desenvolvimento:

bash
npm run dev


Abre o endereço local indicado no terminal para verificar as alterações.

3. Gerar e publicar a nova versão

Guarda as alterações e envia-as para a branch main do GitHub:

bash
git add .
git commit -m "Atualiza website"
git push origin main


O GitHub Actions irá automaticamente:

Obter o código atualizado.
Instalar as dependências com npm ci.
Executar npm run build.
Preparar os ficheiros estáticos para publicação.
Publicar o website no GitHub Pages.

Não é necessário executar manualmente o processo de publicação no computador.

4. Confirmar a publicação
Abre o separador Actions no repositório GitHub.
Seleciona a execução mais recente do workflow Deploy to GitHub Pages.
Aguarda que os trabalhos de build e deploy terminem com sucesso.
Abre o website publicado:

https://danielmacau60004.github.io/setubal-fish-chorizo-animations/

Se não vires as alterações imediatamente, atualiza a página com Ctrl + F5 ou aguarda alguns minutos.

⚙️ Configuração do GitHub Pages

O repositório utiliza GitHub Actions para publicar o website.

No GitHub, a configuração encontra-se em:

Settings → Pages → Build and deployment

A origem de publicação deve estar definida como GitHub Actions.

O workflow está localizado em:

text
.github/
└── workflows/
    └── deploy.yml


Não apagues nem alteres este ficheiro sem verificar como funciona o processo de build e publicação.

🛠️ Configuração do Vite

O website é publicado num subdiretório do domínio GitHub Pages. Por isso, o caminho base deve corresponder ao nome do repositório:

text
/setubal-fish-chorizo-animations/


A configuração encontra-se em vite.config.ts.

Se o nome do repositório mudar, será necessário rever esta configuração e o workflow de publicação.

📁 Ficheiros importantes
Ficheiro ou pasta	Função
src/	Código da aplicação e componentes React
src/routes/	Páginas e rotas do website
public/	Recursos estáticos do projeto, se utilizados
vite.config.ts	Configuração do Vite e TanStack Start
package.json	Dependências e comandos do projeto
package-lock.json	Versões bloqueadas das dependências npm
.github/workflows/deploy.yml	Build e publicação automática
.output/public/	Ficheiros públicos gerados pelo build local

A pasta .output/ é gerada durante o build. Não edites manualmente os ficheiros gerados: as alterações devem ser feitas no código-fonte.

🐛 Resolução de problemas
O deploy falhou
Abre GitHub → Actions.
Seleciona a execução que falhou.
Consulta o primeiro passo que apresenta um erro.
Corrige o problema no código ou na configuração e volta a fazer git push.
O website apresenta erro 404
Confirma que o workflow terminou com sucesso.
Verifica se o GitHub Pages está configurado para utilizar GitHub Actions.
Confirma que o endereço do website corresponde ao nome do repositório.
O CSS ou JavaScript não carrega
Confirma que vite.config.ts mantém o caminho base correto.
Verifica se o workflow está a publicar a pasta que contém index.html e a pasta assets.
Abre as ferramentas de programador do browser (F12) e consulta o separador Network para identificar pedidos que devolvem 404.

Não alteres manualmente os caminhos dos ficheiros CSS ou JavaScript no HTML gerado. Corrige a configuração de build ou publicação para que os caminhos sejam gerados automaticamente.

O website continua igual após o deploy
Confirma que a execução mais recente do GitHub Actions terminou com sucesso.
Atualiza a página com Ctrl + F5.
Aguarda alguns minutos para a publicação ficar disponível.
💻 Comandos úteis
bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Verificar problemas de lint
npm run lint

# Enviar alterações para o GitHub
git add .
git commit -m "Atualiza website"
git push origin main

📌 Notas importantes
O alojamento é feito através do GitHub Pages.
O processo de publicação depende do workflow em .github/workflows/deploy.yml.
O GitHub Pages serve conteúdo estático; funcionalidades que dependam de um servidor ou de APIs privadas precisam de alojamento compatível.
Mantém o package-lock.json atualizado quando alterares dependências.
Não guardes tokens, passwords, chaves privadas ou outras credenciais no repositório.

Projeto: ÉPÊXE — Chouriços de Peixe de Setúbal
Alojamento: GitHub Pages
Deploy: GitHub Actions
Framework: React + TanStack Start + Vite + Tailwind CSS