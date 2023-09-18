const num = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];

var indexfind = buscaLinear(num, 20);

if(indexfind !== -1) {
console.log (`O elemento ${numproc} foi encontrado no indice ${indexfind}.`);
} else {
    console.log (`O elemento ${numproc} não foi encontrado na lista.`);
}