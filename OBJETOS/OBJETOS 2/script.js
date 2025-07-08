const carro = {
  modelo: "Fusca",
  ano: 1975
};

let mostrandoDados = false;

function verificarResposta() {
    const informacoes = document.getElementById("informacoes");
    if (!mostrandoDados) {
        informacoes.innerHTML = `
          <strong>Modelo:</strong> ${carro.modelo} <br>
          <strong>Ano:</strong> ${carro.ano}
        `;
        mostrandoDados = true;
    } else {
        informacoes.innerHTML = `<h2>Clique no botão para ver os dados</h2>`;
        mostrandoDados = false;
    }
}
