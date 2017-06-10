import {OnInit} from "@angular/core";
import {VoituresServices} from "../voitures.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector:'app-voiture-edit',
  templateUrl : './voiture-edit.component.html',
  styleUrls: ['./voiture-edit.component.css']
})
export class VoitureEditComponent implements OnInit{

  private voiture : {
    id : number,
    matricule : string,
    marque : string,
    img : string
  }


  contructor(){

  }


  ngOnInit(private voitureservices : VoituresServices, private activatedRoute : ActivatedRoute){

  }

  /**
   * Permet d'effectuer l'edition des  des donnees d'une voiture
   * @param id
   */
  onEdit(id : number){

  }
}
