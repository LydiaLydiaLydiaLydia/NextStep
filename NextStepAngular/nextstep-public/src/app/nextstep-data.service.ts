import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Sighting } from './sightings/sightings.component';

@Injectable({
  providedIn: 'root'
})
export class NextstepDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';

  public getSightings(): Promise<Sighting[]> {
		const url: string = `${this.apiBaseUrl}/sightings`; 
		return this.http 
		.get(url) 
		.toPromise() 
		.then(response => response as Sighting[]) 
		.catch(this.handleError); 
	}
  private handleError(error: any): Promise<any> { 
	  console.error('Something has gone wrong', error); 
	  return Promise.reject(error.message || error); 
  }

  }
