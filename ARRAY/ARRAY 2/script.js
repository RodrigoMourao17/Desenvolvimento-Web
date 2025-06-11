// Passo 1: Criar o array com 5 frutas
let frutas = ["maçã", "banana", "laranja", "uva", "melancia"];

// Mostrar array original
document.getElementById("original").textContent = "Original: " + frutas.join(", ");

// Passo 2: Adicionar frutas no início e no fim
frutas.unshift("abacaxi"); // Adiciona no início
frutas.push("kiwi");       // Adiciona no fim

// Mostrar array após adições
document.getElementById("adicionado").textContent = "Após adicionar: " + frutas.join(", ");

// Passo 3: Remover frutas do início e do fim
frutas.shift();  // Remove do início
frutas.pop();    // Remove do fim

// Mostrar array após remoções
document.getElementById("removido").textContent = "Após remover: " + frutas.join(", ");
