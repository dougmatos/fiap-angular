import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from '@angular/fire/firestore';

import { uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class UserService{
    constructor(
        private http: HttpClient,
        private db: AngularFirestore
    ){ }


    getbyId(id: string){
        return this.db.collection('users').doc(id).snapshotChanges();
    }

    create(data){
        return this.db.collection('users').add(data);
    }
}