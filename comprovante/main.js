let atividadeLogada = JSON.parse(localStorage.getItem('atividadeLogada'));

let titulo = document.getElementById("tituloJS");
let nome = document.getElementById("nome");
let cadastour = document.getElementById("cadastour")
let valor = document.getElementById("valor");

titulo.innerHTML = "Atividade no&nbsp;" + atividadeLogada.atividade;

nome.innerHTML = "Guia:&nbsp;&nbsp;&nbsp;" + atividadeLogada.nome;

cadastour.innerHTML = "Cadastour:&nbsp;&nbsp;&nbsp;" + atividadeLogada.cadastour;

valor.innerHTML = "Valor da Atividade:&nbsp;" + "R$ " + atividadeLogada.valor;