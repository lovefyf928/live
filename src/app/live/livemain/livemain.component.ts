import { Component, OnInit } from '@angular/core';
declare var videojs;
@Component({
  selector: 'app-livemain',
  templateUrl: './livemain.component.html',
  styleUrls: ['./livemain.component.css']
})
export class LivemainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    videojs.options.flash.swf = "../../../assets/flash/video-js.swf";
    var player = videojs('main-video', {techOrder: ['flash']});
    var  livePlay = function () {
      player.src([
        {
          src:"rtmp://180.76.246.108:1935/myapp/test1",
          type: 'rtmp/flv',
          withCredentials: false
        }
      ]);
      player.play();
    };
    livePlay();
  }
}
