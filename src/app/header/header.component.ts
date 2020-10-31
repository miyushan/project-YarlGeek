import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  }
  toServices(){
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
  }

}
