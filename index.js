import { Cliente } from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const clientRicardo = new Cliente('Ricardo', 88899955532, '1111');
const gerenteAna = new Gerente('Ana', 5000, 123456789101)
const diretoPedro = new Diretor('Pedro', 10000,123456789102)

diretoPedro.cadastrarSenha("987456")
gerenteAna.cadastrarSenha("123456")

const DiretorEstaLogado = SistemaAutenticacao.login(diretoPedro, "987456")
const gerenteAnaEstaLogado = SistemaAutenticacao.login(gerenteAna, "123456")
const clienteEstaLogado = SistemaAutenticacao.login(clientRicardo, '111')

console.log(DiretorEstaLogado)
console.log(gerenteAnaEstaLogado)
console.log(clienteEstaLogado)
