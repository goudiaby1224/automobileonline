import {OnInit, Component} from "@angular/core";
import {Input} from '@angular/core';

@Component({
  selector : 'app-acceuil',
  templateUrl : './acceuil.component.html',
  styleUrls : ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit{
  @Input() datasource;
  selectedImage;

  setSelectedImage(image)
  {
    this.selectedImage =image;
  }

  navigate(forward){
    var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
    if(index >= 0 && index < this.datasource.length){
      this.selectedImage = this.datasource[index];
    }
  }

  ngOnInit(){

  }
}
