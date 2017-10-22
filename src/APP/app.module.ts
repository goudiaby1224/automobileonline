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
import {AcceuilComponent} from "./body/acceuil/acceuil.component";
import {VoituresServices} from "./body/voitures/voitures.services";
import { PiecesOccasionsComponent } from "./body/pieces/piecesOccasions/piecesOccasions.component";
import { PiecesNeuvesComponent } from "./body/pieces/piecesNeuves/piecesNeuves.component";
import {VoituresOccasionsComponent} from "./body/voitures/voituresOccasions/voituresOccasions.component";
import {VoituresNeuvesComponent} from "./body/voitures/voituresNeuves/voituresNeuves.component";
import {ServiceMarque} from "./body/marqueService/serviceMarque";
import { CarouselModule } from 'ngx-bootstrap';
import {DemoCarouseBasicComponent} from "./body/slide/carousel.component";
import {PieceVoitureComponent} from "./body/piecevoiture/piecevoiture.component";
import {CarosserieComponent} from "./body/pieces/carosserie/carosserie.component";
import {ServiceCarosserie} from "./body/pieces/carosserie/serviceCarosserie.service";
import {VitreComponent} from "./body/pieces/vitres/vitre.component";
import {VitreService} from "./body/pieces/vitres/vitre.service";


const appRoutes : Routes = [
  //{path : "",component : AcceuilComponent},
  {path : "",component : BodyComponent},
  {path : "piecesOccasions",component : PiecesOccasionsComponent},
  {path : "piecesNeuves",component : PiecesNeuvesComponent},
  {path : "voituresNeuves",component : VoituresNeuvesComponent},
  {path : "voituresOccasions",component : VoituresOccasionsComponent},
  {path : "slidePage",component : DemoCarouseBasicComponent},
  {path : "carosserie",component : CarosserieComponent},
  {path : "vitre",component : VitreComponent}
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
    VoituresOccasionsComponent,
    DemoCarouseBasicComponent,
    PieceVoitureComponent,
    CarosserieComponent,
    VitreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2DropdownModule,
    Ng2ImageGalleryModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
  ],
  providers: [ServiceMarque,VoituresServices,ServiceCarosserie,VitreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
