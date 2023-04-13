function jogar(jogada) {
    const jogadas = ["pedra", "papel", "tesoura"];
    const jogadaComputador = jogadas[Math.floor(Math.random() * jogadas.length)];
    
    let resultado = "";
    if (jogada === jogadaComputador) {
      resultado = "Empate!";
    } else if (
      (jogada === "pedra" && jogadaComputador === "tesoura") ||
      (jogada === "papel" && jogadaComputador === "pedra") ||
      (jogada === "tesoura" && jogadaComputador === "papel")
    ) {
      resultado = "Você venceu!";
    } else {
      resultado = "Você perdeu!";
    }

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerText = `Você escolheu ${jogada}. O computador escolheu ${jogadaComputador}. ${resultado}`;
  }