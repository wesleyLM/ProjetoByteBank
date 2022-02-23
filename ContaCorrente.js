export class ContaCorrente{
    #saldo
    #agencia
    constructor(agencia,saldo){
        this.#agencia = agencia
        this.#saldo = saldo
    }

    depositar(valor){
        if(valor <= 0) return
        this.#saldo += valor
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor
            return valor
        }
    }

    mostrarSaldo(){
        console.log(this.#saldo)
    }
}