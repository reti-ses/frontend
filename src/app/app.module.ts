import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CosaSonoComponent } from './components/cosa-sono/cosa-sono.component';
import { HeaderComponent } from './components/header/header.component';
import { CosaFareComponent } from './components/cosa-fare/cosa-fare.component';
import { GratuitaComponent } from './components/gratuita/gratuita.component';
import { DocumentazioneComponent } from './components/documentazione/documentazione.component';
import { PremessaComponent } from './components/premessa/premessa.component';
import { NewsCardComponent } from './components/cards/news/news.component';
import { CarouselModule } from 'ngx-bootstrap';
import { ProgrammaSocialeCardComponent } from './components/cards/programma-sociale/programma-sociale.component';
import { ProgettoCardComponent } from './components/cards/progetto/progetto.component';
import { PremessaComponent as PremessaCardComponent } from './components/cards/premessa/premessa.component';
import { ProgrammaSocialeComponent } from './components/programma-sociale/programma-sociale.component';
import { ProgettoComponent } from './components/progetto/progetto.component';
import { NewsComponent } from './components/news/news.component';
import { DatePipe } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CosaSonoComponent,
    HeaderComponent,
    CosaFareComponent,
    GratuitaComponent,
    DocumentazioneComponent,
    PremessaComponent,
    ProgrammaSocialeCardComponent,
    NewsCardComponent,
    ProgettoCardComponent,
    PremessaCardComponent,
    ProgrammaSocialeComponent,
    ProgettoComponent,
    NewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    PdfViewerModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
