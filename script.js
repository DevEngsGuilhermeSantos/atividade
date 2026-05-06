let nomes = ["Ana", "Carlos", "João", "Maria"];

const lista = document.getElementById("lista");

function renderizarLista() {
  lista.innerHTML = "";

  nomes.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}


function adicionarFinal() {
  const input = document.getElementById("nomeInput");
  if (input.value !== "") {
    nomes.push(input.value);
    input.value = "";
    renderizarLista();
  }
}

function adicionarInicio() {
  const input = document.getElementById("nomeInput");
  if (input.value !== "") {
    nomes.unshift(input.value);
    input.value = "";
    renderizarLista();
  }
}

function removerUltimo() {
  nomes.pop();
  renderizarLista();
}

function removerPrimeiro() {
  nomes.shift();
  renderizarLista();
}

function contarMaisDe5() {
  let contador = 0;

  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].length > 5) {
      contador++;
    }
  }

  alert("Quantidade de nomes com mais de 5 letras: " + contador);
}



function contarMaisDe5ForEach() {
  let contador = 0;

  nomes.forEach(nome => {
    if (nome.length > 5) {
      contador++;
    }
  });

  alert("Quantidade (forEach): " + contador);
}


function mostrarMaiusculo() {
  const maiusculos = nomes.map(nome => nome.toUpperCase());
  renderizarLista(maiusculos);
}



// filtrar nomes com mais de 5 letras
function filtrarNomes() {
  const filtrados = nomes.filter(nome => nome.length > 5);
  renderizarLista(filtrados);
}

// transformar todos em maiúsculo (map)
function transformarMaiusculo() {
  const maiusculos = nomes.map(nome => nome.toUpperCase());
  renderizarLista(maiusculos);
}


function adicionarFinal() {
  const input = document.getElementById("nomeInput");
  if (input.value !== "") {
    nomes.push(input.value);
    input.value = "";
    renderizarLista();
  }
}

function adicionarInicio() {
  const input = document.getElementById("nomeInput");
  if (input.value !== "") {
    nomes.unshift(input.value);
    input.value = "";
    renderizarLista();
  }
}

function removerUltimo() {
  nomes.pop();
  renderizarLista();
}

function removerPrimeiro() {
  nomes.shift();
  renderizarLista();
}

renderizarLista();


