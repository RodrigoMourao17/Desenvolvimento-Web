function InverterTexto() {

const container = document.getElementById("paragrafo");

const container2 = container.textContent.split('').reverse().join('');
container.textContent = container2;

}