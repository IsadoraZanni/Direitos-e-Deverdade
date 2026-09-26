/* =============================================================
   QUIZ REUTILIZÁVEL — JavaScript puro / DOM
   1. Selecionar os elementos do HTML.
   2. Guardar o índice, as respostas e a pontuação em variáveis.
   3. Escutar cliques com addEventListener.
   4. Atualizar textContent, classes, hidden e disabled.

   Os enunciados estão em perguntas.js (carregado ANTES deste script).
   Não é uma avaliação oficial. Não há envio ou salvamento de respostas.
   ============================================================= */
"use strict";

const elementoQuiz = document.querySelector("[data-quiz]");

if (elementoQuiz && typeof perguntasDoSite !== "undefined") {
    const nomeDoBanco = elementoQuiz.dataset.quiz;
    const perguntas = perguntasDoSite[nomeDoBanco];

    if (!Array.isArray(perguntas) || perguntas.length === 0) {
        console.error("Banco de perguntas não encontrado:", nomeDoBanco);
    } else {
        iniciarQuiz(elementoQuiz, perguntas);
    }
}

function iniciarQuiz(quiz, perguntas) {
    const questaoPainel = quiz.querySelector("[data-questao-painel]");
    const titulo = quiz.querySelector("[data-enunciado]");
    const contador = quiz.querySelector("[data-contador]");
    const contadorRespondidas = quiz.querySelector("[data-respondidas]");
    const barra = quiz.querySelector("progress");
    const alternativas = quiz.querySelector("[data-alternativas]");
    const feedback = quiz.querySelector("[data-feedback]");
    const tituloFeedback = quiz.querySelector("[data-feedback-titulo]");
    const explicacao = quiz.querySelector("[data-explicacao]");
    const proximo = quiz.querySelector("[data-proxima]");
    const resultado = quiz.querySelector("[data-resultado]");
    const tituloResultado = quiz.querySelector("[data-resultado-titulo]");
    const pontosTexto = quiz.querySelector("[data-pontos]");
    const revisao = quiz.querySelector("[data-revisao]");
    const reiniciar = quiz.querySelector("[data-reiniciar]");

    // Valores em memória: voltam ao início se a página for recarregada.
    let indiceAtual = 0;
    let pontos = 0;
    let respondeu = false;
    let respostas = [];

    barra.max = perguntas.length;
    quiz.hidden = false;

    function atualizarProgresso() {
        const quantidade = respostas.length;
        contadorRespondidas.textContent = quantidade + " / " + perguntas.length + " respondidas";
        barra.value = quantidade;
    }

    function mostrarPergunta(moverFoco) {
        const pergunta = perguntas[indiceAtual];
        respondeu = false;
        feedback.hidden = true;
        resultado.hidden = true;
        questaoPainel.hidden = false;

        contador.textContent = "Situação " + (indiceAtual + 1) + " de " + perguntas.length;
        titulo.textContent = pergunta.enunciado;
        alternativas.replaceChildren();

        // Cria um botão HTML para cada alternativa do array.
        pergunta.alternativas.forEach(function (texto, indice) {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "quiz-alternativa";
            botao.setAttribute("aria-pressed", "false");

            const letra = document.createElement("span");
            letra.className = "quiz-letra";
            letra.textContent = String.fromCharCode(65 + indice);
            letra.setAttribute("aria-hidden", "true");

            const rotulo = document.createElement("span");
            rotulo.className = "quiz-texto";
            rotulo.textContent = texto;

            botao.append(letra, rotulo);
            alternativas.appendChild(botao);

            botao.addEventListener("click", function () {
                registrarResposta(indice);
            });
        });

        atualizarProgresso();

        if (moverFoco) {
            titulo.focus();
        }
    }

    function registrarResposta(indiceEscolhido) {
        // Evita somar duas vezes se houver cliques repetidos na mesma questão.
        if (respondeu) {
            return;
        }

        respondeu = true;
        const pergunta = perguntas[indiceAtual];
        const acertou = indiceEscolhido === pergunta.correta;
        respostas.push(indiceEscolhido);

        if (acertou) {
            pontos += 1;
        }

        alternativas.querySelectorAll("button").forEach(function (botao, indice) {
            botao.disabled = true;
            botao.setAttribute("aria-pressed", String(indice === indiceEscolhido));

            if (indice === pergunta.correta) {
                botao.classList.add("is-correta");
            } else if (indice === indiceEscolhido) {
                botao.classList.add("is-incorreta");
            }

            if (indice === pergunta.correta || indice === indiceEscolhido) {
                const marca = document.createElement("span");
                marca.className = "quiz-marca";
                marca.setAttribute("aria-hidden", "true");
                marca.textContent = indice === pergunta.correta ? "✓" : "×";
                botao.appendChild(marca);
            }
        });

        tituloFeedback.textContent = acertou
            ? "Resposta correta!"
            : "Vamos entender: a resposta é “" + pergunta.alternativas[pergunta.correta] + "”.";

        explicacao.textContent = pergunta.explicacao;
        feedback.classList.toggle("is-incorreto", !acertou);
        feedback.hidden = false;
        proximo.textContent = indiceAtual === perguntas.length - 1 ? "Ver meu resultado →" : "Próxima situação →";
        atualizarProgresso();

        // O foco permite acessar a explicação por teclado/leitor de tela.
        tituloFeedback.focus();
    }

    function mostrarResultado() {
        questaoPainel.hidden = true;
        resultado.hidden = false;
        pontosTexto.textContent = pontos + " / " + perguntas.length;
        revisao.replaceChildren();

        perguntas.forEach(function (pergunta, indice) {
            const escolhido = respostas[indice];
            const acertou = escolhido === pergunta.correta;
            const detalhes = document.createElement("details");
            const resumo = document.createElement("summary");
            const escolha = document.createElement("p");
            const certa = document.createElement("p");
            const explicacaoRevisao = document.createElement("p");

            resumo.textContent = (acertou ? "✓ Acertou — " : "Revisar — ") + pergunta.enunciado;
            escolha.textContent = "Sua escolha: " + pergunta.alternativas[escolhido];
            certa.textContent = "Resposta esperada: " + pergunta.alternativas[pergunta.correta];
            explicacaoRevisao.textContent = pergunta.explicacao;

            detalhes.append(resumo, escolha, certa, explicacaoRevisao);
            revisao.appendChild(detalhes);
        });

        tituloResultado.focus();
    }

    proximo.addEventListener("click", function () {
        if (!respondeu) {
            return;
        }

        if (indiceAtual === perguntas.length - 1) {
            mostrarResultado();
        } else {
            indiceAtual += 1;
            mostrarPergunta(true);
        }
    });

    reiniciar.addEventListener("click", function () {
        indiceAtual = 0;
        pontos = 0;
        respondeu = false;
        respostas = [];
        mostrarPergunta(true);
    });

    mostrarPergunta(false);
}
