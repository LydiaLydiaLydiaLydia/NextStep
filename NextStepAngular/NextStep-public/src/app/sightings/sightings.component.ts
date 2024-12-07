import { Component, OnInit } from '@angular/core';
import { NextstepDataService } from '../next-step-data.service';

export class Sighting {
  title!: string;
  postedBy!:string;
  text!: string;
  timePosted!: Date;
  coords!: number[];
  verifiedBy!: string[];
  mainPic!: string;
  bigPics!: string[];
}

@Component({
  selector: 'app-sightings',
  standalone: false,
  
  templateUrl: './sightings.component.html',
  styleUrl: './sightings.component.css',

  providers: [NextstepDataService]
})
export class SightingsComponent implements OnInit{
  constructor(private nextStepDataService: NextstepDataService) {}
  
  sightings!: Sighting[];
  
  private getSightings(): void {
    this.nextStepDataService
      .getSightings()
      .then(foundSightings => {
        this.sightings = foundSightings;
      });
  }

  ngOnInit(){
    this.getSightings();
  }
}