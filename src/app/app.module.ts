import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

import { AppComponent } from './app.component';

import { UserListPage } from './pages/userList/userList.page';
import { UserPage } from './pages/user/user.page';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    OrderPipe,
    FilterPipe,
    AppComponent,
    UserListPage,
    UserPage
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
