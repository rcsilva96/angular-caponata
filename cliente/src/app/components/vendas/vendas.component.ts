import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css'],
  providers: [FormGroupDirective]
})
export class VendasComponent {
  vendasForm: FormGroup;
  totalCompra: number = 0;
  produtosComprados: Produto[] = [];

  constructor(private produtoService: ProdutoService,
              private fb: FormBuilder,
              private formGroupDirective: FormGroupDirective) {
    this.vendasForm = this.fb.group({
      codBarras: ['', Validators.required],
      preco: ['']
    });
  }

  buscarProduto() {

    if (this.vendasForm.valid) {
      const codBarras = this.vendasForm.value.codBarras;

      this.produtoService.buscarProdutoPorCodigoBarras(codBarras).subscribe(
        (produto) => {
          const qtdeVendida = 1; // Defina a quantidade desejada (pode ser dinâmica com base no formulário)

          this.vendasForm.patchValue({ preco: produto.preco });
          this.totalCompra += produto.preco;
          this.vendasForm.get('preco')?.disable();

          // Adicione o produto à lista de produtos comprados com a quantidade vendida
          this.produtosComprados.push({ ...produto, qtdeVendida });

          console.log('Produto encontrado:', produto);

          // Resetar o formulário para o estado inicial
          this.vendasForm.reset();
        },
        (error) => {
          console.error('Erro ao buscar produto:', error);
        }
      );
    }
  }

  verificarCodigoBarras() {
    const codBarras = this.vendasForm.value.codBarras;

    // Verifique se o código de barras atingiu seis caracteres
    if (codBarras.length === 6) {
      // Chame automaticamente o método buscarProduto
      this.buscarProduto();
    }
  }

  concluirCompra() {
    // Verifique se há produtos na lista de compras
    if (this.produtosComprados.length === 0) {
      console.error('Nenhum produto na lista de compras.');
      return;
    }

    // Chame a função para concluir a venda para cada produto na lista
    this.produtosComprados.forEach((produto) => {
      // Verifique se a quantidade vendida é válida
      if (!produto.qtdeVendida || produto.qtdeVendida <= 0) {
        console.error(`Quantidade inválida para o produto ${produto.nome}.`);
        return;
      }

      // Verifique se o produto tem um ID antes de chamar a função concluirVenda
      if (produto._id) {
        this.produtoService.concluirVenda(produto._id.toString(), produto.qtdeVendida).subscribe(
          () => {
            console.log(`Venda do produto ${produto.nome} concluída com sucesso!`);
            // Limpe a lista de produtos comprados e reinicie o total da compra
            this.produtosComprados = [];
            this.totalCompra = 0;
          },
          (error) => {
            console.error(`Erro ao concluir a venda do produto ${produto.nome}:`, error);
          }
        );
      } else {
        console.error(`ID do produto ${produto.nome} é undefined.`);
      }
    });
  }
}


