import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { FavoritoRoutingModule } from './favorito-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { HeadComponent } from './head/head.component';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    HeadComponent,
    
  ],
  imports: [
    CommonModule,
    FavoritoRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule
  ],
  exports: [HeadComponent]
})
export class FavoritoModule { }
