let atividade = document.getElementById("atividade");
validAtividade = false;

let descricao = document.getElementById("descricao");

let tempo = document.getElementById("tempo");
validTempo = false;

let valor = document.getElementById("valor");

let link = document.getElementById("link");
validLink = false;

atividade.addEventListener('keyup', () => {
    if (atividade.value != '') {
      if (atividade.value.length <= 2) {
  
        alert("digite no minimo 3 caracteres");
        validAtividade = false;
  
      } else {
        validAtividade = true;
      }
    }
  })

  tempo.addEventListener('keyup', () => {
    const numeroTempo = tempo.value;
  
    const regexTempo = /^(?:[1-9]|1\d|2[0-4])$/;
    if (numeroTempo != '') {
      if (!regexTempo.test(numeroTempo)) {
        alert("o tempo deve ser preenchido em horas e devem conter no minimo 1hr e no maximo 24 hrs");
        validTempo = false;
  
      } else {
        validTempo = true;
      }
    }
  });


  link.addEventListener('keyup', () => {
    const numeroLink = link.value;
  
    const regexLink = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-@?^=%&/~\+#])?$/;
    if (numeroLink != '') {
      if (!regexLink.test(numeroLink)) {
        alert("isto nao e um link");
        validLink = false;
  
      } else {
        validLink = true;
      }
    }
  });


  function cadastrar(){

    if (validAtividade && validTempo && validLink) {

      let listaAtiv = JSON.parse(localStorage.getItem('listaGuia') || '[]')
      
      var ultimo = listaAtiv.length -1

      const guiaAtual = listaAtiv[ultimo]

      guiaAtual.atividadeCad= atividade.value,
      guiaAtual.descricaoCad= descricao.value,
      guiaAtual.tempoCad= tempo.value,
      guiaAtual.valorCad= valor.value,
      guiaAtual.linkCad= link.value

      localStorage.setItem('listaGuia', JSON.stringify(listaAtiv))
      alert("Atividade cadastrada")
  

  
      setTimeout(() => {
        window.location.href = '../Chat/index.html'
      }, 1000)
  
  
    } else {
      alert("Preencha todos os campos corretamente")
    }

  }