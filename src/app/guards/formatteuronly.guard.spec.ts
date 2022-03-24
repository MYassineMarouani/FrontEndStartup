import { TestBed, async, inject } from '@angular/core/testing';

import { FormatteuronlyGuard } from './formatteuronly.guard';

describe('FormatteuronlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormatteuronlyGuard]
    });
  });

  it('should ...', inject([FormatteuronlyGuard], (guard: FormatteuronlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
