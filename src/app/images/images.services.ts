import {OnInit} from "@angular/core";


export class ImageServices implements OnInit{

  private headerImagePath : string;

  constructor(){
     this.headerImagePath = "../assets/images/logo.jpg"
  }

  ngOnInit(){


  }

  getHeadermgPath(){
    return this.headerImagePath;
  }


}
