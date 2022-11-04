import { Component, OnInit } from '@angular/core';
import { Itens } from '../itens';
import { ProdutosService } from '../produtos.service';


@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {
  presentes: Itens[] | undefined;
  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.presentes = this.produtosService.getAll();
  }
  
  

}
