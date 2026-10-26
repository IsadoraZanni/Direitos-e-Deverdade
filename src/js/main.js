"use strict";

// =========================
// MENU EM TELAS PEQUENAS
// Sem JavaScript, os links continuam visíveis.
// =========================

const botaoMenu = document.getElementById("botao-menu");
const navegacaoPrincipal = document.getElementById("navegacao-principal");
const telaPequena = window.matchMedia("(max-width: 820px)");

function ajustarMenu() {
    botaoMenu.hidden = false;
    navegacaoPrincipal.hidden = telaPequena.matches;
    botaoMenu.setAttribute("aria-expanded", String(!telaPequena.matches));
}

if (botaoMenu && navegacaoPrincipal) {
    ajustarMenu();
    telaPequena.addEventListener("change", ajustarMenu);

    botaoMenu.addEventListener("click", function () {
        const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
        navegacaoPrincipal.hidden = aberto;
        botaoMenu.setAttribute("aria-expanded", String(!aberto));
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && telaPequena.matches && !navegacaoPrincipal.hidden) {
            navegacaoPrincipal.hidden = true;
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.focus();
        }
    });
}
