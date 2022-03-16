import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
 import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HeadComponent } from './head/head.component'; 


const routes: Routes = [
  { path: 'favorito', redirectTo: 'favorito/index', pathMatch: 'full'},
  { path: 'favorito/index', component: IndexComponent },
   { path: 'favorito/:favoritoId/view', component: ViewComponent },
  { path: 'favorito/create', component: CreateComponent },
  { path: 'favorito/:favoritoId/edit', component: EditComponent },
  { path: 'favorito/head', component: HeadComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritoRoutingModule { }
