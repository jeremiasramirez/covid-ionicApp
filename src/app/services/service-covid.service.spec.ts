import { TestBed } from '@angular/core/testing';

import { ServiceCovidService } from './service-covid.service';

describe('ServiceCovidService', () => {
  let service: ServiceCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
