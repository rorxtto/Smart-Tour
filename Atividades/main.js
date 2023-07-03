let atividadeLogada = JSON.parse(localStorage.getItem('atividadeLogada'));
let titulo = document.getElementById("titulo");
let descricao = document.getElementById("descricao");
let link = document.getElementById("linkIMG");
let nome = document.getElementById("nome");
let valor = document.getElementById("valor");
let tempo = document.getElementById("tempo");

titulo.innerHTML = atividadeLogada.atividade;

descricao.innerHTML = atividadeLogada.descricao;

valor.innerHTML = "Valor da Atividade: <br>" + "R$ " + atividadeLogada.valor;

nome.innerHTML = "Guia:<br>" + atividadeLogada.nome;

tempo.innerHTML = "Tempo da atividade: <br>" + atividadeLogada.tempo + "  horas";

link.src =  atividadeLogada.link; 
