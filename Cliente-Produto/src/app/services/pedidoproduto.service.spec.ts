import { TestBed } from '@angular/core/testing';

import { PedidoprodutoService } from './pedidoproduto.service';

describe('PedidoprodutoService', () => {
  let service: PedidoprodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoprodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
