document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputNome = document.getElementById("Nome");
    const inputEmail = document.getElementById("Email");
    const erroNome = document.getElementById("Nome-error");
    const erroEmail = document.getElementById("Email-error");
    const msgSucesso = document.getElementById("MensagemSucesso");

    let valido = true;

    msgSucesso.style.display = "none";
    erroNome.textContent = "";
    erroEmail.textContent = "";
    inputNome.classList.remove("errodeinput");
    inputEmail.classList.remove("errodeinput");

    // Validação do nome
    if (inputNome.value.trim() === "") {
        erroNome.textContent = "Digite seu nome";
        inputNome.classList.add("errodeinput");
        valido = false;
    }

    // Validação do email
    if (inputEmail.value.trim() === "") {
        erroEmail.textContent = "Digite seu email";
        inputEmail.classList.add("errodeinput");
        valido = false;
    } else if (!inputEmail.value.includes("@") || !inputEmail.value.includes(".")) {
        erroEmail.textContent = "Digite um email válido";
        inputEmail.classList.add("errodeinput");
        valido = false;
    }

    if (valido) {
        msgSucesso.style.display = "block";
    }
});
