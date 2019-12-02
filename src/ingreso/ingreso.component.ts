import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {



public correo: string;
 public contrasenia :string;
  constructor(private route: ActivatedRoute) {
  route.params.subscribe(
    params=>{this.correo=params['usuario'],this.contrasenia=params['contrasena']})

  }



  ngOnInit() {
  }

}