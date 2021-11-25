import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TablaPrecioComponent } from './tabla-precio/tabla-precio.component';
import { CompFooterComponent } from './comp-footer/comp-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaPrecioComponent,
    CompFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
