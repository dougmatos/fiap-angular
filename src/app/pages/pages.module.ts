import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    LogoutComponent,
    ContactDeleteComponent
  ],
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ]
})
export class PagesModule { }
