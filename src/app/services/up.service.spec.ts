import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { UpService } from './up.service';

describe('UpService', () => {
  let service: UpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],});
    service = TestBed.inject(UpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
