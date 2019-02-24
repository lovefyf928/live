import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class Bjservice {
  constructor(private http:HttpClient){}
  getc(pid){
    var url = `http://180.76.246.108/myproject2/src/app/data/bg.php?pid=${pid}`;
    var ob = this.http.get(url);
    return ob;
  }
  getnav(){
    var url = `http://180.76.246.108/myproject2/src/app/data/nav.php`;
    var ob = this.http.get(url);
    return ob;
  }
  login(phone,pwd){
    var url = `http://180.76.246.108/myproject2/src/app/data/login.php?phone=${phone}&pwd=${pwd}`;
    var ob = this.http.get(url);
    return ob;
  }
}
