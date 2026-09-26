# Testes desta versão

## Ambiente e limite importante

Verificação em Chromium, no Linux, em 26/09/2026. O navegador disponível neste ambiente bloqueia navegação para `file://` e localhost. Por isso, os testes de renderização e comportamento carregaram o mesmo HTML, CSS e JavaScript em uma página local de teste (`about:blank`), sem modificar os arquivos entregues. Os links foram verificados diretamente contra os arquivos e âncoras da pasta.

Isso testa a lógica e o layout, mas **não equivale a testar a abertura por duplo clique no seu Windows**. A entrega foi escrita para esse uso: scripts clássicos, caminhos relativos, nenhum `fetch`, nenhum módulo JS, nenhuma dependência remota ou etapa de build.

## Resultado observado

- 40 verificações de renderização e comportamento concluídas.
- 6 páginas HTML, 124 links locais e 34 referências de recursos verificadas.
- JavaScript sem erros de sintaxe detectados; nenhum erro de execução observado nas interações testadas.
- Nenhuma requisição a recursos remotos durante os testes.
- Larguras verificadas: 320, 390, 768, 1024 e 1440 pixels; sem rolagem horizontal de página detectada.
- Menus, acordeões, seletor de seis áreas, três caminhos de orientação e quatro bancos de perguntas exercitados.
- Nos quizzes, testadas todas as respostas corretas, todas as incorretas, tentativa de clique repetido, pontuação, progresso, revisão e reinício.
- Testados Escape no menu, retorno de foco ao botão e abertura/fechamento do acordeão por Enter.
- Verificada a leitura básica sem JavaScript: textos didáticos e navegação disponíveis.

## O que não foi certificado

Não foi feita auditoria completa WCAG, avaliação pedagógica, revisão jurídica profissional, teste de leitores de tela ou teste em todos os navegadores e dispositivos. Não foram criadas métricas de satisfação ou aprendizagem.

## Checklist no computador do grupo

- [ ] Extrair o ZIP e abrir `index.html` fora do arquivo compactado.
- [ ] Confirmar que a primeira tela tem cinco cards.
- [ ] Clicar em cada card e voltar pelo link “Início”.
- [ ] Abrir e fechar duas etapas em “Quem faz as leis?”.
- [ ] Trocar a área em “Conheça as Leis”.
- [ ] Avançar, voltar e reiniciar um caminho em “Como usar seus direitos”.
- [ ] Responder o quiz, conferir a pontuação e refazer.
- [ ] Diminuir a janela e testar o menu compacto.
- [ ] Testar no navegador que será usado na apresentação.
- [ ] Conferir os contatos e revisar os textos antes de publicar.
