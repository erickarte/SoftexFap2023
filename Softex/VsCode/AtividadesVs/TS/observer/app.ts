import { Cliente } from "./model/Cliente";
import { Loja } from "./model/Loja";
import { Observer } from "./model/Observer";

var joao = new Cliente("João Vitor", "jvm@softex.com.br");
var rodrigo = new Cliente("Rodrigo Duarte", "rdssoftex.com.br");
var thiago = new Cliente ("Thiago Jomar", "tjf@softes.com.br")

var nadjaImports = new Loja("Nadja Imports", "Muamba");

Observer.addCliente(joao);
Observer.addCliente(rodrigo);
Observer.addCliente(thiago);

nadjaImports.publicarNovoProduto("Iphone 15 Pro Max 512gb - R$ 15.000,00");