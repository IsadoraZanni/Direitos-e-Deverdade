/* =============================================================
   INTERAÇÕES COMUNS — JavaScript puro / DOM
   Este arquivo é carregado com defer: o HTML já existe ao executar.
   Não há React, imports, servidor, npm ou arquivos gerados em tempo real.
   ============================================================= */
"use strict";

// Esta classe permite ao CSS ativar o menu compacto apenas quando há JS.
document.documentElement.classList.add("js");

// 1. MENU DO CELULAR
const botaoMenu = document.querySelector(".menu-toggle");
const navegacao = document.getElementById("navegacao-principal");

if (botaoMenu && navegacao) {
    function mudarMenu(aberto) {
        navegacao.classList.toggle("is-open", aberto);
        botaoMenu.setAttribute("aria-expanded", String(aberto));
        botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    }

    botaoMenu.addEventListener("click", function () {
        const estaAberto = botaoMenu.getAttribute("aria-expanded") === "true";
        mudarMenu(!estaAberto);
    });

    navegacao.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mudarMenu(false);
        });
    });

    document.addEventListener("keydown", function (evento) {
        const estaAberto = botaoMenu.getAttribute("aria-expanded") === "true";

        if (evento.key === "Escape" && estaAberto) {
            mudarMenu(false);
            botaoMenu.focus();
        }
    });

    document.addEventListener("click", function (evento) {
        const cabecalho = document.querySelector(".cabecalho");

        if (cabecalho && !cabecalho.contains(evento.target)) {
            mudarMenu(false);
        }
    });
}

// 2. ACORDEÕES: pergunta -> clique -> resposta visível.
// O HTML já contém as respostas. Sem JavaScript elas continuam legíveis.
// data-acordeao="unico" mantém só um item aberto por vez no grupo.
const gruposDeAcordeoes = document.querySelectorAll("[data-acordeao]");

gruposDeAcordeoes.forEach(function (grupo) {
    const botoes = grupo.querySelectorAll(".acordeao-botao");

    function definirAbertura(botao, aberto) {
        const idPainel = botao.getAttribute("aria-controls");
        const painel = document.getElementById(idPainel);
        const item = botao.closest(".acordeao-item");

        if (!painel || !item) {
            return;
        }

        botao.setAttribute("aria-expanded", String(aberto));
        painel.hidden = !aberto;
        item.classList.toggle("is-open", aberto);
    }

    botoes.forEach(function (botao) {
        // No carregamento, respeita o estado inicial definido no HTML.
        definirAbertura(botao, botao.dataset.inicialAberto === "true");

        botao.addEventListener("click", function () {
            const vaiAbrir = botao.getAttribute("aria-expanded") !== "true";

            if (vaiAbrir && grupo.dataset.acordeao === "unico") {
                botoes.forEach(function (outroBotao) {
                    definirAbertura(outroBotao, false);
                });
            }

            definirAbertura(botao, vaiAbrir);
        });
    });
});
