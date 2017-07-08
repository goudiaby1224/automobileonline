import {OnInit} from "@angular/core";

export class VoituresServices implements OnInit{

  private voitures  = [
    {
      id : 1,
      matricule : '123-MM-DK',
      marque : 'Audi',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyD3Y0ZCrqDgMW12nVuuiuqq8u_MyD7R3Xu_OFMvubYhf9ISr2A'
    },
    {
      id : 1,
      matricule : '223-MM-DK',
      marque : 'Mercedes',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEo8F-R9jI9_YCdJ5XAGiYHHhgMkmivSIkZ5kYHvWl6Z-wZ2XmQ'
    },
    {
      id : 1,
      matricule : '443-MM-DK',
      marque : 'BMW',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdllqr6rUxLY3Q4dfL18caPgPGKIme2juhNjsHHLkDNSvNPFwBw'
    },
    {
      id : 1,
      matricule : '733-MM-DK',
      marque : 'Acura',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V5sEAe2Ihg368GtISuWvsvRNtfOUIh7gM0cHhNhbbQou_dJY'
    }
  ]
  constructor(){

  }

  ngOnInit(){

  }

  getVoitures(){
    return this.voitures;
  }

}
