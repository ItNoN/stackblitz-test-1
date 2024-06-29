import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Parent Component
    <div style="border: 1px solid red; padding: 10px">
      <app-child />
    </div>
  `,
})
export class ParentComponent {}
