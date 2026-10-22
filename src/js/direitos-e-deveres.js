"use strict";

// Este arquivo deve ficar em js/direitos-e-deveres.js no seu projeto.
// O HTML utiliza defer: os elementos já existem quando este arquivo executa.


// =========================
// ELEMENTOS INDIVIDUAIS
// =========================

const pagina = document.getElementById("pagina-direitos-e-deveres");
const navegacaoPrincipal = document.getElementById("navegacao-principal");
const linkHistoria = document.getElementById("link-contexto-historico");
const linkQuizMenu = document.getElementById("link-quiz-menu");
const linkQuizFinal = document.getElementById("link-quiz-final");


// =========================
// GRUPOS DE ELEMENTOS
// =========================

const secoes = document.querySelectorAll("[data-secao]");
const cardsHistoria = document.querySelectorAll('[data-card="historia"]');
const cardsConceitos = document.querySelectorAll('[data-card="conceito"]');
const cardsSituacoes = document.querySelectorAll('[data-card="situacao"]');


// =========================
// LINHA DO TEMPO
// =========================

// O HTML details/summary já permite abrir e fechar cada evento.
// O JavaScript acompanha esse estado para destacar o ponto na linha.

const eventosHistoricos = document.querySelectorAll("[data-evento-historico]");

eventosHistoricos.forEach(function (evento) {
    const item = evento.closest(".linha-tempo-item");

    function atualizarEstado() {
        item.classList.toggle("esta-aberto", evento.open);
    }

    evento.addEventListener("toggle", atualizarEstado);
    atualizarEstado();
});


// =========================
// FUTURAS INTERAÇÕES
// =========================

// Os atributos data-* podem ser lidos pela propriedade dataset.
// Exemplo: cardsHistoria[0].dataset.ano retorna a string "1932".
// Adicione aqui outras funções conforme definir as próximas interações.
