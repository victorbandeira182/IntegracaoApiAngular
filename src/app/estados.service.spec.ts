import { TestBed } from '@angular/core/testing';

import { EstadosService } from './estados/estados.service';

describe('EstadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadosService = TestBed.get(EstadosService);
    expect(service).toBeTruthy();
  });
});
