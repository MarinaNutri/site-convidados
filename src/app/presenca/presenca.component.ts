import { Component, OnInit } from '@angular/core';
import { Convidado } from '../convidado';
import { PresencaConvidadoService } from '../presenca-convidado.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  icoPresenca = '/assets/presenca.png'
  
  convidados: Convidado[] | undefined;  

  telefone = '';
  
  confirmados =[];

  constructor(
    private presencaConvidadoService : PresencaConvidadoService,
  ) { }

  ngOnInit(): void {
    this.convidados = this.presencaConvidadoService.getAll();
  }

  handleOptionSelected(telefone: any): void {
    //this.telefone = telefone;
    console.log(telefone);
    
}
  confirmarPresenca(){
    let numero = prompt("Digite seu número de celular", "48999999999")
    console.log(this.telefone, numero)
    if(numero === this.telefone){
      this.confirmados.push();
      alert("Sua presença foi confirmada");
    } else {
      alert("Número errado, tente novamente.")
    }
  }
}

