function Conta(nomeCorrentista, banco, numeroConta, saldo) {
  this.nomeCorrentista = nomeCorrentista;
  this.banco = banco;
  this.numeroConta = numeroConta;
  this.saldo = saldo;
}

Conta.prototype.getNomeCorrentista = function() {
  return this.nomeCorrentista;
};

Conta.prototype.setNomeCorrentista = function(nomeCorrentista) {
  this.nomeCorrentista = nomeCorrentista;
};

Conta.prototype.getBanco = function() {
  return this.banco;
};

Conta.prototype.setBanco = function(banco) {
  this.banco = banco;
};

Conta.prototype.getNumeroConta = function() {
  return this.numeroConta;
};

Conta.prototype.setNumeroConta = function(numeroConta) {
  this.numeroConta = numeroConta;
};

Conta.prototype.getSaldo = function() {
  return this.saldo;
};

Conta.prototype.setSaldo = function(saldo) {
  this.saldo = saldo;
};

function ContaCorrenteSaldoEspecial(nomeCorrentista, banco, numeroConta, saldo, limite) {
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
  this.limite = limite;
}

ContaCorrenteSaldoEspecial.prototype = Object.create(Conta.prototype);

ContaCorrenteSaldoEspecial.prototype.getLimite = function() {
  return this.limite;
};

ContaCorrenteSaldoEspecial.prototype.setLimite = function(limite) {
  this.limite = limite;
};

function ContaPoupancaJurosDataVencimento(nomeCorrentista, banco, numeroConta, saldo, taxaJuros, dataVencimento) {
  Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
  this.taxaJuros = taxaJuros;
  this.dataVencimento = dataVencimento;
}

ContaPoupancaJurosDataVencimento.prototype = Object.create(Conta.prototype);

ContaPoupancaJurosDataVencimento.prototype.getTaxaJuros = function() {
  return this.taxaJuros;
};

ContaPoupancaJurosDataVencimento.prototype.setTaxaJuros = function(taxaJuros) {
  this.taxaJuros = taxaJuros;
};

ContaPoupancaJurosDataVencimento.prototype.getDataVencimento = function() {
  return this.dataVencimento;
};

ContaPoupancaJurosDataVencimento.prototype.setDataVencimento = function(dataVencimento) {
  this.dataVencimento = dataVencimento;
};

var conta1 = new ContaCorrenteSaldoEspecial("João", "Banco do Brasil", "12345-6", 5000, 10000);
var conta2 = new ContaPoupancaJurosDataVencimento("Maria", "Itaú", "54321-0", 10000, 0.01, "31/12/2023");
