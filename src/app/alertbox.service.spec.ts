import { TestBed, inject } from '@angular/core/testing';

import { AlertboxService } from './alertbox.service';

describe('AlertboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertboxService]
    });
  });

  it('should be created', inject([AlertboxService], (service: AlertboxService) => {
    expect(service).toBeTruthy();
  }));
});
