import { DocumentData } from '@angular/fire/firestore';

export class User {
    public id: string;
    public cpf: string;
    public email: string;
    public name: string;
    public cep: string;
    public rua: string;
    public ruaNome: string;
    public numero: string;
    public complemento: string;
    public enderecoCompleto: string;

    constructor() { }

    static create(id: string, data: DocumentData): User {

        const user = new User();
        user.id = id;
        user.cpf = data.cpf;
        user.email = data.email;
        user.name = data.name;
        user.cep = data.cep;
        user.rua = data.rua;
        user.ruaNome = data.ruaNome;
        user.numero = data.numero;
        user.complemento = data.complemento;
        user.enderecoCompleto = user.getEndereco();
        return user;
    }

    getEndereco(): string {
        return `${this.rua} ${this.ruaNome}, ${this.numero}`;
    }
}
