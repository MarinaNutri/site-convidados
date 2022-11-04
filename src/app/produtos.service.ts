import { Injectable } from '@angular/core';
import { item, Itens } from './itens';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  presentes: Itens[] = item;
  constructor() { }
  getAll(){
    return this.presentes;
  }
  getOne(IdProduto: number){
    return this.presentes.find(presente => presente.id == IdProduto);
  }
}
