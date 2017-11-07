import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HumanComponent implements OnInit {
  @Input() mypower:number;
  newpower=0;
  message = "";
  ngOnChanges(){
    this.newpower = this.mypower * 150;
    if(this.newpower == 50000){
      this.message = "The One!";
    }else if(this.newpower > 20000){
      this.message = "Superlative!";
    }else if(this.newpower > 9000){
      this.message = "Over 9000!";
    }else{
      this.message = "";
    }
  }
  constructor() { }

  ngOnInit() {

  }

}
