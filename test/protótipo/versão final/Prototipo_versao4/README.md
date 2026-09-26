# Direitos e Deverdade

## Versão independente em HTML, CSS e JavaScript puro

Esta versão migra a Home e as cinco páginas de aprendizagem do protótipo para arquivos estáticos. Não é um pacote de correção do projeto React e não depende dele. Não contém React, TypeScript, JSX, Tailwind, Motion, Lucide, Vite, Node.js, npm, gerador de páginas ou gerenciador de pacotes para execução.

## Abrir o site

Extraia o ZIP completo e abra **`index.html`** no navegador. A Home é a página inicial, com apresentação, cinco cards, seção sobre o projeto e perguntas expansíveis. A pasta precisa permanecer inteira.

Não é preciso rodar comando algum. O VS Code é apenas um editor opcional. Para compartilhar, envie a pasta inteira em ZIP. Para editar, abra a pasta no editor, salve as mudanças e atualize a página no navegador.

Não use o endereço do antigo Vite (`localhost:5173`) para verificar esta versão. O novo site abre em um endereço de arquivo local, começando por `file:///`. Uma hospedagem estática também pode servir estes mesmos arquivos, mas não é necessária para usar o protótipo localmente.

## Estrutura

```text
index.html                         Home / apresentação e cinco cards
pages/
    direitos-e-deveres.html         Conceitos e exercício Direito ou dever
    conheca-as-leis.html            Seletor de seis áreas e exercício
    quem-faz-as-leis.html           Instituições, acordeão e exercício
    como-usar-seus-direitos.html    Caminhos de orientação por etapas
    quiz.html                      Quiz geral com quatro perguntas
css/
    style.css                      Base, cores, tipografia e componentes comuns
    home.css                       Composição da Home e dos cinco cards
    quiz.css                       Alternativas, feedback e resultado
js/
    main.js                        Menu mobile e acordeões
    explorador.js                  Seleção de áreas usando o DOM
    caminhos.js                    Passos de orientação
    perguntas.js                   Arrays de perguntas e respostas esperadas
    quiz.js                        Motor de quiz compartilhado entre páginas
assets/
    favicon.svg                    Ícone simples do projeto
    imagens/previa-processo.webp    Prévia renderizada desta versão HTML
LEIA-ME-PRIMEIRO.txt                Instruções de abertura
README.md                          Este arquivo
docs/
    COMO-ENTENDER-O-CODIGO.md       Roteiro de leitura e exercícios
    MIGRACAO-E-FONTES.md            Origem do conteúdo e mudanças explícitas
    TESTES.md                      Testes realizados e limitações
```

## O que está funcionando

A navegação utiliza links HTML (`<a href="...">`). Cada destino é um arquivo real. A marca do cabeçalho e o link “Início” levam de volta à Home. Não há roteador, redirecionamento para uma subpágina ou conteúdo bloqueado por progresso.

O menu móvel abre e fecha, aceita Escape e devolve o foco ao botão. Os acordeões mostram e ocultam respostas já presentes no HTML. O explorador exibe os exemplos de uma área escolhida. Os caminhos de orientação permitem avançar, voltar, concluir, recomeçar e trocar de situação.

Os exercícios permitem uma resposta por questão, mostram a alternativa correta e a explicação, calculam a pontuação, oferecem revisão e reinício. Há quatro bancos: conceitos (4 perguntas), áreas (4), instituições (3) e quiz geral (4). As perguntas retomam o protótipo existente.

## Como HTML, CSS e JS foram separados

O HTML contém a estrutura, os links e os textos didáticos. O CSS contém a aparência e as regras de responsividade. O JavaScript usa o DOM para ouvir eventos e alterar `textContent`, `hidden`, `disabled`, atributos e classes.

Não há páginas inteiras escondidas em strings de JavaScript. A exceção intencional são as perguntas: os dados ficam em `perguntas.js`, e `quiz.js` cria os botões e a revisão com `document.createElement`. Isso evita repetir a lógica de pontuação em quatro lugares.

O cabeçalho e o rodapé estão escritos em cada HTML. Em um site estático pequeno, essa repetição torna o conteúdo independente de carregamentos por JavaScript. Se alterar o menu, mantenha o bloco correspondente igual nas seis páginas. Os CSS e os scripts comuns continuam compartilhados.

## Design e funcionamento sem rede

A paleta escura e verde foi mantida. A fonte serifada usa Georgia/Times New Roman, e o texto usa Segoe UI/Arial, conforme as fontes disponíveis no computador. Não foram incluídos arquivos de fontes nem chamadas ao Google Fonts. O resultado preserva a direção visual, não é uma cópia pixel a pixel da versão Playfair/DM Sans.

Os ícones são pequenos desenhos SVG no HTML, sem bibliotecas. A prévia da Home é um recurso local. Não há CDN, download automático de imagens, `fetch`, importação de módulos JavaScript nem consulta a API externa.

Os links de referência no fim das páginas abrem fontes oficiais na Internet; isso não é necessário para abrir os conteúdos ou usar as interações. O DOM é uma API nativa do navegador — “sem API externa” não significa “sem usar os recursos do navegador”.

## Escopo e cuidados

Projeto acadêmico educacional. Não é um serviço de atendimento jurídico e não recebe denúncias. Contato e redes sociais continuam como campos de futura definição pela equipe. Não há cadastro, back-end, banco de dados, analytics ou armazenamento de respostas. O progresso é local à página atual e reinicia quando ela é recarregada.

Os textos principais foram preservados das páginas existentes. Notas novas de contexto, segurança e procedência estão identificadas e descritas em `docs/MIGRACAO-E-FONTES.md`. O grupo deve revisar o conteúdo didático antes da publicação.

Se a apresentação e o relatório acadêmico forem entregues junto desta versão, atualize a seção técnica: agora a implementação é HTML, CSS e JavaScript com manipulação direta do DOM, não React/Vite. Não é necessário apagar o histórico da versão anterior.
