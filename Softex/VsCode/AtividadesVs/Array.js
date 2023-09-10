const valor = [];
const valorquad = []

for (let i = 1; i <= 5; i++) {
    valor.push(Number(prompt(`Informe o ${i}° número:`)));
}
console.log(valor);

for (let i = 1; i <=valor.length; i++) {
    valorquad.push(valor[i]**2);
}
console.log(valorquad);