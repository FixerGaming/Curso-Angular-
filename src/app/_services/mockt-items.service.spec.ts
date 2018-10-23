import { TestBed } from '@angular/core/testing';

import { MocktItemsService } from './mockt-items.service';

describe('MocktItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MocktItemsService = TestBed.get(MocktItemsService);
    expect(service).toBeTruthy();
  });
});
