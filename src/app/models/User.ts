import { DocumentData } from "@angular/fire/firestore";

export class User{
    public id : string;
    public name: string;
    public age: number;
    public email: string;
    public phone: string;

    constructor(){

    }

    static create(id: string, data: DocumentData): User{

        let user = new User();
        user.id = id;
        user.name = data['name'];
        user.age = data['age'];
        user.email = data['email'];
        user.phone = data['phone'];

        return user;
    }

}