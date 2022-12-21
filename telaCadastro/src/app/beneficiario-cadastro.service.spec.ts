import { TestBed } from '@angular/core/testing';

import { BeneficiarioCadastroService } from './beneficiario-cadastro.service';

describe('BeneficiarioCadastroService', () => {
  let service: BeneficiarioCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeneficiarioCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
