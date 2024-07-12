import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdozioneRoutingModule } from './adozione-routing.module';
import { AdozioneComponent } from './adozione.component';


@NgModule({
  declarations: [
    AdozioneComponent
  ],
  imports: [
    CommonModule,
    AdozioneRoutingModule
  ]
})
export class AdozioneModule { }
