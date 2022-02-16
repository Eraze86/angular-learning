import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AddAnimalsComponent } from './components/add-animals/add-animals.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    AddAnimalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
