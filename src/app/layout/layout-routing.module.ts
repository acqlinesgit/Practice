import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { IndexComponent } from '../index/index.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'Index', component: IndexComponent },
      { path: '**', redirectTo: 'Index' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
