/* CAMINHOS DE ORIENTAÇÃO — DOM, arrays, índices e condições.
   As etapas já estão no HTML como listas ordenadas.
   O usuário pode trocar de situação a qualquer momento. */
"use strict";

const areaCaminhos = document.querySelector("[data-caminhos]");

if (areaCaminhos) {
    const seletores = areaCaminhos.querySelectorAll("[data-escolher-caminho]");
    const paineis = areaCaminhos.querySelectorAll("[data-caminho-painel]");
    const seletorContainer = areaCaminhos.querySelector(".caminhos-seletor");

    let caminhoAtual = 0;
    let passoAtual = 0;
    let concluido = false;

    function atualizarCaminho(moverFoco) {
        paineis.forEach(function (painel, indice) {
            const ativo = indice === caminhoAtual;
            painel.hidden = !ativo;
            painel.classList.add("is-interactive");
            seletores[indice].setAttribute("aria-pressed", String(ativo));
        });

        const painel = paineis[caminhoAtual];
        const passos = painel.querySelectorAll(".caminho-passos li");
        const status = painel.querySelector(".caminho-status");
        const controles = painel.querySelector(".caminho-controles");
        const anterior = painel.querySelector("[data-passo-anterior]");
        const proximo = painel.querySelector("[data-proximo-passo]");
        const reiniciar = painel.querySelector("[data-reiniciar-caminho]");
        const conclusao = painel.querySelector("[data-conclusao]");

        controles.hidden = false;
        status.hidden = false;
        passos.forEach(function (passo, indice) {
            passo.hidden = indice !== passoAtual;
        });

        status.textContent = concluido
            ? "Caminho concluído"
            : "Passo " + (passoAtual + 1) + " de " + passos.length;

        anterior.hidden = passoAtual === 0 || concluido;
        proximo.hidden = concluido;
        reiniciar.hidden = !concluido;
        conclusao.hidden = !concluido;
        proximo.textContent = passoAtual === passos.length - 1 ? "Concluir caminho" : "Próximo passo →";

        if (moverFoco) {
            const alvo = concluido ? conclusao : passos[passoAtual];
            alvo.focus();
        }
    }

    if (paineis.length > 0 && seletores.length === paineis.length) {
        seletorContainer.hidden = false;

        seletores.forEach(function (botao, indice) {
            botao.addEventListener("click", function () {
                caminhoAtual = indice;
                passoAtual = 0;
                concluido = false;
                atualizarCaminho(false);
            });
        });

        paineis.forEach(function (painel) {
            painel.querySelector("[data-proximo-passo]").addEventListener("click", function () {
                const total = painel.querySelectorAll(".caminho-passos li").length;

                if (passoAtual < total - 1) {
                    passoAtual += 1;
                } else {
                    concluido = true;
                }

                atualizarCaminho(true);
            });

            painel.querySelector("[data-passo-anterior]").addEventListener("click", function () {
                passoAtual = Math.max(0, passoAtual - 1);
                atualizarCaminho(true);
            });

            painel.querySelector("[data-reiniciar-caminho]").addEventListener("click", function () {
                passoAtual = 0;
                concluido = false;
                atualizarCaminho(true);
            });
        });

        atualizarCaminho(false);
    }
}
