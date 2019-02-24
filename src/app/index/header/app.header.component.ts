import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './app.header.component.html',
  styleUrls: ['../../../assets/css/main.css']
})
export class Header {
  constructor (private r:Router){}
  name = sessionStorage.getItem("name");
  login(){
    this.r.navigateByUrl("login");
  }
  logout(){
    sessionStorage.clear();
    location.reload();
  }
}
