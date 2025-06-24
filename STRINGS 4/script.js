function substituirEspacos() {
  const paragrafo = document.getElementById("paragrafo");
  const container = paragrafo.textContent
  .replace(/\s+/g, '-');

  paragrafo.textContent = container;
}