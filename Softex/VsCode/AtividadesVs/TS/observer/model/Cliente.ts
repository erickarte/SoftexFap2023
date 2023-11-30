export class Cliente{
    nome : string;
    email : string;

    constructor(nome : string, email : string){
    this.nome = nome
    this.email = email
    }

    tostring() : string{
        return "Cliente" + this.nome +"de email" + this.email
    }
}