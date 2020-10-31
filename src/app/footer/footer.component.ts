import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toProfile(){
    document.getElementById("profile").scrollIntoView({behavior: "smooth"});
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
  }
}
