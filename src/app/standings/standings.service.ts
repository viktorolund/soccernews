import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { STANDINGS } from './mock-standings';
import { Standings } from './standings';
import { environment } from '../../environments/environment';

@Injectable()
export class StandingsService {

  private standingsUrl = 'api/standings';

  constructor(private http: Http) { }

  getStandings(): Promise<Standings[]> {
    if (!environment.production) {
      return Promise.resolve(STANDINGS);
    }

    return this.http
            .get(this.standingsUrl)
            .toPromise()
            .then(response => response.json() as Standings[])
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error has occured', error);
    return Promise.reject(error.message || error);
  }
}
