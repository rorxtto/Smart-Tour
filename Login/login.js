function entrar() {
    let email = document.getElementById("email")
    let senha = document.getElementById("senhaJS")
    let listaUser = []

    let userValid = {

        nome: '',
        celular: '',
        RG: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (email.value == item.emailCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                celular: item.celularCad,
                RG: item.RGCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });

    if (email.value == "" && senha.value == "") {
        alert("preencha todos os campos")
    } else {
        if (email.value == userValid.email && senha.value == userValid.senha) {
            window.location.href = '../Home/home.html'

            localStorage.setItem('userLogado', JSON.stringify(userValid))



        } else {
            alert(' email ou senha incorretos')
        }


    }






}