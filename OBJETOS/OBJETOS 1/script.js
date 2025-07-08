const pessoa = {
    nome : "Joao",
    idade: 18,
    Ocupacao: "Estudante"
};

function verificarDados() {
    const informacoes = document.getElementById("informacoes");
    informacoes.innerHTML = `
    <strong>Nome: </strong> ${pessoa.nome} <br>
    <strong>Idade: </strong> ${pessoa.idade} <br>
    <strong>Ocupacao: </strong> ${pessoa.Ocupacao}
    `;
}