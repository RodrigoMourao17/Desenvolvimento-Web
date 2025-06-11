const numeros = [11, 5, 2, 17, 21, 30, 7, 9, 55];
const container = document.getElementById("10mais");

const filtro = numeros.filter(n => n > 10);
    
const paragrafo = document.createElement("p");
paragrafo.textContent = "Números acima de 10: " + filtro;
container.append(paragrafo);
