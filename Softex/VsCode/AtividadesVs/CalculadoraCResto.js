const prompt = require("prompt-sync")();

var num1, num2, op, res

num1 = parseInt(prompt("Insira um número inteiro válido: "));
num2 = parseInt(prompt("Insira outro número inteiro válido: "));
op = prompt("Escolha a operação:\nDigite 1 - somar\nDigite 2 - subtrair\nDigite 3 - multiplicar\nDigite 4 - dividir\n");

if (op == 1){
    res = num1+num2;
console.log(`${num1} + ${num2} = ${res}`);
} else if (op == 2) {
    res = num1-num2;
    console.log(`${num1} - ${num2} = ${res}`);
} else if (op == 3) {
    res = num1xnum2;
    console.log(`${num1} x ${num2} = ${res}`);
} else if (op == 4) {
    res = num1/num2;
    let rest = num1 % num2
    console.log(`${num1} / ${num2} = ${res}, o resto da divisão é: ${rest}`);
} else {
    console.log("Operação inválida.");
}
