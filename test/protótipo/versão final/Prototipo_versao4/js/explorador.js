/* SELETOR DE ÁREAS — todos os textos estão em conheca-as-leis.html.
   Este script só escolhe qual painel deve ficar visível. */
"use strict";

const explorador = document.querySelector("[data-explorador]");

if (explorador) {
    const listaBotoes = explorador.querySelector(".explorador__botoes");
    const botoesAreas = explorador.querySelectorAll("[data-area]");
    const paineisAreas = explorador.querySelectorAll("[data-painel-area]");
    const anuncioArea = explorador.querySelector("[data-anuncio-area]");

    function selecionarArea(id) {
        botoesAreas.forEach(function (botao) {
            const selecionado = botao.dataset.area === id;
            botao.setAttribute("aria-pressed", String(selecionado));
        });

        paineisAreas.forEach(function (painel) {
            painel.hidden = painel.id !== id;
        });

        const painelAtual = document.getElementById(id);
        const titulo = painelAtual ? painelAtual.querySelector("h3") : null;

        if (anuncioArea && titulo) {
            anuncioArea.textContent = "Área selecionada: " + titulo.textContent + ". Explicação exibida após os botões.";
        }
    }

    if (listaBotoes && botoesAreas.length > 0) {
        listaBotoes.hidden = false;
        selecionarArea(botoesAreas[0].dataset.area);

        botoesAreas.forEach(function (botao) {
            botao.addEventListener("click", function () {
                selecionarArea(botao.dataset.area);
            });
        });
    }
}
