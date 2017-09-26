import { Component, OnInit } from '@angular/core';
import { Standings } from './standings';
import { StandingsService } from './standings.service';
@Component({
  selector: 'soccernews-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  standings: Standings[];

  constructor(private StandingsService: StandingsService) {}

  getStandings(): void {
    this.StandingsService.getStandings()
        .then(standings => this.standings = standings);
  }

  ngOnInit(): void {
    this.getStandings();
  }

}
