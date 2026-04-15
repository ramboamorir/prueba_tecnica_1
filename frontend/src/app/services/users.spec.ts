import { TestBed } from '@angular/core/testing';

import { UserServices } from './users';

describe('Usuarios', () => {
  let service: UserServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
