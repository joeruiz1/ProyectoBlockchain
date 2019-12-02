import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-crear-camisas',
  templateUrl: './crear-camisas.component.html',
  styleUrls: ['./crear-camisas.component.css']
})
export class CrearCamisasComponent implements OnInit {

 public id: string;
  constructor(private route: ActivatedRoute) {
  route.params.subscribe(
    params=>{this.id=params['id']})
  }

  ngOnInit() {
  }

}