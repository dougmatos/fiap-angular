import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPage } from './pages/userList/userList.page'
import { UserPage } from "./pages/user/user.page";

const routes: Routes = [
  {path: '', component: UserListPage},
  {path: 'user', component: UserPage},
  {path: 'user/:id', component: UserPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
