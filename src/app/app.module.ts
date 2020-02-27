import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShivComponentComponent } from './shiv-component/shiv-component.component';

import { SamipComponent } from './samip/samip.component';

import { AmitChauhanComponent } from './amit-chauhan/amit-chauhan.component';
import { DhruvitComponent } from './dhruvit/dhruvit.component';


@NgModule({
  declarations: [
    AppComponent,

    ShivComponentComponent,

    SamipComponent,

    AmitChauhanComponent,
    DhruvitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
