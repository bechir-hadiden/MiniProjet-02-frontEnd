import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { departementGuard } from './departement.guard';

describe('departementGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => departementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
