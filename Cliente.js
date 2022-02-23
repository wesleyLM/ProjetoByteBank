export class Cliente{
    constructor(nome,cpf,agencia, saldo){
        this.nome = nome
        this.cpf = cpf
        this.agencia = agencia
        this.saldo = saldo
    }

    MostraConta(){
        console.log(`Dono da conta ${this.nome} seu cpf ${this.cpf} agencia ${this.agencia} saldo disponível R$${this.saldo}`)
    }
}