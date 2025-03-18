import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'    // Means instances of this service can be used across application
})
export class HousingService {
  
  url = 'http://localhost:3000/locations';
  constructor() { }


  async getAllHousingLocation(): Promise <Housinglocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? []
  }
  async getHousingLocationById(id:number): Promise <Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName:string, lastName:string, email:string){
     
  }
}
