import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-parent',
  template: `
    Parent Component
    <div style="border: 1px solid red; padding: 10px">
      <app-lazy-child />
    </div>
  `,
})
export class LazyParentComponent {}
