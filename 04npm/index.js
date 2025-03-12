//Codigo para executar o meu projeto

//Importar um módulo
import { calcularIMC } from "./calculadoraIMC"

console.log(">>> CalculadoraIMC <<<")
console.table(tabelaIMC)


const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)
console.log(resultado.toFixed(2))

//Importar um módulo externo, uma biblioteca
import moment from "moment";

const hoje = momento().locale('pt-br')

console.log("Data:")

console.log(hoje.format("DD/MM/YYYY"))