import {Component, OnInit} from "@angular/core";
import {Indexservice} from "../indexservice";

@Component({
  selector: 'featured-games',
  templateUrl: './app.FeaturedGames.component.html'
})
export class FeaturedGames implements OnInit{
  items = null;
  msg = null;
  constructor(private s:Indexservice){

  }
  ngOnInit(){
    this.s.getFeaturedGames().subscribe((data)=>{
      this.items = data;
      this.msg = this.items.msg;
      console.log(this.msg);
    },(err)=>{
      console.log(err);
    })
  }
}
