
let nome = document.getElementById("nome");
let validNome = false;

  let celular = document.getElementById("celular");
  let validCelular = false;

  let RG = document.getElementById("RG");
  let validRG = false;

  let email = document.getElementById("email");
  let validEmail = false;

  let senha = document.getElementById("senha");
  let validSenha = false;

  let confirmSenha = document.getElementById("confirmSenha");
  let validConfirmSenha = false;

  
   nome.addEventListener('mouseout', ()=> {
    if(nome.value != ''){
      if(nome.value.length <= 2){
  
        alert("digite no minimo 3 caracteres");
        validNome = false;
    
      } else {
        validNome = true;
      }
    }
   })

   celular.addEventListener('mouseout', () => {
    const numeroCelular = celular.value;

    const regexCelular = /^\d{11}$/;
    if(numeroCelular != ''){
      if (!regexCelular.test(numeroCelular)) {
        alert("digite 11 numeros");
        validCelular = false;
       
      } else {
        validCelular = true;
      }
    }
  });

  email.addEventListener('mouseout', () => {
    const numeroEmail = email.value;

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
    if(numeroEmail != ''){
      if (!regexEmail.test(numeroEmail)) {
        alert("email invalido");
        validEmail = false;
       
      } else {
        validEmail = true;
      }
    }
  });

  senha.addEventListener('mouseout', () => {
    const numeroSenha = senha.value;

    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(numeroSenha != ''){
      if (!regexSenha.test(numeroSenha)) {
        alert("1- Pelo menos 8 caracteres de comprimento 2-Pelo menos uma letra maiúscula 3- Pelo menos uma letra minúscula 4- Pelo menos um dígito numérico 5- Pelo menos um caractere especial");
        validSenha = false;
      } else {
        validSenha = true;
      }
    }
  });

  confirmSenha.addEventListener('mouseout', () => {
    if(confirmSenha.value != ''){
      if (senha.value != confirmSenha.value) {
        alert("as senhas nao conferem");
        validConfirmSenha = false;
       
      } else {
        validConfirmSenha = true;
      }
    }
  });







function cadastrar(){

  if(validCelular && validConfirmSenha && validEmail && validNome && validSenha){

   let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

   listaUser.push(
    {
      nomeCad: nome.value,
      celularCad: celular.value,
      RGCad: RG.value,
      emailCad: email.value,
      senhaCad: senha.value
    }
   )
   localStorage.setItem('listaUser', JSON.stringify(listaUser))
   alert("Usuario cadastrado")
 
  
   setTimeout(()=>{
    window.location.href = '../Login/index.html'
  }, 1500)
    

  } else {
    alert("Preencha todos os campos corretamente")
  }
  
  
}









// function validarEmail() {
//   const emailInputs = document.getElementsByName("email");
//   const emailInput = emailInputs[0];
//   const email = emailInput.value;
//   const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

//   if (regex.test(email)) {
//      alert("O e-mail é válido.");
//    } else {
//      alert("O e-mail é inválido.");
//    }
// }