import {OnInit, Component} from "@angular/core";
import {VoituresServices} from "../voitures.services";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector : 'app-voiture',
  templateUrl : './voiture.component.html',
  styleUrls:['./voiture.component.css']
})
export class VoitureComponent implements OnInit{
  private voiture : {
    id : number,
    matricule : string,
    marque : string,
    img : string
  }



  constructor(private voitureServices : VoituresServices,private activatedRoute : ActivatedRoute){



  }

  ngOnInit(){
    const id = +this.activatedRoute.snapshot.params['id'];
    this.voiture = this.voitureServices.getVoiture(id);
    this.activatedRoute.params.subscribe(
      (params : Params)=>{
        this.voiture = this.voitureServices.getVoiture(+params['id']);
      }
    );

  }

  onUpdateVoiture(){

  }
}
