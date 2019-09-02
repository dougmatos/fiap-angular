import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { GuardGuard } from './services/guard.guard';
import { ContactDeleteComponent } from './pages/contact-delete/contact-delete.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'contacts', component: ContactListComponent, canActivate: [GuardGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [GuardGuard]},
  { path: 'contact/:id', component: ContactComponent, canActivate: [GuardGuard]},
  { path: 'contact/:id/delete', component: ContactDeleteComponent, canActivate: [GuardGuard] },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
