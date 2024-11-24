import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SightingsComponent } from './sightings/sightings.component';

@NgModule({
  declarations: [
    SightingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SightingsComponent]
})
export class AppModule { }
