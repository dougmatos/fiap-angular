import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({providedIn: 'root'})
export class ContactService {

    private collectionName = 'users';

    constructor(private db: AngularFirestore) {

    }

    getbyId(idDocument: string) {
        return this.db.collection(this.collectionName).doc(idDocument).snapshotChanges();
    }

    create(data: any) {
        return this.db.collection(this.collectionName).add(data);
    }

    update(idDocument: string, data: any) {
        return this.db.collection(this.collectionName).doc(idDocument).update(data);
    }

    delete(idContact: string) {
        return this.db.collection(this.collectionName).doc(idContact).delete();
    }

    getAll(): Observable<User[]> {
        return new Observable(subscriber =>
            this.db.collection(this.collectionName)
                .snapshotChanges().subscribe(data => subscriber.next(this.mapUsers(data)))
        );
    }

    private mapUsers(docs: DocumentChangeAction<{}>[]) {
        return docs.map(x => User.create(x.payload.doc.id, x.payload.doc.data()));
    }
}
