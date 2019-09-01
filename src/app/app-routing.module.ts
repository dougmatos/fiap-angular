import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path: '',  component: UserListComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
