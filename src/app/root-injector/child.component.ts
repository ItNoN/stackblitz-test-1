import { Component, inject } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-child',
  template: `
    Child Component
    <div style="border: 1px solid red; padding: 10px">
      <b>Service was injected here and found in: {{hello.source}}</b>
    </div>
  `,
})
export class ChildComponent {
  constructor(public hello: HelloService) {}
}
