import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    TablaComponent,
    RestaurantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
