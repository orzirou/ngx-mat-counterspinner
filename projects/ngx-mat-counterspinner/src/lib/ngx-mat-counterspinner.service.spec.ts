import { TestBed } from '@angular/core/testing';

import { NgxMatCounterspinnerService } from './ngx-mat-counterspinner.service';

describe('NgxMatCounterspinnerService', () => {
  let service: NgxMatCounterspinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatCounterspinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
