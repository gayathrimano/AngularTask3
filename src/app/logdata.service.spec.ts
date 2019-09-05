import { TestBed } from '@angular/core/testing';

import { LogdataService } from './logdata.service';

describe('LogdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogdataService = TestBed.get(LogdataService);
    expect(service).toBeTruthy();
  });
});
