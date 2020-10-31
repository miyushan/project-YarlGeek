import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  getProfiles(){
    return [
      {"name": "Shakeer Miyushan", "title": "Web Developer", "desc":""},
      {"name": "Shakeer Miyushan", "title": "Web Developer", "desc":""},
      {"name": "Shakeer Miyushan", "title": "Web Developer", "desc":""},
      {"name": "Shakeer Miyushan", "title": "Web Developer", "desc":""},
      {"name": "Shakeer Miyushan", "title": "Web Developer", "desc":""}
    ]
    
}

  constructor() { }
}
