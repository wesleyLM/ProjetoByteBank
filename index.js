import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const clientRicardo = new Cliente('Ricardo', 88899955532);
const contaCorrenteRicardo = new ContaCorrente(clientRicardo, 1001);
const contaPoupancaRicardo = new ContaPoupanca(0, clientRicardo, 1001);
const contaSalarioRicardo = new ContaSalario(clientRicardo);

console.log(contaPoupancaRicardo);
console.log(contaCorrenteRicardo);
console.log(contaSalarioRicardo)