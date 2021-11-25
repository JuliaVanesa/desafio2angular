import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaPrecioComponent } from './tabla-precio/tabla-precio.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPrecioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
