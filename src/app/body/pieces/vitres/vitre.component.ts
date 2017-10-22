import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {VitreService} from "./vitre.service";

@Component({
  selector : 'app-vitre',
  templateUrl : './vitre.component.html',
  styleUrls : ['./vitre.component.css']
})
export class VitreComponent implements  OnInit{

  /**
   * Stocke la liste des elmenets constitutifs du domaine de la carosserie
   */
  VitreSource =[
    {
      nom :"NOM 1",
      description:" description 1"
    },
    {
      nom :"Nom 2",
      description: "Carosserie 2"
    },{
      nom :"NOM 3",
      description:"Carosserie 3"
    },{
      nom :"NOM 4",
      description:"Carosserie 4"
    },{
      nom :"NOM 5",
      description:"Carosserie 5"
    },{
      nom :"NOM 6",
      description:"Carosserie 6"
    }
  ];


  public constructor(private serviceVitre: VitreService, private router: Router)
  {

  }

  ngOnInit(){
  }

  setSelectedImage(title:string)
  {
  }

}
