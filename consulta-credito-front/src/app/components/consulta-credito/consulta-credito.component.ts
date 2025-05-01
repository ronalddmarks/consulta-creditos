import { Component } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import { Credito } from 'src/app/models/credito.model';



@Component({
  selector: 'app-consulta-credito',
  templateUrl: './consulta-credito.component.html',
  styleUrls: ['./consulta-credito.component.css']
})
export class ConsultaCreditoComponent {
  numeroCredito = '';
  credito?: Credito;
  erro = '';
  carregando = false;

  constructor(private creditoService: CreditoService) {}
 
  consultar() {
    this.erro = '';
    this.credito = undefined;
    this.carregando = true;
  
    this.creditoService.getCreditoPorNumero(this.numeroCredito).subscribe({
      next: (data) => {
        this.credito = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Crédito não encontrado ou erro na requisição.';
        this.carregando = false;
      }
    });
  }
}
