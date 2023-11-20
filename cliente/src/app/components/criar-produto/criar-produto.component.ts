import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Router } from '@angular/router'
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.css'
})
export class CriarProdutoComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {

    this.produtoForm = this.fb.group({
      produto: ['', Validators.required],
      categoria: ['', Validators.required],
      local: ['', Validators.required],
      preco: ['', Validators.required],

    })

  }

  ngOnInit(): void {

  }

  adicionarProduto(){
    console.log(this.produtoForm)
    console.log(this.produtoForm.get('produto')?.value)

    const PRODUTO: Produto = {

      nome: this.produtoForm.get('produto')?.value,
      categoria: this.produtoForm.get('categoria')?.value,
      local: this.produtoForm.get('local')?.value,
      preco: this.produtoForm.get('preco')?.value,

    }

    console.log(PRODUTO);
    this.router.navigate(['/']);

  }

}
