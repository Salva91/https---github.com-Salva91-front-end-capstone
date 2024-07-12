import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/guest.guard';

const routes: Routes = [
  { path: '', redirectTo: '/animali', pathMatch: 'full' }, // Redirige alla pagina degli animali quando il percorso è vuoto
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [GuestGuard],
    canActivateChild: [GuestGuard],
  },
  { path: 'animali', loadChildren: () => import('./animali/animali.module').then(m => m.AnimaliModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'blog2', loadChildren: () => import('./blog2/blog2.module').then(m => m.Blog2Module) },
  { path: 'adozione/:id', loadChildren: () => import('./adozione/adozione.module').then(m => m.AdozioneModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
