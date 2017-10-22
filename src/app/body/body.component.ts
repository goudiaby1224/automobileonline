import {Component, OnInit} from '@angular/core';
import { ServiceMarque } from './marqueService/serviceMarque';
import { Marque } from './marqueService/marque';

@Component({
  selector : 'app-body',
  templateUrl :'./body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
public marques:Marque[];

  constructor(private serviceMarque : ServiceMarque)
  {

  }

ngOnInit()
{
this.marques=this.serviceMarque.getDataSource();
}
}
