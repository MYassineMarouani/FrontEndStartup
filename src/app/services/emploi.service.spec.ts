import { TestBed } from '@angular/core/testing';

import { EmploiService } from './emploi.service';

describe('EmploiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmploiService = TestBed.get(EmploiService);
    expect(service).toBeTruthy();
  });
});
