document.addEventListener("DOMContentLoaded", function () {
  const tipoEmpresaRadio = document.getElementById("tipoEmpresa");
  const tipoVoluntarioRadio = document.getElementById("tipoVoluntario");
  const dadosEmpresaDiv = document.getElementById("dadosEmpresa");
  const dadosVoluntarioDiv = document.getElementById("dadosVoluntario");
  const form = document.getElementById("inscricaoForm");
  const mensagemSucessoDiv = document.getElementById("mensagemSucesso");

  tipoEmpresaRadio.addEventListener("change", function () {
    if (tipoEmpresaRadio.checked) {
      dadosEmpresaDiv.style.display = "block";
      dadosVoluntarioDiv.style.display = "none";
      enableFields(dadosEmpresaDiv);
      disableFields(dadosVoluntarioDiv);
    }
  });

  tipoVoluntarioRadio.addEventListener("change", function () {
    if (tipoVoluntarioRadio.checked) {
      dadosVoluntarioDiv.style.display = "block";
      dadosEmpresaDiv.style.display = "none";
      enableFields(dadosVoluntarioDiv);
      disableFields(dadosEmpresaDiv);
    }
  });

  function enableFields(container) {
    const fields = container.querySelectorAll("input");
    fields.forEach((field) => {
      field.disabled = false;
    });
  }

  function disableFields(container) {
    const fields = container.querySelectorAll("input");
    fields.forEach((field) => {
      field.disabled = true;
      field.value = "";
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    mensagemSucessoDiv.style.display = "block";
    setTimeout(function () {
      mensagemSucessoDiv.style.display = "none";
    }, 3000);
    form.reset();
  });
});
