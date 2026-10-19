# Direitos & Deverdade

> Educação cívica e jurídica em linguagem simples, para quem quer entender seus direitos, seus deveres e como o país funciona.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Licença](https://img.shields.io/badge/licen%C3%A7a-a%20definir-lightgrey)

Projeto Integrador da disciplina **PI: Desenvolvimento de Sistemas Web** (código 218040) da **PUC-Campinas**, desenvolvido pelo grupo **Javacessíveis** (Turma 102).

---

## Sumário

- [Descrição](#descrição)
- [Problema e público-alvo](#problema-e-público-alvo)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Organização do trabalho](#organização-do-trabalho)
- [Roadmap](#roadmap)
- [Integrantes](#integrantes)
- [Status do projeto](#status-do-projeto)
- [Licença](#licença)

---

## Descrição

**Direitos & Deverdade** é um site educacional que torna acessível o conhecimento sobre as leis brasileiras, os direitos e deveres dos cidadãos e as funções dos agentes e órgãos públicos. O conteúdo é apresentado de forma visual, objetiva e interativa, com exemplos do cotidiano no lugar do "juridiquês" e do "politiquês".

O projeto tem caráter **social, gratuito e não partidário**, com foco na **sociedade brasileira**.

## Problema e público-alvo

**Problema:** apesar do acesso formal à informação, grande parte da população brasileira enfrenta analfabetismo jurídico e político, agravado pela linguagem técnica de leis, decisões e materiais institucionais. As consequências são vulnerabilidade diante de abusos, baixa compreensão do papel das instituições e voto pouco informado.

**Público-alvo:** jovens a partir de 16 anos (idade mínima do voto facultativo) e adultos aptos a votar, com ênfase em pessoas com pouco acesso prévio à educação jurídica e política formal. Também pode ser usado por escolas de ensino médio, cursinhos, projetos sociais e ONGs de educação cívica.

**Alinhamento com os ODS:**

| ODS | Tema |
|-----|------|
| 4 | Educação de Qualidade |
| 10 | Redução das Desigualdades |
| 16 | Paz, Justiça e Instituições Fortes |

**Setor da sociedade:** Terceiro Setor (iniciativa sem fins lucrativos). **Tipo de impacto:** social. **Valor principal:** educação.

## Funcionalidades

Páginas do MVP:

- **Página Inicial:** apresentação do projeto e escolha de tema
- **Direitos e Deveres:** diferença entre os dois conceitos, com atividade interativa
- **Conheça as Leis:** áreas temáticas e finalidades das normas
- **Quem faz as leis?:** participantes e etapas do processo legislativo, em itens expansíveis
- **Como usar seus direitos:** orientações e situações práticas sobre o que fazer se seus direitos forem feridos

Recursos do sistema:

- Navegação por menu superior e botões de continuidade
- Cards, itens expansíveis e desafios interativos com feedback ao usuário
- Layout responsivo (computador, tablet e celular)
- Sem cadastro ou login, para reduzir barreiras de entrada

## Tecnologias utilizadas

O projeto é um site **front-end simples**, com arquivos separados por responsabilidade:

| Tecnologia | Uso | Arquivos |
|------------|-----|----------|
| **HTML5** | Estrutura e conteúdo das páginas | `.html` |
| **CSS3** | Identidade visual e responsividade | `.css` |
| **JavaScript** | Interações, quizzes, navegação dinâmica e dados locais | `.js` |

Ferramentas de apoio: **Git e GitHub** (versionamento) e **Jira** (Scrum e Kanban).

> **Nota:** o MVP roda direto no navegador, a partir de arquivos locais. Não utiliza banco de dados, back-end, API, autenticação, frameworks, ferramentas de build nem hospedagem.

## Estrutura do projeto

```
.
├── docs/        # Documentação (PDFs das entregas, wireframes, protótipos)
├── src/         # Código-fonte do site
│   ├── index.html                   # Página Inicial
│   ├── pages/                       # Demais páginas (um arquivo .html por tema)
│   │   ├── direitos-e-deveres.html
│   │   ├── conheca-as-leis.html
│   │   ├── quem-faz-as-leis.html
│   │   └── como-usar-seus-direitos.html
│   ├── css/                         # Estilos
│   │   └── style.css
│   └── js/                          # Scripts
│       └── main.js
├── assets/      # Imagens, ícones, vídeos e logos
├── tests/       # Roteiros de testes e validação
├── database/    # Reservado para etapas futuras (não usado no MVP)
├── config/      # Arquivos de configuração (opcional)
├── scripts/     # Scripts auxiliares do projeto
├── README.md    # Explicação principal do projeto
├── .gitignore   # Arquivos e pastas ignorados
└── LICENSE      # Licença do projeto
```

> Ajuste os nomes de arquivos e subpastas de `src/` conforme a organização real do repositório.

## Como executar

Não é necessário instalar nada nem hospedar o site: o projeto é entregue como arquivos locais, que podem ser abertos diretamente no navegador ou publicados por quem for avaliar.

```bash
# 1. Clone o repositório
git clone <URL-DO-REPOSITORIO>

# 2. Entre na pasta do projeto
cd <NOME-DA-PASTA>
```

Depois, abra o arquivo `src/index.html` no navegador (clique duas vezes ou arraste para a janela do navegador).

**Dica:** no VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração. Clique com o botão direito em `index.html` e escolha *Open with Live Server*.

## Organização do trabalho

O desenvolvimento segue **Scrum** (prioridades e ciclos de entrega) combinado com **Kanban** (visualização do andamento das tarefas), com quadro no Jira. Estados das tarefas: **A Fazer → Em Andamento → Concluído**.

Planejamento das sprints:

| Sprint | Foco |
|--------|------|
| 1 | Estrutura do projeto, identidade visual e navegação entre páginas |
| 2 | Implementação das páginas de conteúdo (HTML e CSS) |
| 3 | Interações em JavaScript, quiz e responsividade |
| 4 | Testes, revisão textual, acessibilidade, correções e preparação da entrega |

### Convenções de Git (sugestão)

- Branch principal: `main` (sempre estável)
- Uma branch por tarefa, nomeada com o código do Jira, por exemplo `feature/JV-6-quem-somos-html`
- Commits curtos e no imperativo, por exemplo `Adiciona página Quem faz as leis`
- Pull Request revisado por pelo menos um integrante antes do merge

## Roadmap

- [x] Estrutura do site, navegação e identidade visual
- [x] Páginas temáticas com componentes interativos
- [ ] Quiz gamificado por tema de lei, com pontuação instantânea
- [ ] Pergunta do dia, selecionada automaticamente pela data
- [ ] Persistência local de progresso, pontuação e sequência de dias
- [ ] Busca e filtro de conteúdos por tema ou palavra-chave
- [ ] Revisão de responsividade e acessibilidade
- [ ] Revisão da semântica das tags HTML (`header`, `nav`, `main`, `section`, `footer`, etc.)
- [ ] Entrega dos arquivos locais ao professor

**Evoluções futuras (próximos semestres):**

- Login e perfil de usuário, com avatar e conexão com outros usuários
- Banco de dados para histórico de quizzes, pontuação e acertos/erros
- Consumo de APIs externas para atualização de conteúdos
- Versão mobile, com modo offline e notificações push

## Integrantes

| Nome | RA | Responsabilidade |
|------|----|------------------|
| Isadora Souza Lima Zanni | 26011635 | Front-end |
| Raphael Tose Coelho | 26008198 | Front-end |
| Lorena Marques Oliveira | 26894972 | Back-end |
| Pedro Andrade de Figueiredo | 26010179 | Design e Documentação |
| Yann Coelho Amaro | 26021255 | Design e Documentação |

**Professor:** Fernando Luiz de Almeida Silveira

## Status do projeto

🚧 **Em desenvolvimento**

Primeira versão estimada para: **dezembro de 2026**

## Licença

Licença a definir. Adicione o arquivo `LICENSE` na raiz do repositório (por exemplo, MIT) e atualize esta seção.
