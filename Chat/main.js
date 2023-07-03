
function enviar() {
    let caixa = document.getElementById("caixaJS");
    let conversa = document.getElementById("conversadochat2");
    let imagem = document.getElementById("imagemJS");
    let texto = document.getElementById("bomdia");
  
    let novoConteudo = `
          <div id="conversadochat2">
              <p id="bomdia">${caixa.value}</p>
          </div>
      `;
  
    conversa.insertAdjacentHTML("beforeend", novoConteudo);
  
    caixa.value = ""; // Limpa o valor do campo de entrada após exibir na conversa
  }
  