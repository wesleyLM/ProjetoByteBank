import { Cliente } from "./Cliente.js";   
import { ContaCorrente } from "./ContaCorrente.js";
// const cliente1 = new Cliente('Wesley de Lima Marques', 08148166307, 1745, 0.0)
// cliente1.MostraConta();
const ClientRicardo = new Cliente('Ricardo',88899955532, 1001, 2);
ClientRicardo.MostraConta();

const ContaRicardo = new ContaCorrente(1001,2);
ContaRicardo.depositar(0);
ContaRicardo.mostrarSaldo();
ContaRicardo.sacar(0);
ContaRicardo.mostrarSaldo();
