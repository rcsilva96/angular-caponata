import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { HomeComponent } from './components/home/home.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'vendas', component: VendasComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'relatorio', component: RelatorioComponent},
  { path: 'estoque', component: ListarProdutosComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'criar-produto', component: CriarProdutoComponent},
  { path: 'editar-produto/:id', component: CriarProdutoComponent},
  { path: '**', component: NotfoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
