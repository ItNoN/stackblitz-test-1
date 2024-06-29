import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-node',
  template: `
    Parent Component
    <div style="border: 1px solid red; padding: 10px">
      <app-child-node />
    </div>
  `,
})
export class ParentNodeComponent {}
