export class Produto {
  _id?: number;
  nome: string;
  categoria: string;
  local: string;
  codBarras: number;
  qtdeEstoque: number;
  preco: number;
  qtdeVendida?: number;

  constructor(nome: string, categoria: string, local: string, preco: number, codBarras: number, qtdeEstoque: number) {

    this.nome = nome;
    this.categoria = categoria;
    this.local = local;
    this.codBarras = codBarras;
    this.qtdeEstoque = qtdeEstoque;
    this.preco = preco;

  }
}
