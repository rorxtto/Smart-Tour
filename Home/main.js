let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let input = document.getElementById("input")
let botao = document.getElementById("botao")

function entrar(){

    let input = document.getElementById("input")
    let botao = document.getElementById("botao")
    let listaGuia = []

    let atividadeValid = {
        atividade:'',
        nome: '',
        link: '',
        valor: '',
        tempo: '',
        descricao: '',
        cadastour: ''
    }

    listaGuia = JSON.parse(localStorage.getItem('listaGuia'))

    listaGuia.forEach((item)=> {
        if(input.value == item.atividadeCad){
            atividadeValid = {
                atividade: item.atividadeCad,
                nome: item.nomeCad,
                link: item.linkCad,
                valor: item.valorCad,
                tempo: item.tempoCad,
                descricao: item.descricaoCad,
                cadastour: item.cadastourCad
            }
        }
        
    });

   if(input.value == atividadeValid.atividade){
    window.location.href = '../Atividades/index.html'
    localStorage.setItem('atividadeLogada', JSON.stringify(atividadeValid))


   } else {
    alert('esta atividade nao exite')
   }
}