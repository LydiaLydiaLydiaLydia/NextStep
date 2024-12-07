import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SightingsComponent } from './sightings/sightings.component';
import { VerificationPipe } from './verification.pipe';

@NgModule({
  declarations: [
    SightingsComponent,
    VerificationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SightingsComponent]
})
export class AppModule { }
