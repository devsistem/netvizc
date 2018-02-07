import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArmadoOfertasComponent } from './pages/armado-ofertas/armado-ofertas.component';

@NgModule({
  imports: [
    CommonModule,
    
    AppRoutingModule
  ],
  declarations: [HomeComponent, ArmadoOfertasComponent]
})
export class PublicModule { }
