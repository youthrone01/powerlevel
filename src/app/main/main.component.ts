import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  temp = 0;
  power = 0;
  onSubmit(){
    this.power = this.temp;
    console.log(this.power);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
