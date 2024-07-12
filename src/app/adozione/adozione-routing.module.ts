import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdozioneComponent } from './adozione.component';

const routes: Routes = [{ path: '', component: AdozioneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdozioneRoutingModule { }
