# Como estudar este protótipo

A proposta é começar pelo que já apareceu na disciplina: HTML, CSS, JavaScript e DOM. Não é necessário entender todos os arquivos na primeira leitura.

## 1. Entenda um link da Home

Abra `index.html` e procure `data-funcionalidade="conceitos"`. O card está dentro de uma tag `<a>`. O `href="pages/direitos-e-deveres.html"` aponta para outro documento da pasta. Não existe React Router nesta versão.

Exercício: altere somente a descrição desse card, salve e atualize o navegador. Depois clique nele e use o link “Início” para voltar.

## 2. Entenda a aparência

Abra `css/style.css` e localize `:root`. As variáveis guardam cores, largura e fontes compartilhadas. O layout dos cinco cards está em `.grade-funcionalidades`, dentro de `css/home.css`.

Exercício: descubra o que acontece quando o `gap` da grade passa de `18px` para `26px`. Teste a janela larga e estreita. Depois desfaça a mudança. Aprenda o efeito, não apenas o nome da propriedade.

## 3. Leia um acordeão completo

No HTML de `quem-faz-as-leis.html`, procure `processo-botao-0`. O botão tem `aria-controls="processo-resposta-0"`, que identifica o bloco de resposta. O conteúdo já está escrito no HTML.

No `js/main.js`, localize o comentário “2. ACORDEÕES”. A sequência é:

```text
querySelectorAll       encontra os botões
addEventListener       registra uma função para o clique
getElementById         encontra a resposta
hidden                 mostra ou esconde essa resposta
setAttribute           atualiza a informação aberto/fechado
classList.toggle       atualiza o destaque visual
```

`data-inicial-aberto` define qual item começa expandido quando o JavaScript é ativado. Sem JavaScript, as explicações ficam visíveis para leitura.

Exercício: identifique por que um segundo clique fecha a etapa que já estava aberta. Depois altere o grupo de `data-acordeao="unico"` para `data-acordeao="livre"` e compare o comportamento.

## 4. Leia os dados de uma pergunta

Abra `js/perguntas.js`. Cada objeto contém `enunciado`, `alternativas`, `correta` e `explicacao`. `correta` é um índice que começa em zero.

Exercício: no primeiro objeto do quiz geral, veja por que `correta: 0` indica a primeira alternativa. Não mude apenas o índice; a explicação e as alternativas precisam permanecer coerentes.

## 5. Siga um clique no quiz

Abra `js/quiz.js`. Leia primeiro as variáveis `indiceAtual`, `pontos`, `respondeu` e `respostas`. Depois siga a função `registrarResposta`.

```text
clique em uma alternativa
    -> registrarResposta recebe seu índice
    -> o código bloqueia uma segunda resposta
    -> compara índiceEscolhido com pergunta.correta
    -> soma um ponto somente se acertou
    -> altera classes e disabled nos botões
    -> preenche a explicação com textContent
    -> mostra o bloco de feedback
```

Exercício: explique por que existe `if (respondeu) { return; }`. O que poderia acontecer com a pontuação sem essa verificação?

A função `mostrarPergunta` cria os botões com `document.createElement`. A função `mostrarResultado` monta a revisão. Ambas são manipulação de DOM, não componentes de uma biblioteca.

## 6. Entenda os três arquivos do mesmo recurso

| O que aparece | Onde está |
|---|---|
| Estrutura e posições dos elementos do quiz | `pages/quiz.html` |
| Cor de uma alternativa correta | `css/quiz.css`, `.is-correta` |
| Enunciados e respostas | `js/perguntas.js` |
| Comparação, pontuação e feedback | `js/quiz.js` |

Os scripts externos são carregados com `defer`, depois que o HTML foi analisado, e na ordem em que estão escritos. `perguntas.js` vem antes de `quiz.js` porque o segundo usa os dados do primeiro.

## Fontes técnicas para estudo

- DOM e eventos: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- Elemento script e defer: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script
- Atributo hidden: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden

## Um objetivo de aprendizagem

Antes de mexer no site inteiro, tente explicar um card, seu CSS e o clique que abre a explicação. Depois crie uma segunda pergunta simples com o mesmo mecanismo. Aprender por pequenas partes evita que os arquivos grandes pareçam uma única coisa impossível de entender.
