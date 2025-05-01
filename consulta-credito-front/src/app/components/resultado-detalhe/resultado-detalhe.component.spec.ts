import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDetalheComponent } from './resultado-detalhe.component';

describe('ResultadoDetalheComponent', () => {
  let component: ResultadoDetalheComponent;
  let fixture: ComponentFixture<ResultadoDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoDetalheComponent]
    });
    fixture = TestBed.createComponent(ResultadoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
