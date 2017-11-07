import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class SupersaiyantwoComponent implements OnInit {
  @Input() mypower:number;
  newpower=0;
  message = "";
  ngOnChanges(){
    this.newpower = this.mypower * 250;
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
