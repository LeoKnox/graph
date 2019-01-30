import { Component, OnInit } from '@angular/core';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';

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
    this.stocks = [{open: "13.1900"}, {open: "101.9000"},{open: "102.5100"}, {open: "105.2600"},{open:"105.0000"}];
    this.points = [50, 150, 100, 23, 150, 98];
    //this.x = 40;
    this.newarr = [];
    this.buildData();
    }
    
    buildData() {
      for (var x = 5; x < 400; x+=10) {
        this.newarr.push(x);
        this.newarr.push(Math.floor(Math.random()*70+50));
      }
      this.newarr.push(this.newarr[this.newarr.length-2]+10);
      this.newarr.push(parseInt(this.stocks[0].open));
    }

    addData() {
      console.log('adding');
      this.newarr.push(this.newarr[this.newarr.length-2]+10);
      var up = Math.floor(Math.random()*70+70);
      this.newarr.push(up);
      console.log(this.newarr);
  }
}
