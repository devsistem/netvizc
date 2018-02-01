import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    
    AppRoutingModule
  ],
  declarations: [PublicComponent, HomeComponent],
  bootstrap: [PublicComponent]
})
export class PublicModule { }
