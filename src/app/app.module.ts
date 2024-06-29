import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './root-injector/parent.component';
import { ChildComponent } from './root-injector/child.component';
import { HelloService } from './hello.service';
import { ParentNodeComponent } from './node-injector/parent-node.component';
import { ChildNodeComponent } from './node-injector/child-node.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ParentNodeComponent,
    ChildNodeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HelloService],
})
export class AppModule {}
