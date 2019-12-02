import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

 public correo: string;
 public contrasenia :string;
  constructor(private route: ActivatedRoute) {
  route.params.subscribe(
    params=>{this.correo=params['usuario'],this.contrasenia=params['contrasena']})

  }
  ngOnInit() {
  }

}