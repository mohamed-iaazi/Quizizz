import { TestBed } from '@angular/core/testing';

import { GetquestionService } from './getquestion.service';

describe('GetquestionService', () => {
  let service: GetquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
