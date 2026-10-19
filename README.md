# Direitos & Deverdade

> Educação cívica e jurídica em linguagem simples, para quem quer entender seus direitos, seus deveres e como o país funciona.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-TypeScript-blue)
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

**Direitos & Deverdade** é uma aplicação web educacional que torna acessível o conhecimento sobre as leis brasileiras, os direitos e deveres dos cidadãos e as funções dos agentes e órgãos públicos. O conteúdo é apresentado de forma visual, objetiva e interativa, com exemplos do cotidiano no lugar do "juridiquês" e do "politiquês".

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
- Cards, acordeões e desafios interativos com feedback ao usuário
- Layout responsivo (computador, tablet e celular)
- Sem cadastro ou login, para reduzir barreiras de entrada

## Tecnologias utilizadas

| Categoria | Tecnologia |
|-----------|------------|
| Linguagem | TypeScript |
| Biblioteca de UI | React |
| Build e ambiente de desenvolvimento | Vite |
| Estilização | Tailwind CSS 3.4.17 (com PostCSS) |
| Rotas | React Router |
| Animações | Motion |
| Ícones | Lucide React |
| Ambiente e dependências | Node.js e npm |
| Gestão do projeto | Scrum e Kanban no Jira |
| Versionamento | Git e GitHub |

> **Nota:** o MVP é uma Single Page Application (SPA) 100% front-end. Não utiliza banco de dados, back-end, API nem autenticação nesta etapa.

## Estrutura do projeto

```
.
├── docs/        # Documentação (PDFs das entregas, wireframes, protótipos)
├── src/         # Código-fonte
│   ├── pages/       # Uma página por tema
│   ├── components/  # Componentes compartilhados (cabeçalho, animações, etc.)
│   └── App.tsx      # Definição das rotas
├── assets/      # Imagens, ícones, vídeos e logos
├── tests/       # Scripts de testes e validação
├── database/    # Scripts de banco e modelos ER (reservado para etapas futuras)
├── config/      # Arquivos de configuração (ESLint, Prettier, etc.)
├── scripts/     # Scripts auxiliares do projeto
├── README.md    # Explicação principal do projeto
├── .gitignore   # Arquivos e pastas ignorados (node_modules, .env, etc.)
└── LICENSE      # Licença do projeto
```

> Ajuste os nomes das subpastas de `src/` conforme a organização real do repositório.

## Como executar

**Pré-requisito:** [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone <URL-DO-REPOSITORIO>

# 2. Entre na pasta do projeto
cd <NOME-DA-PASTA>

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Depois, acesse o endereço exibido no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
```

## Organização do trabalho

O desenvolvimento segue **Scrum** (prioridades e ciclos de entrega) combinado com **Kanban** (visualização do andamento das tarefas), com quadro no Jira. Estados das tarefas: **A Fazer → Em Andamento → Concluído**.

Planejamento das sprints:

| Sprint | Foco |
|--------|------|
| 1 | Estrutura do projeto, identidade visual e rotas |
| 2 | Implementação das páginas de conteúdo |
| 3 | Interações, quiz e responsividade |
| 4 | Testes, revisão textual, acessibilidade, correções e preparação da entrega |

### Convenções de Git (sugestão)

- Branch principal: `main` (sempre estável)
- Uma branch por tarefa, nomeada com o código do Jira, por exemplo `feature/JV-6-quem-somos-html`
- Commits curtos e no imperativo, por exemplo `Adiciona página Quem faz as leis`
- Pull Request revisado por pelo menos um integrante antes do merge

## Roadmap

- [x] Estrutura da aplicação, rotas e identidade visual
- [x] Páginas temáticas com componentes interativos
- [ ] Quiz gamificado por tema de lei, com pontuação instantânea
- [ ] Pergunta do dia, selecionada automaticamente pela data
- [ ] Persistência local de progresso, pontuação e sequência de dias
- [ ] Busca e filtro de conteúdos por tema ou palavra-chave
- [ ] Revisão de responsividade e acessibilidade
- [ ] Publicação de uma versão demonstrável (GitHub Pages ou Vercel)

**Evoluções futuras:**

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
