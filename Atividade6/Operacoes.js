function calcularOperacoes() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	var soma = num1 + num2;
	var subtracao = num1 - num2;
	var produto = num1 * num2;
	var divisao = num1 / num2;
	var resto = num1 % num2;

	document.getElementById("soma").innerHTML = "Soma: " + soma.toFixed(2);
	document.getElementById("subtracao").innerHTML = "Subtração: " + subtracao.toFixed(2);
	document.getElementById("produto").innerHTML = "Produto: " + produto.toFixed(2);
	document.getElementById("divisao").innerHTML = "Divisão: " + divisao.toFixed(2);
	document.getElementById("resto").innerHTML = "Resto: " + resto.toFixed(2);
}