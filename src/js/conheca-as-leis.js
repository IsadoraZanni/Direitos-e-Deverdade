"use strict";

// =========================
// BUSCA E FILTRO DAS LEIS
// Os cards já estão no HTML e funcionam sem JavaScript.
// =========================

const formularioBusca = document.getElementById("formulario-busca");
const campoBusca = document.getElementById("busca-leis");
const filtroCategoria = document.getElementById("filtro-categoria");
const botaoLimpar = document.getElementById("limpar-busca");
const resultadoBusca = document.getElementById("resultado-busca");
const nenhumResultado = document.getElementById("nenhum-resultado");
const cardsLeis = document.querySelectorAll('[data-card="lei"]');

// Assim, "constituicao" também encontra "Constituição".
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function filtrarLeis() {
    const busca = normalizarTexto(campoBusca.value);
    const categoria = filtroCategoria.value;
    let quantidade = 0;

    cardsLeis.forEach(function (card) {
        const texto = normalizarTexto(card.textContent);
        const correspondeBusca = texto.includes(busca);
        const correspondeCategoria = categoria === "todos" || card.dataset.categoria === categoria;
        const mostrar = correspondeBusca && correspondeCategoria;

        card.hidden = !mostrar;
        if (mostrar) {
            quantidade += 1;
        }
    });

    resultadoBusca.textContent = quantidade === 1
        ? "1 tema encontrado."
        : quantidade + " temas encontrados.";
    nenhumResultado.hidden = quantidade > 0;
}

if (formularioBusca) {
    formularioBusca.hidden = false;
    resultadoBusca.hidden = false;
    filtrarLeis();

    formularioBusca.addEventListener("submit", function (evento) {
        evento.preventDefault();
        filtrarLeis();
    });

    campoBusca.addEventListener("input", filtrarLeis);
    filtroCategoria.addEventListener("change", filtrarLeis);

    botaoLimpar.addEventListener("click", function () {
        campoBusca.value = "";
        filtroCategoria.value = "todos";
        filtrarLeis();
        campoBusca.focus();
    });
}
