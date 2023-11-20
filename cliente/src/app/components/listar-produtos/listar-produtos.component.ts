import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Observable } from 'rxjs';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent {

  listProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService ) {}

  ngOnInit(): void {

    this.obterProdutos()
  }

  obterProdutos(){

    this.produtoService.getProdutos().subscribe(data => {
      console.log(data);
      this.listProdutos = data;
    }, error => {
      console.log(error);
    })

  }

  deletarProduto(id: any){
    this.produtoService.deletarProduto(id).subscribe(data => {
      console.log('Produto deletado com sucesso');
      this.obterProdutos;
    }, error => {
      console.log(error)
    })
  }

}
