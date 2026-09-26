# Migração e procedência do conteúdo

## Base utilizada

Esta versão foi montada a partir dos arquivos efetivamente disponíveis na conversa, não do diagnóstico antigo que mostrava a Home ausente.

| Origem | Conteúdo reaproveitado |
|---|---|
| `Correcao_Home_Verificada.zip` / `Home.tsx` | Título da Home, cinco cards, apresentação do grupo, navegação livre e perguntas frequentes. |
| `outras-abas-direitos-e-deverdade.zip` | Conceitos e situações de Direitos e Deveres; seis áreas e quatro exercícios de Conheça as Leis; três caminhos de orientação e rede de proteção. |
| `QuemFazAsLeis.tsx` atualizado | Participantes, cinco etapas do processo, seção criar/executar/aplicar e três situações de revisão. |
| `direitos-e-deverdade-atual.zip` / `Quiz.tsx` | Quatro perguntas do quiz geral. As explicações foram retomadas do roteiro já trabalhado na conversa para as mesmas perguntas. |

Não há equivalência garantida com alterações que o grupo tenha feito no computador depois de enviar esses arquivos.

## Mudanças técnicas e editoriais explícitas

- As rotas React viraram seis documentos HTML conectados por links relativos. A Home é `index.html`.
- Componentes e estado React viraram elementos existentes no HTML, variáveis e funções que manipulam o DOM.
- Os enunciados do exercício ficam em um banco compartilhado de JavaScript. Não foram criados novos temas ou páginas de macroárea além do conteúdo disponível.
- Feedback de erro foi reescrito para não dizer “Isso!” nem sugerir uma nova tentativa na mesma questão depois de os botões estarem bloqueados. A resposta correta e a explicação ficam visíveis, e é possível refazer ao final.
- Os exercícios de cada tema agora terminam com resultado, revisão e botão de reiniciar, em lugar de reiniciar silenciosamente após a última situação.
- A página de orientação permite voltar um passo e reiniciar o caminho. Isso é uma melhoria de navegação, não um novo procedimento jurídico.
- Foram preservados os temas e textos centrais. A seção institucional ganhou uma nota identificada sobre a esfera federal e a natureza didática do esquema; a sociedade não é tratada como um quarto poder.
- A página de orientação ganhou uma nota identificada de segurança e privacidade, com fonte oficial para distinguir denúncia de atendimento emergencial. Esses avisos não eram parte integral do texto original.
- Foram incluídos blocos recolhíveis de referências para consulta e revisão do grupo. Eles não significam revisão jurídica profissional do material.
- As fontes usam famílias disponíveis no sistema, em lugar de Google Fonts, para não depender de rede. O visual é uma adaptação, não uma reprodução pixel a pixel.
- A imagem usada pela Home foi substituída por uma renderização da seção correspondente desta versão HTML.
- Os ícones são SVGs simples escritos no HTML, sem arquivos de fonte ou biblioteca de ícones.

## Referências oficiais consultadas em 26/09/2026

Constituição Federal — direitos fundamentais e organização dos poderes:
https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm

Câmara dos Deputados — entenda o processo legislativo:
https://www.camara.leg.br/entenda-o-processo-legislativo/

Governo Federal — denunciar violação de direitos humanos / Disque 100:
https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos

MDHC / Agência Gov — Disque 100, dúvidas e distinção de situações emergenciais:
https://agenciagov.ebc.com.br/noticias/202608/disque-100-a-denuncia-pode-ser-anonima-tire-suas-principais-duvidas

## Limite de finalidade

O site é um protótipo acadêmico de educação cidadã. Não foi transformado em serviço de aconselhamento individual. Informações de atendimento devem ser revistas periodicamente nas fontes oficiais. Estatísticas, eficácia pedagógica e resultados de testes com estudantes não foram inventados nem adicionados.
