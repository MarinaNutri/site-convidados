import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itens } from 'src/app/itens';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})

export class PagamentoComponent implements OnInit {
  presente: Itens | undefined;
  quantidade: number = 1;
  
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const IdProduto = Number(routeParams.get('id'));
    this.presente = this.produtosService.getOne(IdProduto);
  }

  calculoPrecoFinal(precoUnitario: any, precoFinal: any){
  precoUnitario = this.presente?.preco ;
  precoFinal = precoUnitario * this.quantidade;
  return (precoFinal);
  }
}
