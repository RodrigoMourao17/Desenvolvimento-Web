// Criando um array com 5 frutas
const nomes = ["Pedro", "Maria", "Jorge", "Julia", "Vitoria"];

// Selecionando os elementos HTML
const container = document.getElementById("cumprimentos");

nomes.forEach(nome => {
    const paragrafo = document.createElement("p");
    paragrafo.textContent= "Olá, " + nome + "!";
    container.append(paragrafo);
}

)


