import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentesComponent } from './presentes.component';
import { PagamentoComponent } from './pagamento/pagamento.component';


const routes: Routes = [
  {path: '', component: PresentesComponent},
  {path: ':id', component: PagamentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
