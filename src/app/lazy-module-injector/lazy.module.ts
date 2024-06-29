import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyParentComponent } from './parent.component';
import { LazyChildComponent } from './child.component';
import { HelloService } from '../hello.service';

@NgModule({
  declarations: [LazyParentComponent, LazyChildComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LazyParentComponent,
      },
    ]),
  ],
  providers: [HelloService],
})
export class LazyModule {}
