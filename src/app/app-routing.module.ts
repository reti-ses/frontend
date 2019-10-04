import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CosaSonoComponent } from './components/cosa-sono/cosa-sono.component';
import { CosaFareComponent } from './components/cosa-fare/cosa-fare.component';
import { GratuitaComponent } from './components/gratuita/gratuita.component';
import { DocumentazioneComponent } from './components/documentazione/documentazione.component';
import { PremessaComponent } from './components/premessa/premessa.component';
import { ProgrammaSocialeComponent } from './components/programma-sociale/programma-sociale.component';
import { ProgettoComponent } from './components/progetto/progetto.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cosa-sono', component: CosaSonoComponent },
  { path: 'cosa-si-puo-fare', component: CosaFareComponent },
  { path: 'gratuita-del-progetto', component: GratuitaComponent },
  { path: 'documentazione', component: DocumentazioneComponent },
  { path: 'premessa', component: PremessaComponent },
  { path: 'programma-sociale', component: ProgrammaSocialeComponent },
  { path: 'progetto', component: ProgettoComponent },
  { path: 'notizie', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
