function seletordevogais(str) {
  const container = document.getElementById("contarvogais");
  const vogais = str.match(/[aeiouáéíóúâêîôûãõ]/gi) || [];
  container.textContent = "Vogais separadas: " + vogais.join(", ");
}
