import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ShareModule } from '../share/share.module';
import { IndexComponent } from '../index/index.component';

@NgModule({
  declarations: [LayoutComponent, IndexComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule
  ]
})
export class LayoutModule { }
