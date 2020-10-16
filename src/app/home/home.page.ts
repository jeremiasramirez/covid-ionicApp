import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private status:StatusBar) {
    this.status.backgroundColorByName("red");
    this.status.hide();
  }

}
