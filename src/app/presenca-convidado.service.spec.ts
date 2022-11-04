import { TestBed } from '@angular/core/testing';

import { PresencaConvidadoService } from './presenca-convidado.service';

describe('PresencaConvidadoService', () => {
  let service: PresencaConvidadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresencaConvidadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
