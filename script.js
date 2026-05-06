// Lista inicial (ATV 1)
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

// ATV 2
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

// inicializa
renderizarLista();
