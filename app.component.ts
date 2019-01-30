import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stocks';
  points:any;
  stocks:any;
  newarr:any;
  x: number;
  
  ngOnInit(){
    this.stocks = [{open: "103.1900"}, {open: "101.9000"},{open: "102.5100"}, {open: "105.2600"},{open:"105.0000"}];
    this.points = [50, 150, 100, 23, 150, 98];
    this.x = 40;
    this.newarr = [];

    for (var x = 5; x < 400; x+=10) {
    //setInterval(function() {
      this.newarr.push(x);
      this.newarr.push(Math.floor(Math.random()*70+50));
    //}, 5000);
    }

    
  }

}
