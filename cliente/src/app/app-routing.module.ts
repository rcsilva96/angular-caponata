import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';

const routes: Routes = [
  { path: '', component: ListarProdutosComponent},
  { path: 'criar-produto', component: CriarProdutoComponent},
  { path: 'editar-produto/:id', component: CriarProdutoComponent},
  { path: '**', component: ListarProdutosComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
