import {OnInit, Component} from "@angular/core";
import {Input} from '@angular/core';
import { LogoMarqueService}   from "./logoMarque.service" ;

@Component({
  selector : 'app-acceuil',
  templateUrl : './acceuil.component.html',
  styleUrls : ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{

  //@Input() datasource;
  private selectedImage;

  private dataSource  = [] ;

  constructor(private  logoMarqueService : LogoMarqueService){

  }

  ngOnInit(){
       this.dataSource =  this.logoMarqueService.getLogosMarque();
  }
  setSelectedImage(image)
  {

    //Effectuer une navigation vers la liste des voitures correspondant  a limage passe en parametre
    this.selectedImage = image;
  }

/*
  navigate(forward){
    var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.datasource.length){
      this.selectedImage = this.datasource[index];
    }
  }
  */



}
