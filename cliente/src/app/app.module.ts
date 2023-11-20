import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    ListarProdutosComponent,
    SidebarComponent,
    HomeComponent,
    VendasComponent,
    CatalogoComponent,
    RelatorioComponent,
    SobreComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
