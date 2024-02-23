import { TestBed } from '@angular/core/testing';

import { LoginemployeeService } from './loginemployee.service';

describe('LoginemployeeService', () => {
  let service: LoginemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
