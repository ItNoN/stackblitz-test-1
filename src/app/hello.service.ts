import { Injectable, Injector } from '@angular/core';

@Injectable()
export class HelloService {
  source: string = this.getSourceName();

  constructor(private readonly injector: Injector) {
    console.log(injector);
  }

  private getSourceName(): string {
    const injector = this.injector as any;

    if (injector.constructor.name === 'NodeInjector') {
      return `${injector.constructor.name} (${injector._tNode.value})`;
    }

    return injector.source;
  }
}
