let atividadeLogada = JSON.parse(localStorage.getItem('atividadeLogada'));

let titulo = document.getElementById("tituloJs");
let nome = document.getElementById("nome");
let cadastour = document.getElementById("cadastour")

titulo.innerHTML = "Atividade no&nbsp;" + atividadeLogada.atividade;

nome.innerHTML = "Guia:&nbsp;&nbsp;&nbsp;" + atividadeLogada.nome;

cadastour.innerHTML = "Cadastour:&nbsp;&nbsp;&nbsp;" + atividadeLogada.cadastour;