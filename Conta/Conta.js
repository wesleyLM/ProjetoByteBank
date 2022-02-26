export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");

        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }

    set cliente(contaCliente) {
        if (contaCliente instanceof Cliente) {
            this._cliente = contaCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor) {
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor,taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}