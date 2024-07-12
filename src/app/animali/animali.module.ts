import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaliRoutingModule } from './animali-routing.module';
import { AnimaliComponent } from './animali.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnimaliComponent


  ],
  imports: [
    CommonModule,
    AnimaliRoutingModule,
    FormsModule,


  ]
})
export class AnimaliModule { }
