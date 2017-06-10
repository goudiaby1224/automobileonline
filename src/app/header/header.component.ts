import { Component, OnInit } from '@angular/core';
import {ImageServices} from "../images/images.services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private LOGO : string;

  constructor(private imageServices : ImageServices) {
     this.LOGO = this.imageServices.getHeadermgPath();
  }

  ngOnInit() {
  }

}
