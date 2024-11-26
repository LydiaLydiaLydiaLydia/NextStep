import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SightingsComponent } from './sightings/sightings.component';
import { VerificationPipe } from './verification.pipe';

import { HttpHeaders, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SightingsComponent,
    VerificationPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SightingsComponent]
})
export class AppModule { }
