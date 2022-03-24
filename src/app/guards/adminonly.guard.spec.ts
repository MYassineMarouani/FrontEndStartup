import { TestBed, async, inject } from '@angular/core/testing';

import { AdminonlyGuard } from './adminonly.guard';

describe('AdminonlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminonlyGuard]
    });
  });

  it('should ...', inject([AdminonlyGuard], (guard: AdminonlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
