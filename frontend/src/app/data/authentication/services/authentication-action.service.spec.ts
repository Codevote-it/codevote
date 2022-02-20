import { TestBed } from '@angular/core/testing';

import { AuthenticationActionService } from './authentication-action.service';

describe('AuthenticationActionService', () => {
  let service: AuthenticationActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
