console.log("Calculadora de Média");

var nota1 = parseInt(prompt("Insira o 1° número entre 0 e 10: "));
var nota2 = parseInt(prompt("Insira o 2° número entre 0 e 10: "));
var nota3 = parseInt(prompt("Insira o 3° número entre 0 e 10: "));

var media = (nota1 + nota2 + nota3) / 3;

console.log(`A média das notas é: ${media}`);