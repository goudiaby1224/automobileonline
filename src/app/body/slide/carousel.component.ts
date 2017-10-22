import { Component ,OnInit } from '@angular/core';
import {CarouselConfig } from 'ngx-bootstrap/carousel';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from "@angular/router";
import {Voiture} from "../voitures/voiture";
import { VoituresServices } from '../voitures/voitures.services';


@Component({
  selector: 'demo-carousel-basic',
  templateUrl: './carousel.component.html',
  providers:[{provide:CarouselConfig,useValue:{interval:1500 , noPause:true }}]
})
export class DemoCarouseBasicComponent implements OnInit{
sub: Subscription;
private voiture:Voiture;
public myIntervalSlide:number=1500;
public activeSlideIndex:number=0;
public noWrapSlides:boolean = false;
private tab:any[];
id:number;
val: string;
vale:string;

constructor(private voitureServcie:VoituresServices , private route: Router, private activeRoute : ActivatedRoute)
{}

ngOnInit()
{
  this.sub=this.activeRoute.queryParams.subscribe(params=>{
    this.id=params['idVoiture'].slice();
      console.log(this.id);
    })
this.tab=this.voitureServcie.getvoitureParId(this.id).slice();
  console.log(this.tab[0]);
 /*this.val=this.voiture.marque;*/
}

}
