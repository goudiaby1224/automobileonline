import {Component, OnInit} from "@angular/core";
import {ServiceCarosserie} from "./serviceCarosserie.service";
import {Router} from "@angular/router";

@Component({
  selector : 'app-carosserie',
  templateUrl : './carosserie.component.html',
  styleUrls : ['./carosserie.component.css']
})
export class CarosserieComponent implements  OnInit{

  /**
   * Stocke la liste des elmenets constitutifs du domaine de la carosserie
   */
  carosserieSource =[
    {
      nom :"NOM 1",
      description:" description 1",
      uri : "uri"
    },
    {
      nom :"Nom 2",
      description: "Carosserie 2",
      uri : "uri"
    },{
      nom :"NOM 3",
      description:"Carosserie 3",
      uri : "uri"
    },{
      nom :"NOM 4",
      description:"Carosserie 4"
    },{
      nom :"NOM 5",
      description:"Carosserie 5",
      uri : "uri"
    },{
      nom :"NOM 6",
      description:"Carosserie 6",
      uri : "uri"
    }
  ];


  public constructor(private serviceCarosserie: ServiceCarosserie, private router: Router)
  {

  }

  ngOnInit(){
  }

  setSelectedImage(title:string)
  {
  }

}
