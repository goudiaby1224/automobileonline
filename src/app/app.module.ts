import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { Ng2ImageGalleryModule} from 'ng2-image-gallery';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from "./menu/menu.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {VoituresServices} from "./body/voitures/voitures.services";
import { PiecesOccasionsComponent } from "./body/pieces/piecesOccasions/piecesOccasions.component";
import { PiecesNeuvesComponent } from "./body/pieces/piecesNeuves/piecesNeuves.component";
import {VoituresOccasionsComponent} from "./body/voitures/voituresOccasions/voituresOccasions.component";
import {VoituresNeuvesComponent} from "./body/voitures/voituresNeuves/voituresNeuves.component";
import {ServiceMarque} from "./body/marqueService/serviceMarque";


const appRoutes : Routes = [
  {path : "",component : AcceuilComponent},
  {path : "piecesOccasions",component : PiecesOccasionsComponent},
  {path : "piecesNeuves",component : PiecesNeuvesComponent},
  {path : "voituresNeuves",component : VoituresNeuvesComponent},
  {path : "voituresOccasions",component : VoituresOccasionsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AcceuilComponent,
    BodyComponent,
    FooterComponent,
    PiecesOccasionsComponent,
    PiecesNeuvesComponent,
    VoituresNeuvesComponent,
    VoituresOccasionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DropdownModule,
    Ng2ImageGalleryModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceMarque,VoituresServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
