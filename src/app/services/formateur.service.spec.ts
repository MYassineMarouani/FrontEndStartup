import { TestBed } from '@angular/core/testing';

import { FormateurService } from './formateur.service';

describe('FormateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormateurService = TestBed.get(FormateurService);
    expect(service).toBeTruthy();
  });
});
