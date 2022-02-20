import { TestBed } from '@angular/core/testing';

import { AuthenticationSelectorService } from './authentication-selector.service';

describe('AuthenticationSelectorService', () => {
  let service: AuthenticationSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
