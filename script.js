const textarea = document.getElementById("add-texto");
const botaoadd = document.getElementById("botao-add");
const btnRemoverUltimo = document.getElementById("remover-ultimo");
const btnRemoverPrimeiro = document.getElementById("remover-primeiro");
const btnAddInicio = document.getElementById("add-inicio");
let lista_nomes = ["kawan", "fabricio", "wesley"];




function renderizar() {
  const lista_pagina = document.getElementById("lista");


  lista_pagina.innerHTML = "";
  for (let item of lista_nomes) {
    let elemento = document.createElement("li");
    elemento.innerText = item;
    lista_pagina.appendChild(elemento);
  }
}






document.addEventListener("DOMContentLoaded", () => {
  renderizar();
});






botaoadd.addEventListener("click", () => {
  const valor = textarea.value.trim();


  if (valor !== "") {
    lista_nomes.push(valor);
    textarea.value = "";
    renderizar();
  }
});
