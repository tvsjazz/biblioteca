import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LivrosCrudComponent } from './views/livros-crud/livros-crud.component';
import { AdmComponent } from './views/adm/adm.component';
import { AcervoComponent } from './views/acervo/acervo.component';
import { AdicionarLivroComponent } from './views/adicionar-livro/adicionar-livro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'acervo',
    component: AcervoComponent
  },
  {
    path: 'adm',
    component: AdmComponent
  },
  {
    path: 'adicionar-livro',
    component: AdicionarLivroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}