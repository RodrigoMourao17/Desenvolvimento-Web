const nomes = ["jose","luiza","joao","mirella"];
const container = document.getElementById("maiusculas");

const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

const paragrafo = document.createElement("p");
paragrafo.textContent = "NOME MAIUSCULO = " + nomesMaiusculos;
container.append(paragrafo);