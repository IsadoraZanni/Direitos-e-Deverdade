/* BANCO DE PERGUNTAS — dados, não elementos HTML.
   Mesmas situações dos arquivos do protótipo anterior.
   correta é o índice da alternativa: 0 = primeira, 1 = segunda etc.
   Para acrescentar uma pergunta, copie um objeto e revise a explicação.
   Os arquivos são carregados com defer; perguntas.js vem antes de quiz.js.
*/
"use strict";

const perguntasDoSite = {
    "direitos": [
        {
            "enunciado": "Ter acesso à educação e frequentar a escola.",
            "alternativas": [
                "É um direito",
                "É um dever"
            ],
            "correta": 0,
            "explicacao": "A educação é um direito fundamental e também envolve responsabilidades de diferentes atores da sociedade."
        },
        {
            "enunciado": "Respeitar o espaço e a liberdade das outras pessoas.",
            "alternativas": [
                "É um direito",
                "É um dever"
            ],
            "correta": 1,
            "explicacao": "Conviver em sociedade exige respeitar os direitos das outras pessoas."
        },
        {
            "enunciado": "Poder expressar uma opinião dentro dos limites da lei.",
            "alternativas": [
                "É um direito",
                "É um dever"
            ],
            "correta": 0,
            "explicacao": "A Constituição protege a liberdade de manifestação do pensamento, observados os limites legais."
        },
        {
            "enunciado": "Cuidar de espaços públicos que pertencem a toda a comunidade.",
            "alternativas": [
                "É um direito",
                "É um dever"
            ],
            "correta": 1,
            "explicacao": "O patrimônio e os espaços públicos são de uso coletivo e devem ser preservados."
        }
    ],
    "leis": [
        {
            "enunciado": "Uma pessoa comprou um produto e quer saber quais informações o fornecedor deve apresentar.",
            "alternativas": [
                "Saúde",
                "Educação",
                "Ambiental",
                "Consumidor",
                "Trabalhista",
                "Criminal"
            ],
            "correta": 3,
            "explicacao": "A situação foi associada à área de Consumidor. Regras que protegem consumidores e organizam relações de consumo."
        },
        {
            "enunciado": "Uma regra pretende proteger uma área natural contra danos ambientais.",
            "alternativas": [
                "Saúde",
                "Educação",
                "Ambiental",
                "Consumidor",
                "Trabalhista",
                "Criminal"
            ],
            "correta": 2,
            "explicacao": "A situação foi associada à área de Ambiental. Normas voltadas à proteção do meio ambiente e ao uso responsável dos recursos naturais."
        },
        {
            "enunciado": "Uma proposta trata de organização e políticas públicas de ensino.",
            "alternativas": [
                "Saúde",
                "Educação",
                "Ambiental",
                "Consumidor",
                "Trabalhista",
                "Criminal"
            ],
            "correta": 1,
            "explicacao": "A situação foi associada à área de Educação. Regras que organizam direitos, deveres e políticas relacionadas à educação."
        },
        {
            "enunciado": "Uma norma trata de uma conduta considerada crime e de sua consequência jurídica.",
            "alternativas": [
                "Saúde",
                "Educação",
                "Ambiental",
                "Consumidor",
                "Trabalhista",
                "Criminal"
            ],
            "correta": 5,
            "explicacao": "A situação foi associada à área de Criminal. Normas que definem crimes, consequências jurídicas e regras relacionadas à responsabilização penal."
        }
    ],
    "instituicoes": [
        {
            "enunciado": "Um projeto está sendo discutido e votado no Congresso. Quem está diretamente envolvido nessa etapa?",
            "alternativas": [
                "Poder Legislativo",
                "Poder Judiciário",
                "Somente a sociedade"
            ],
            "correta": 0,
            "explicacao": "A discussão e a votação de projetos de lei fazem parte do processo legislativo, exercido pelo Congresso Nacional."
        },
        {
            "enunciado": "Um projeto aprovado pelo Congresso chega ao Presidente da República. Qual possibilidade faz parte dessa etapa?",
            "alternativas": [
                "Sanção ou veto",
                "Nova eleição obrigatória",
                "Cancelamento automático"
            ],
            "correta": 0,
            "explicacao": "Depois da aprovação, o projeto pode seguir para sanção ou veto presidencial, de acordo com a Constituição."
        },
        {
            "enunciado": "Uma pessoa procura a Justiça para resolver um conflito concreto. Qual Poder exerce a função jurisdicional nesse caso?",
            "alternativas": [
                "Poder Executivo",
                "Poder Judiciário",
                "Poder Legislativo"
            ],
            "correta": 1,
            "explicacao": "O Judiciário atua na solução de conflitos e na aplicação do Direito aos casos submetidos à Justiça."
        }
    ],
    "geral": [
        {
            "enunciado": "Uma pessoa não conhece um direito seu. O que pode fazer primeiro?",
            "alternativas": [
                "Buscar informações confiáveis",
                "Ignorar o problema",
                "Compartilhar sem verificar"
            ],
            "correta": 0,
            "explicacao": "Buscar informações confiáveis é um bom ponto de partida para entender a situação."
        },
        {
            "enunciado": "Qual é uma das funções do Poder Legislativo?",
            "alternativas": [
                "Julgar conflitos",
                "Elaborar e discutir leis",
                "Executar todos os serviços"
            ],
            "correta": 1,
            "explicacao": "O Poder Legislativo possui, entre suas funções, a discussão e elaboração de leis."
        },
        {
            "enunciado": "Uma pessoa procura a Justiça para resolver um conflito. Qual poder atua?",
            "alternativas": [
                "Executivo",
                "Legislativo",
                "Judiciário"
            ],
            "correta": 2,
            "explicacao": "O Poder Judiciário atua na análise e julgamento de conflitos e casos concretos, dentro de suas competências."
        },
        {
            "enunciado": "Por que guardar documentos sobre um problema pode ser importante?",
            "alternativas": [
                "Elimina o problema",
                "Ajuda a registrar o que aconteceu",
                "Substitui orientação"
            ],
            "correta": 1,
            "explicacao": "Registros podem ajudar a explicar os fatos e acompanhar solicitações."
        }
    ]
};
