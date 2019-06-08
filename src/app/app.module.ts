import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from "./compoments/header/header.component";
import { LoadingComponent } from "./compoments/loading/loading.component";

import { UserListPage } from "./pages/userList/userList.page";
import { UserPage } from './pages/user/user.page'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    UserListPage,
    UserPage,
    LoadingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
