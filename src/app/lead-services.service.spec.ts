import { TestBed } from '@angular/core/testing';

import { LeadServicesService } from './lead-services.service';

describe('LeadServicesService', () => {
  let service: LeadServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
