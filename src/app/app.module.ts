import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HumanComponent } from './main/human/human.component';
import { FormsModule } from '@angular/forms';
import { SupersaiyantwoComponent } from './main/supersaiyantwo/supersaiyantwo.component';
import { SupersaiyanthreeComponent } from './main/supersaiyanthree/supersaiyanthree.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HumanComponent,
    SupersaiyantwoComponent,
    SupersaiyanthreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
