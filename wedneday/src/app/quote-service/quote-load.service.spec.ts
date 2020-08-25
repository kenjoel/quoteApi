import { TestBed } from '@angular/core/testing';

import { QuoteLoadService } from './quote-load.service';

describe('QuoteLoadService', () => {
  let service: QuoteLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
