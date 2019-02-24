import { Component, OnInit } from '@angular/core';
import {Bjservice} from "../bg/bjservice";
import { Router } from "@angular/router";

declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:Bjservice, private r:Router) { }

  ngOnInit() {
    $("#btn").click(() => {
      var phone = $("#phone").val();
      var pwd = $("#pwd").val();
      this.service.login(phone,pwd).subscribe((data)=>{
        console.log(data);
        if (data == 1) {
          sessionStorage.setItem("name",phone);
          this.r.navigateByUrl("index");
        }
      })
    })
  }
}
