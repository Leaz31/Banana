import { TestBed } from '@angular/core/testing';

import { CleanerService } from './cleaner.service';

describe('RoadToBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CleanerService = TestBed.get(CleanerService);
    expect(service).toBeTruthy();
  });
});
