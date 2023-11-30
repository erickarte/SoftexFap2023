var nome; //String;
var salario; //Number;
var idade; //Number;
var diploma; //Boolean;

let pessoa = []

var Erick = ["Erick Lopes", 1500, 41, true];
var Ayres = ["Ayres Neto", 3800, 81, false];
var Beatriz = ["Beatriz Lopes", null, 14, false];
var Marcio = ["Marcio Caldas", 4500, 44, true];



pessoa.push(Erick);
pessoa.push(Ayres);
pessoa.push(Beatriz);
pessoa.push(Marcio);

pessoa.forEach(element => {
    if (element[3] == false) {
        console.log("não portador de diploma");
    } else {
        console.log("portador de diploma");
    }
});

console.table(pessoa);