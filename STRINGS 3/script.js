function TORNARMAIUSCULA() {
  const paragrafo = document.getElementById("paragrafo");
  const container = paragrafo.textContent
  .split(" ")
  .map(palavra =>
    palavra.charAt(0).toUpperCase() + palavra.slice(1)
  )
  .join(" ");

  paragrafo.textContent = container;
}