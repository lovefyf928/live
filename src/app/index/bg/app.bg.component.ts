import {Component, OnInit,Input} from "@angular/core";
import {Bjservice} from "./bjservice";
declare var videojs;
@Component({
  selector: 'bg',
  templateUrl: './app.bg.component.html',
  styleUrls: ['../../../assets/css/index.css']
})
export class Bg implements OnInit {
  isa = 1;
  data = null;
  data2 = null;
  banner = null;
  display = true;
  display2 = false;
  obj = {
    dsbtn: true,
    acbtn: false,
  };
  obj2 = {
    dsbtn: false,
    acbtn: true,
  }
  constructor(private s: Bjservice) {
  }
  f2(){
    this.display = false;
    this.display2 = true;
    this.obj.dsbtn = false;
    this.obj.acbtn = true;
    this.obj2.dsbtn = true;
    this.obj2.acbtn = false;
  }
  f1(){
    this.display = true;
    this.display2 = false;
    this.obj.dsbtn = true;
    this.obj.acbtn = false;
    this.obj2.dsbtn = false;
    this.obj2.acbtn = true;
  }
  getdata(pid) {
    this.s.getc(pid).subscribe((data) => {
      this.data = data;
      this.data2 = this.data.msg[0];
      console.log(this.data2);
    }, (err) => {
      console.log(err);
    });
  }
  isac(key) {
    this.isa = key;
  }
  ngOnInit() {
    this.s.getnav().subscribe((data)=>{
      this.banner = data;
      console.log(data);
    },(err)=>{
      console.log(err);
    });
    this.getdata(1);


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
