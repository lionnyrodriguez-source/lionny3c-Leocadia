// Mensagem no console
console.log("Site sobre a preservação da água carregado! 💧");

// Botão para mostrar uma mensagem
function mostrarMensagem() {
    alert("💧 Preserve a água! Cada gota faz a diferença.");
}

// Contador de cliques
let cliques = 0;

function contarClique() {
    cliques++;
    document.getElementById("contador").textContent =
        "Você clicou " + cliques + " vez(es)!";
}
<button onclick="mostrarMensagem()">💧 Preservar a Água</button>

<p id="contador">Você ainda não clicou.</p>

<button onclick="contarClique()">Clique aqui</button
