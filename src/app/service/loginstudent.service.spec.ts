import { TestBed } from '@angular/core/testing';

import { LoginstudentService } from './loginstudent.service';

describe('LoginstudentService', () => {
  let service: LoginstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
