import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    _cliente;
    _saldo = 0;
    static quantidadeContas = 0;

    set cliente(contaCliente){
        if(contaCliente instanceof Cliente){
            this._cliente = contaCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.quantidadeContas += 1;
    }

    depositar(valor){
        if(valor <= 0) return
        this._saldo += valor
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}