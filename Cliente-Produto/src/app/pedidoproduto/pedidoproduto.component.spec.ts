import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoprodutoComponent } from './pedidoproduto.component';

describe('PedidoprodutoComponent', () => {
  let component: PedidoprodutoComponent;
  let fixture: ComponentFixture<PedidoprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
