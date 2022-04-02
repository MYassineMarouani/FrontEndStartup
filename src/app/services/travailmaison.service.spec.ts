import { TestBed } from '@angular/core/testing';

import { TravailmaisonService } from './travailmaison.service';

describe('TravailmaisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravailmaisonService = TestBed.get(TravailmaisonService);
    expect(service).toBeTruthy();
  });
});
