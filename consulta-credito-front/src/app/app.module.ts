import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaNfseComponent } from './components/consulta-nfse/consulta-nfse.component';
import { ConsultaCreditoComponent } from './components/consulta-credito/consulta-credito.component';
import { ResultadoListaComponent } from './components/resultado-lista/resultado-lista.component';
import { ResultadoDetalheComponent } from './components/resultado-detalhe/resultado-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaCreditoComponent,
    ConsultaNfseComponent,
    ResultadoListaComponent,
    ResultadoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
