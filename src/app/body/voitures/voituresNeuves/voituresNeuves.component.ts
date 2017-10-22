import {Component, OnInit} from "@angular/core";
import { VoituresServices }  from '../voitures.services';
import { Voiture } from '../voiture';
import { Subscription } from 'rxjs/Subscription'
import {ActivatedRoute, Router} from "@angular/router";
import {CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector : 'voitures-neuves',
  templateUrl : './voituresNeuves.component.html',
  styleUrls : ['./voituresNeuves.component.css'],
  providers:[{provide:CarouselConfig,useValue:{interval:1500 , noPause:true }}]
})
export class VoituresNeuvesComponent implements OnInit
{private titre:string;
  private voitures:Voiture[];
 sub :Subscription;
constructor(private serviceVoiture:VoituresServices, private router: Router, private route:ActivatedRoute)
{

}

ngOnInit()
{
  this.sub=this.route.queryParams.subscribe(params=>{
    this.titre=params['logo'];
  })
this.voitures=this.serviceVoiture.getVoituresSelected(this.titre);
}
  selectedImage(idVoiture : number)
{
this.router.navigate(['slidePage'],{queryParams: { idVoiture:idVoiture }})
}

}
