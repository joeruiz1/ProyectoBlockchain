import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{RouterModule,Routes}from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ProyectoComponent} from '../proyecto/proyecto.component';
import {ProyectoRegistroComponent} from '../proyecto-registro/proyecto-registro.component';
import{ProyectoServiciosComponent} from '../proyecto-servicios/proyecto-servicios.component';
import{ComprarTokensComponent} from '../comprar-tokens/comprar-tokens.component';
import{IngresoComponent} from '../ingreso/ingreso.component';
import { RegistrarEquipoComponent } from './registrar-equipo/registrar-equipo.component';
import { CrearCamisasComponent } from './crear-camisas/crear-camisas.component';

const appRoutes:Routes=[
  {path:'',component:IngresoComponent},
  {path :'proyecto',component:ProyectoComponent},
  {path:'proyecto-registro',component:ProyectoRegistroComponent},
  {path:'proyecto-servicios',component:ProyectoServiciosComponent},
  {path:'comprar-tokens',component:ComprarTokensComponent},
  {path:'ingreso',component:IngresoComponent},
  {path:'proyecto-registro',component:ProyectoRegistroComponent},
  {path:'registrar-equipo',component:RegistrarEquipoComponent},
  {path:'crear-camisas',component:CrearCamisasComponent}

]


@NgModule({
  imports:      [ BrowserModule, FormsModule,  
  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent,ProyectoComponent,ProyectoRegistroComponent,ProyectoServiciosComponent,ComprarTokensComponent,IngresoComponent, RegistrarEquipoComponent, CrearCamisasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {



 }
