import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListasComponent } from './listas/listas.component';
import { VistasComponent } from './vistas/vistas.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'vistas', component: VistasComponent },
  { path: 'list', component: ListasComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }