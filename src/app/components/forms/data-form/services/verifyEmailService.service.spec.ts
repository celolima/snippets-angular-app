/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerifyEmailServiceService } from './verifyEmailService.service';

describe('Service: VerifyEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerifyEmailServiceService]
    });
  });

  it('should ...', inject([VerifyEmailServiceService], (service: VerifyEmailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
