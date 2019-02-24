import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

declare var $;
var socket;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
    socket = new WebSocket("ws://180.76.246.108:9001");
    var name = sessionStorage.getItem("name");
    socket.onmessage = function (e) {
      console.log(e.data);
        var domt = `<h5>${e.data}</h5>`;
        console.log(domt);
        $(".d1").append(domt);
    };
    function sendmsg () {
      var val = $("#content1").val();
      socket.send(name + ":" + val);
      $("#content1").val("");
    }
    $("#btn1").click( () => {
      if (name) {
        sendmsg();
      }
      else {
        this.r.navigateByUrl("login");
      }
    });
    $("#content1").keydown( (e) => {
        if (e.keyCode == 13) {
          if (name) {
            console.log(1);
            sendmsg();
          }
          else {
            this.r.navigateByUrl("login");
          }
        }
    })
  }

  ngOnDestroy() {
    socket.close();
  }
}
