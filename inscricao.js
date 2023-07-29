const form = document.getElementById("inscricaoForm");
const enviarButton = document.getElementById("enviarBtn");
const mensagemSucessoDiv = document.getElementById("mensagemSucesso");

enviarButton.addEventListener("click", function () {
    if (form.checkValidity()) {
        enviarFormulario();
    } else {
        form.reportValidity();
    }
});

function enviarFormulario() {
    // Simular envio do formulário (apenas para fins de exemplo)
    setTimeout(function () {
        // Limpar os campos do formulário após o envio
        form.reset();

        // Exibir a mensagem de sucesso
        mensagemSucessoDiv.innerText = "Formulário enviado com sucesso!";
        mensagemSucessoDiv.style.display = "block";

        // Ocultar a mensagem de sucesso após 4 segundos
        setTimeout(function () {
            mensagemSucessoDiv.style.display = "none";
        }, 4000);
    }, 1000); // Tempo de simulação de envio do formulário (1 segundo)
}