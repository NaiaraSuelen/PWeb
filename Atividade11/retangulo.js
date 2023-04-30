function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  
  this.calcularArea = function() {
    return this.base * this.altura;
  }
}

var retangulo1 = new Retangulo(10, 20);

var area1 = retangulo1.calcularArea();

console.log("Área do retângulo 1: " + area1);