import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [HeaderComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, LoadingComponent]
})
export class SharedModule { }
