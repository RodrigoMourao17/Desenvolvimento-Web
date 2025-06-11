let frutas = ["banana", "maracuja", "morango", "pessego"];

function updatelista() {
    const lista = document.getElementById("listadefrutas");
    lista.innerHTML = "";

    frutas.forEach(function(fruta){
        const li = document.createElement("li");
        li.textContent = fruta;
        lista.append(li);
    });
}

updatelista();

function adicionarfruta() {
    let addfruta = prompt("Deseja adicionar qual fruta?");
    if (addfruta) {
        addfruta = addfruta.trim();

        if (addfruta === "") return;

        if (frutas.indexOf(addfruta) !== -1) {
            alert("Fruta já adicionada");
        } else {
            frutas.push(addfruta);
            updatelista();
        }
    }
}

function removerfruta() {
    let removefruta = prompt("Deseja remover qual fruta?");
    if (removefruta) {
        removefruta = removefruta.trim();

        if (removefruta === "") return;

        const indicedalista = frutas.indexOf(removefruta);
        if (indicedalista === -1) {
            alert("Não existe na lista");
        } else {
            frutas.splice(indicedalista, 1);
            updatelista();
        }
    }
}
