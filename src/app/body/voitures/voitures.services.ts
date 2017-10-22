
import { Injectable } from '@angular/core';
import {Voiture} from "./voiture";

@Injectable()
export class VoituresServices {

  private voitures :Voiture[]  = [
    {
      id : 1,
      matricule : '123-MM-DK',
      marque : 'Audi',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyD3Y0ZCrqDgMW12nVuuiuqq8u_MyD7R3Xu_OFMvubYhf9ISr2A',
      imageStuff : ['','','']
    },
    {
      id : 2,
      matricule : '223-MM-DK',
      marque : 'Mercedes',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEo8F-R9jI9_YCdJ5XAGiYHHhgMkmivSIkZ5kYHvWl6Z-wZ2XmQ',
      imageStuff : ['','','']
    },
    {
      id : 3,
      matricule : '443-MM-DK',
      marque : 'BMW',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdllqr6rUxLY3Q4dfL18caPgPGKIme2juhNjsHHLkDNSvNPFwBw',
      imageStuff : ['','','']
    },
    {
      id : 4,
      matricule : '733-MM-DK',
      marque : 'Acura',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V5sEAe2Ihg368GtISuWvsvRNtfOUIh7gM0cHhNhbbQou_dJY',
      imageStuff : ['','','']
    },
    {
      id : 5,
      matricule : '733-MM-DK',
      marque : 'ford',
      img : 'assets/images/marques/ford' + '/ford_v1.png',
     imageStuff : ['assets/images/marques/ford/v1' + '/escape_1.jpg',
       'assets/images/marques/ford/v1' + '/escape_2.jpg',
       'assets/images/marques/ford/v1' + '/escape_3.jpg']
    },
    {
      id : 6,
      matricule : '733-MM-DK',
      marque : 'ford',
      img : 'assets/images/marques/ford' + '/ford_v2.png',
     imageStuff : ['assets/images/marques/ford/v2' + '/taurus_1.jpg',
                   'assets/images/marques/ford/v2' + '/taurus_2.jpg',
                    'assets/images/marques/ford/v2' + '/taurus_3.jpg',
                    'assets/images/marques/ford/v2' + '/taurus_4.jpg']
    },
    {
      id : 7,
      matricule : '733-MM-DK',
      marque : 'ford',
      img : 'assets/images/marques/ford' + '/ford_v3.jpeg',
     imageStuff : ['','','']
    },
    {
      id : 8,
      matricule : '733-MM-DK',
      marque : 'ford',
      img : 'assets/images/marques/ford' + '/ford_v4.jpg',
     imageStuff : ['','','']
    },
    {
      id : 9,
      matricule : '733-MM-DK',
      marque : 'ford',
      img : 'assets/images/marques/ford' + '/ford_v5.png',
     imageStuff : ['','','']
    }
  ]
  constructor(){

  }

  currentVoiture :Voiture[] = [

  ];


  getVoitures(){
    return this.voitures.slice();
  }

  getVoituresSelected(titreVoiture : string){
    for(var i=0; i<this.voitures.length;i++){
      if(this.voitures[i].marque === titreVoiture){
        this.currentVoiture.push(this.voitures[i]);
      }
    }
    return this.currentVoiture.slice();
  }
  getvoitureParId(idVoiture:number) {
    var num:number;
    for (var i = 0; i < this.voitures.length; i++) {
      if (this.voitures[i].id == idVoiture) {
        num=i;
      }

    }
    return this.voitures[num].imageStuff.slice();
  }
}
