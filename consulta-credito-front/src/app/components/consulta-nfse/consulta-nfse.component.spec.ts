import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaNfseComponent } from './consulta-nfse.component';

describe('ConsultaNfseComponent', () => {
  let component: ConsultaNfseComponent;
  let fixture: ComponentFixture<ConsultaNfseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaNfseComponent]
    });
    fixture = TestBed.createComponent(ConsultaNfseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
