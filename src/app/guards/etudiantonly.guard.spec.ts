import { TestBed, async, inject } from '@angular/core/testing';

import { EtudiantonlyGuard } from './etudiantonly.guard';

describe('EtudiantonlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtudiantonlyGuard]
    });
  });

  it('should ...', inject([EtudiantonlyGuard], (guard: EtudiantonlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
