import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ParentComponent } from './root-injector/parent.component';
import { ParentNodeComponent } from './node-injector/parent-node.component';

export const ROUTES: Route[] = [
  {
    path: 'lazy',
    loadChildren: () =>
      import('./lazy-module-injector/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'root',
    component: ParentComponent,
  },
  {
    path: 'node',
    component: ParentNodeComponent,
  },
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'root',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
