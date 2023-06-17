function validarEmail() {
  const emailInputs = document.getElementsByName("inputemail");
  const emailInput = emailInputs[0];
  const email = emailInput.value;

  if (email.includes("@")) {
    alert("O e-mail é válido.");
  } else {
    alert("O e-mail é inválido.");
  }
}