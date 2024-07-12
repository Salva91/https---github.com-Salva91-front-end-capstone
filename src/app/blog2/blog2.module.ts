import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blog2RoutingModule } from './blog2-routing.module';
import { Blog2Component } from './blog2.component';


@NgModule({
  declarations: [
    Blog2Component
  ],
  imports: [
    CommonModule,
    Blog2RoutingModule
  ]
})
export class Blog2Module { }
