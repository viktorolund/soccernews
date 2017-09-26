import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './standings/standings.component';
import { PlayerstatsComponent } from './playerstats/playerstats.component';
import { SortPipe } from './standings/sort.pipe';
import { StandingsService } from './standings/standings.service';
import { HighlightsComponent } from './highlights/highlights.component';
import { HighlightsDirective } from './highlights/highlights.directive';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    PlayerstatsComponent,
    SortPipe,
    HighlightsComponent,
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StandingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
