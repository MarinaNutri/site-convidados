import { Injectable } from '@angular/core';
import { Convidado, convidados } from './convidado';

@Injectable({
  providedIn: 'root'
})
export class PresencaConvidadoService {
  convidado: Convidado[] = convidados;  
  constructor() { }
  getAll(){
    return this.convidado;
  }
  getOne(IdConvidado: number){
    return this.convidado.find(convidado => convidado.id == IdConvidado);
  }
}
