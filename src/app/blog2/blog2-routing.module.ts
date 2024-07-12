import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog2Component } from './blog2.component';

const routes: Routes = [{ path: '', component: Blog2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blog2RoutingModule { }
