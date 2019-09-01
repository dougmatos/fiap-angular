import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  public async login(email: string, password: string) {

    try {
      await this.fireAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/contacts']);
    } catch (error) {
      alert(error.message);
    }
  }

  public async register(email: string, name: string, password: string) {

    const result =  await this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    result.additionalUserInfo.username = name;
  }

  public async logout() {

    await this.fireAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  public isLogged(): Observable<boolean> {

    return new Observable<boolean>(subscribe => {
      this.fireAuth.authState.subscribe(user => {
        subscribe.next(user ? true : false);
      });
    });
  }
}
