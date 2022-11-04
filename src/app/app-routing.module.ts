import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';
import { PresencaComponent } from './presenca/presenca.component';
import { PresentesComponent } from './presentes/presentes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'local', component: LocalComponent},
  {path: 'presenca', component: PresencaComponent},
  {path: 'presentes', component: PresentesComponent},
  {path: 'pagamento', loadChildren: () => import('./presentes/presentes-routing.module').then(m => m.AppRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
