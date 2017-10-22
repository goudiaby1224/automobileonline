import {OnInit, Component} from '@angular/core';
import {ServiceMarque} from "../marqueService/serviceMarque";
import { Marque } from "../marqueService/marque";
import { Router } from '@angular/router';
@Component({
  selector : 'app-acceuil',
  templateUrl : './acceuil.component.html',
  styleUrls : ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  public marques:Marque[];

   constructor(private serviceMarque: ServiceMarque, private router: Router)
   {

   }

    ngOnInit(){
      this.marques=this.serviceMarque.getDataSource();
    }

    setSelectedImage(title:string)
    {
       this.router.navigate(['voituresNeuves'], { queryParams: { logo:title }});
    }
}
