import { Cliente } from "./cliente";
import { Funcionario } from "./funcionario";
import { midia } from "./midia";


export class Locacao{

private id: number;
private dataLocacao: Date;
private dataPrevista: Date;
private dataDevolucao: Date;
private valorTotal: number;
private multa?: number;
private formaPag: string;
private funcionario: Funcionario;
private cliente: Cliente
private midias: Array<Object>

}  