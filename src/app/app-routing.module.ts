import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { HighlightsComponent } from './highlights/highlights.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'standings' },
  { path: 'standings', component: StandingsComponent },
  { path: 'playerstats', component: PlayerstatsComponent },
  { path: 'highlights', component: HighlightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
