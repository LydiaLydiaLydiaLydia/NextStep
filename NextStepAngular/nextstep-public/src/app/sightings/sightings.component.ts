import { Component, OnInit } from '@angular/core';

export class Sighting {
  title!: string;
  postedBy!:string;
  text!: string;
  timePosted!: Date;
  coords!: number[];
  verifiedBy!: string;
  mainPic!: string;
  bigPics!: string[];
}

@Component({
  selector: 'app-sightings',
  standalone: false,
  
  templateUrl: './sightings.component.html',
  styleUrl: './sightings.component.css'
})
export class SightingsComponent implements OnInit{
  constructor() {}
  
  sighting: Sighting = {
    title: "Old Copper Mine",
    postedBy: 'BigSearcher12',
    text: 'Bigfoot, also commonly referred to as Sasquatch, is a large and hairy human-like mythical creature said to inhabit forests in North America, particularly in the Pacific Northwest. Bigfoot is featured in both American and Canadian folklore, and since the mid-20th century has grown into a cultural icon, permeating popular culture and becoming the subject of its own distinct subculture.',
    timePosted: new Date("20:52 27 October 2024"),
    coords: [0,0],
    verifiedBy: "FootFinder64",
    mainPic: '',
    bigPics: []
  }

  ngOnInit(){}
}
