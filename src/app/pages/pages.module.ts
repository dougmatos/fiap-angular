import { NgModule } from '@angular/core';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PagesModule { }
