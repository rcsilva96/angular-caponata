import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { ActivatedRoute, Router } from '@angular/router'
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.css'
})
export class CriarProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  titulo = 'Criar produto';
  id: string | null ;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _produtoService: ProdutoService,
              private aRouter: ActivatedRoute) {

    this.produtoForm = this.fb.group({
      produto: ['', Validators.required],
      categoria: ['', Validators.required],
      local: ['', Validators.required],
      codBarras: ['', Validators.required],
      qtdeEstoque: ['', Validators.required],
      preco: ['', Validators.required],

    })

    this.id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.eEditavel();
  }

  adicionarProduto(){
    console.log(this.produtoForm)
    console.log(this.produtoForm.get('produto')?.value)

    const PRODUTO: Produto = {

      nome: this.produtoForm.get('produto')?.value,
      categoria: this.produtoForm.get('categoria')?.value,
      local: this.produtoForm.get('local')?.value,
      codBarras: this.produtoForm.get('codBarras')?.value,
      qtdeEstoque: this.produtoForm.get('qtdeEstoque')?.value,
      preco: this.produtoForm.get('preco')?.value,

    }

    if(this.id !== null) {

      // Editando o produto

      this._produtoService.editarProduto(this.id, PRODUTO).subscribe(data => {

        console.log('Produto editado com sucesso!');
        this.router.navigate(['/estoque']);

      }, error => {
        console.log(error);
        this.produtoForm.reset();

      })

      } else {

      // Adicionamos um novo produto

      console.log(PRODUTO);
      this._produtoService.salvarProduto(PRODUTO).subscribe(data => {
        console.log('Produto adicionado com sucesso!')
      }, error => {
        console.log(error);
        this.produtoForm.reset();
      })
      this.router.navigate(['/estoque']);

    }

  }

  eEditavel(){

    if(this.id !== null) {
      this._produtoService.obterProduto(this.id).subscribe(data => {
        this.produtoForm.setValue({

          produto: data.nome,
          categoria: data.categoria,
          local: data.local,
          codBarras: data.codBarras,
          qtdeEstoque: data.qtdeEstoque,
          preco: data.preco

        })
      })
    }

  }

}
