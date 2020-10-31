import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profiles =[];

  public miyushan;
  public isuru;
  public induwara;
  public lakindu;
  public keshan;
  public active=true;
  public Back=false;

  constructor(private _profileDetails: ProfilesService) { }

  ngOnInit()  {
    this.profiles = this._profileDetails.getProfiles();
  }

  clickbutton1(){
    this.miyushan=true;
    this.isuru=false;
    this.induwara=false;
    this.lakindu=false;
    this.keshan=false;
    this.active=false;
    this.Back=true;
  }
  clickbutton2(){
    this.miyushan=false;
    this.isuru=true;
    this.induwara=false;
    this.lakindu=false;
    this.keshan=false;
    this.active=false;
    this.Back=true;
  }
  clickbutton3(){
    this.miyushan=false;
    this.isuru=false;
    this.induwara=true;
    this.lakindu=false;
    this.keshan=false;
    this.active=false;
    this.Back=true;
  }
  clickbutton4(){
    this.miyushan=false;
    this.isuru=false;
    this.induwara=false;
    this.lakindu=false;
    this.keshan=true;
    this.active=false;
    this.Back=true;
  }
  clickbutton5(){
    this.miyushan=false;
    this.isuru=false;
    this.induwara=false;
    this.lakindu=true;
    this.keshan=false;
    this.active=false;
    this.Back=true;
  }
  goBack(){
    this.miyushan=false;
    this.isuru=false;
    this.induwara=false;
    this.lakindu=false;
    this.keshan=false;
    this.active=true;
    this.Back=true;
  }
}
