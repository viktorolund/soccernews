import { TestBed, inject } from '@angular/core/testing';

import { StandingsService } from './standings.service';

describe('StandingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StandingsService]
    });
  });

  it('should be created', inject([StandingsService], (service: StandingsService) => {
    expect(service).toBeTruthy();
  }));
});
