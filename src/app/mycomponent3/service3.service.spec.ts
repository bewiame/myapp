/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Service3Service } from './service3.service';

describe('Service: Service3', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service3Service]
    });
  });

  it('should ...', inject([Service3Service], (service: Service3Service) => {
    expect(service).toBeTruthy();
  }));
});
