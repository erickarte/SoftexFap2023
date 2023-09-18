class Pessoa{
    contrutctor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.filhos = new ListaEncadeada();
    }
}

var listaPessoas = new ListaEncadeada();

var Ayres = new Pessoa("Ayres Neto", 81);
var Valeria = new Pessoa("Sandra Valeria", 58);
var Eduardo = new Pessoa("Eduardo Vieira", 68);

listaPessoas.addNoFim(Ayres);
listaPessoas.addNoFim(Valeria);
listaPessoas.addNoFim(Eduardo);

var Erick = new Pessoa("Erick Lopes", 41);
Ayres.filhos.addNoFim(Erick);
var Roberta = new Pessoa("Roberta Lopes", 38);
Valeria.filhos.addNoFim(Roberta);
var Amaro = new Pessoa("Amaro Vieira", 41);
Eduardo.filhos.addNoFim(Amaro);

Ayres.filhos.exibirNos();