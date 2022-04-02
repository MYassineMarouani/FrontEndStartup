import { TestBed } from '@angular/core/testing';

import { FeedbacksService } from './feedbacks.service';

describe('FeedbacksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbacksService = TestBed.get(FeedbacksService);
    expect(service).toBeTruthy();
  });
});
