import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class Indexservice {
  constructor(private http:HttpClient){}
  getFeaturedGames(){
    var url = "http://180.76.246.108/myproject2/src/app/data/index.php";
    return this.http.get(url);
  }
}
