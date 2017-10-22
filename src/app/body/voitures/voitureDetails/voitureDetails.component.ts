import {Component,OnInit} from "@angular/core";

@Component({
  selector : 'app-voiture',
  templateUrl : './voiture'
})
export class VoitureComponent implements OnInit{

  private id : number;
  private matricule : string;
  private marque : string;
  private img : string;

  constructor(){

  }
  ngOnInit(){

  }
}
