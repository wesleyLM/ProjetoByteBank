import { Cliente } from "./Cliente.js";   
import { ContaCorrente } from "./ContaCorrente.js";
// const cliente1 = new Cliente('Wesley de Lima Marques', 08148166307, 1745, 0.0)
// cliente1.MostraConta();

//Conta Ana
const clientAna = new Cliente('Ana', 99788553356);
const contaAna = new ContaCorrente(clientAna,1002,0)
const clientRicardo = new Cliente('Ricardo',88899955532);
const contaRicardo = new ContaCorrente(clientRicardo,1001,100);
clientAna.MostraConta()


contaAna.depositar(200)
contaAna.transferir(100,contaRicardo)

console.log(contaAna)

//Conta Ricardo

clientRicardo.MostraConta();
contaRicardo.transferir(80,contaAna)

console.log(contaRicardo)
console.log(contaAna)
