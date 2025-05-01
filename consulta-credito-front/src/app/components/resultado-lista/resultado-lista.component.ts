import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultado-lista',
  templateUrl: './resultado-lista.component.html',
  styleUrls: ['./resultado-lista.component.css']
})
export class ResultadoListaComponent implements OnInit {
  numeroNfse!: string;
  creditos: any[] = [];
  erro: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.numeroNfse = this.route.snapshot.paramMap.get('numeroNfse') || '';
    this.buscarCreditos();
  }

  buscarCreditos(): void {
    this.http.get<any[]>(`http://localhost:8080/api/creditos/${this.numeroNfse}`)
      .subscribe({
        next: (data) => this.creditos = data,
        error: (err) => this.erro = 'Erro ao buscar créditos. Verifique o número da NFS-e ou tente novamente mais tarde.'
      });
  }
}
