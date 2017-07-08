import {OnInit, Component} from "@angular/core";
import {VoituresServices} from "./voitures.services";

@Component({
  selector : 'app-voitures',
  templateUrl :'./voitures.component.html',
  styleUrls : ['./voitures.component.css']
})
export class VoituresComponent implements OnInit{

  public voitures ;
  constructor(private voituresServices : VoituresServices){

  }

  ngOnInit(){
     this.voitures = this.voituresServices.getVoitures();
  }
}
