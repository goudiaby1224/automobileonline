import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from "./menu/menu.component";
import {BodyComponent} from "./body/body.component";
import {FooterComponent} from "./footer/footer.component";
import {ImageServices} from "./images/images.services";
import {Routes, RouterModule} from "@angular/router";
import {VoituresComponent} from "./body/voitures/voitures.component";
import {PiecesComponent} from "./body/pieces/pieces.component";
import {AcceuilComponent} from "./body/acceuil/acceuil.component";
import {VoituresServices} from "./body/voitures/voitures.services";
import {VoitureComponent} from "./body/voitures/voiture/voiture.component";

const appRoutes : Routes = [
  {path: " " , component : AcceuilComponent},
  {path : "voitures",component : VoituresComponent},
  {path : "voitures/:id",component : VoitureComponent},
  {path : "pieces",component : PiecesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    VoituresComponent,
    PiecesComponent,
    AcceuilComponent,
    VoitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageServices,VoituresServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
