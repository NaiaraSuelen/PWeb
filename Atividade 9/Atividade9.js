function maiorNumero(num1, num2, num3) {
   if (num1 > num2 && num1 > num3) {
      return num1;
   } else if (num2 > num1 && num2 > num3) {
      return num2;
   } else {
      return num3;
   }
}


function ordemCrescente(num1, num2, num3) {
   var numeros = [num1, num2, num3];
   numeros.sort(function(a, b){return a - b});
   return numeros;
}