"use strict";

// =========================
// ABERTURA DOS EVENTOS
// O botão identifica o conteúdo pelo atributo aria-controls.
// Sem JavaScript, os textos e as imagens continuam visíveis.
// =========================

const botoesEventos = document.querySelectorAll("[data-botao-evento]");

botoesEventos.forEach(function (botao) {
    const idConteudo = botao.getAttribute("aria-controls");
    const conteudo = document.getElementById(idConteudo);
    const item = botao.closest(".linha-tempo-item");
    const textoBotao = botao.querySelector(".evento-botao-texto");
    const sinal = botao.querySelector(".evento-sinal");

    if (!conteudo || !item) {
        return;
    }

    function atualizarEvento(aberto) {
        conteudo.hidden = !aberto;
        botao.setAttribute("aria-expanded", String(aberto));
        item.classList.toggle("esta-aberto", aberto);
        textoBotao.textContent = aberto ? "Recolher evento" : "Explorar evento";
        sinal.textContent = aberto ? "−" : "+";
    }

    // Cada marco pode ser aberto de forma independente.
    botao.hidden = false;
    atualizarEvento(false);

    botao.addEventListener("click", function () {
        const aberto = botao.getAttribute("aria-expanded") === "true";
        atualizarEvento(!aberto);
    });
});
