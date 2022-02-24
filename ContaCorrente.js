export class ContaCorrente{
    _saldo = 0
    constructor(cliente, agencia, saldo){
        this.cliente = cliente
        this.agencia = agencia
        this._saldo = saldo
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

    mostrarSaldo(){
        console.log(this._saldo)
    }
}