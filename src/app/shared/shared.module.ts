import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonLogoutComponent } from './components/button-logout/button-logout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    FilterPipe,
    OrderPipe,
    ButtonLogoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    FilterPipe,
    OrderPipe,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ]
})
export class SharedModule { }
