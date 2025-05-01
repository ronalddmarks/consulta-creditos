import { Component } from '@angular/core';
import { CreditoService } from 'src/app/services/credito.service';
import { Credito } from 'src/app/models/credito.model';

@Component({
  selector: 'app-consulta-nfse',
  templateUrl: './consulta-nfse.component.html',
  styleUrls: ['./consulta-nfse.component.css']
})
export class ConsultaNfseComponent {
  numeroNfse: string = '';
  creditos: Credito[] = [];
  erro: string | null = null;
  carregando = false;

  constructor(private creditoService: CreditoService) {}

  consultar() {
    this.erro = null;
    this.creditos = [];
    this.carregando = true;
  
    this.creditoService.getCreditosPorNfse(this.numeroNfse).subscribe({
      next: (data) => {
        this.creditos = data;
        this.carregando = false;
      },
      error: () => {
        this.erro = 'Erro ao buscar créditos. Verifique o número da NFS-e ou o servidor.';
        this.carregando = false;
      }
    });
  }
}
