export class Cliente{
    constructor(nome,cpf){
        this.nome = nome
        this.cpf = cpf
    }

    MostraConta(){
        console.log(`Dono da conta ${this.nome} seu cpf ${this.cpf}`)
    }
}