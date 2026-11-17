"use strict";

// Gabarito e referências locais: nenhuma resposta é enviada pela internet.
const gabarito = [
    {
        "resposta": 0,
        "explicacao": "A Constituição, no artigo 14, § 1º, prevê voto e alistamento facultativos para jovens de 16 e 17 anos.",
        "link": "leis/constituicao.html",
        "lei": "Constituição Federal"
    },
    {
        "resposta": 1,
        "explicacao": "O artigo 53 do ECA reconhece o direito de contestar critérios avaliativos e recorrer às instâncias escolares superiores.",
        "link": "leis/eca.html",
        "lei": "Estatuto da Criança e do Adolescente"
    },
    {
        "resposta": 2,
        "explicacao": "A intimidação sistemática é caracterizada pela intenção e repetição. Outras formas de agressão também merecem acolhimento e atenção.",
        "link": "leis/bullying.html",
        "lei": "Proteção contra o bullying"
    },
    {
        "resposta": 1,
        "explicacao": "O artigo 7º prevê proteção de privacidade e dados por padrão, desde a concepção dos produtos e serviços abrangidos.",
        "link": "leis/eca-digital.html",
        "lei": "ECA Digital"
    },
    {
        "resposta": 0,
        "explicacao": "O artigo 49 trata das contratações fora do estabelecimento comercial. Seu prazo é contado da assinatura ou do recebimento do produto ou serviço.",
        "link": "leis/consumidor.html",
        "lei": "Código de Defesa do Consumidor"
    },
    {
        "resposta": 2,
        "explicacao": "O artigo 28, § 1º, da LBI proíbe a cobrança adicional pelas medidas de inclusão nele previstas.",
        "link": "leis/inclusao.html",
        "lei": "Lei Brasileira de Inclusão"
    },
    {
        "resposta": 1,
        "explicacao": "Ofensas raciais são graves. Ofereça apoio, preserve registros com cuidado e procure um adulto de confiança e os serviços competentes.",
        "link": "leis/combate-ao-racismo.html",
        "lei": "Combate ao racismo"
    },
    {
        "resposta": 2,
        "explicacao": "O artigo 7º reconhece essas cinco formas de violência. Buscar orientação não exige esperar uma agressão física.",
        "link": "leis/maria-da-penha.html",
        "lei": "Lei Maria da Penha"
    }
];

const formularioQuiz = document.getElementById("formulario-quiz");
const botaoCorrigir = document.getElementById("corrigir-quiz");
const botaoReiniciar = document.getElementById("reiniciar-quiz");
const statusQuiz = document.getElementById("quiz-status");
const resultadoQuiz = document.getElementById("quiz-resultado");
const pontuacaoQuiz = document.getElementById("quiz-pontuacao");
const mensagemQuiz = document.getElementById("quiz-mensagem");
let quizCorrigido = false;

// Conta as perguntas respondidas sem corrigir antes da hora.
function atualizarProgresso() {
    if (quizCorrigido) {
        return;
    }

    const respondidas = formularioQuiz.querySelectorAll('input[type="radio"]:checked').length;
    statusQuiz.textContent = respondidas + " de " + gabarito.length + " perguntas respondidas.";
    statusQuiz.classList.remove("tem-aviso");
}

function corrigirQuiz(evento) {
    evento.preventDefault();
    if (quizCorrigido) {
        return;
    }

    let primeiraSemResposta = null;
    let faltam = 0;

    // Primeiro, verifica se todas as perguntas foram respondidas.
    gabarito.forEach(function (item, indice) {
        const numero = indice + 1;
        const questao = document.getElementById("questao-" + numero);
        const selecionada = formularioQuiz.querySelector('input[name="questao-' + numero + '"]:checked');
        questao.classList.toggle("sem-resposta", !selecionada);
        if (!selecionada) {
            faltam += 1;
            if (!primeiraSemResposta) {
                primeiraSemResposta = questao.querySelector("input");
            }
        }
    });

    if (faltam > 0) {
        statusQuiz.textContent = "Faltam " + faltam + " pergunta(s). Marque uma alternativa em cada uma antes de conferir.";
        statusQuiz.classList.add("tem-aviso");
        primeiraSemResposta.focus();
        return;
    }

    // Depois, corrige e monta uma explicação para cada pergunta.
    let acertos = 0;
    gabarito.forEach(function (item, indice) {
        const numero = indice + 1;
        const selecionada = formularioQuiz.querySelector('input[name="questao-' + numero + '"]:checked');
        const acertou = Number(selecionada.value) === item.resposta;
        const feedback = document.getElementById("feedback-" + numero);
        const alternativaCorreta = document.getElementById("questao-" + numero + "-opcao-" + item.resposta);
        const titulo = document.createElement("strong");
        const resposta = document.createElement("p");
        const explicacao = document.createElement("p");
        const link = document.createElement("a");

        if (acertou) {
            acertos += 1;
        }
        titulo.textContent = acertou ? "Você acertou!" : "Vamos entender essa resposta.";
        resposta.textContent = "Resposta correta: " + alternativaCorreta.nextElementSibling.textContent;
        explicacao.textContent = item.explicacao;
        link.textContent = "Revisar: " + item.lei + " →";
        link.href = item.link;

        feedback.textContent = "";
        feedback.append(titulo, resposta, explicacao, link);
        feedback.classList.toggle("resposta-incorreta", !acertou);
        feedback.hidden = false;
    });

    quizCorrigido = true;
    formularioQuiz.querySelectorAll('input[type="radio"]').forEach(function (campo) {
        campo.disabled = true;
    });
    botaoCorrigir.disabled = true;
    statusQuiz.classList.remove("tem-aviso");
    statusQuiz.textContent = "Quiz corrigido. As explicações estão abaixo de cada pergunta.";
    pontuacaoQuiz.textContent = acertos + " de " + gabarito.length + " acertos";
    if (acertos === gabarito.length) {
        mensagemQuiz.textContent = "Você conectou todas as ideias! Continue explorando as fontes e leve essas perguntas para as conversas do dia a dia.";
    } else if (acertos >= 5) {
        mensagemQuiz.textContent = "Você já reconhece muitas dessas situações. Revise as explicações e explore os temas que ainda despertam dúvidas.";
    } else {
        mensagemQuiz.textContent = "Este é um ponto de partida. Leia as explicações, visite as páginas indicadas e tente de novo quando quiser.";
    }
    resultadoQuiz.hidden = false;
    resultadoQuiz.focus();
}

function reiniciarQuiz() {
    formularioQuiz.reset();
    quizCorrigido = false;
    formularioQuiz.querySelectorAll('input[type="radio"]').forEach(function (campo) {
        campo.disabled = false;
    });
    formularioQuiz.querySelectorAll(".quiz-questao").forEach(function (questao) {
        questao.classList.remove("sem-resposta");
    });
    formularioQuiz.querySelectorAll(".quiz-feedback").forEach(function (feedback) {
        feedback.hidden = true;
        feedback.textContent = "";
        feedback.classList.remove("resposta-incorreta");
    });
    botaoCorrigir.disabled = false;
    resultadoQuiz.hidden = true;
    atualizarProgresso();
    formularioQuiz.querySelector("input").focus();
}

if (formularioQuiz) {
    formularioQuiz.hidden = false;
    atualizarProgresso();
    formularioQuiz.addEventListener("change", function (evento) {
        evento.target.closest(".quiz-questao").classList.remove("sem-resposta");
        atualizarProgresso();
    });
    formularioQuiz.addEventListener("submit", corrigirQuiz);
    botaoReiniciar.addEventListener("click", reiniciarQuiz);
}
