import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit {

  constructor(private modal:ModalController) { }

  ngOnInit() {}

  private async closeReconnect(){
    this.modal.dismiss()
  }
}
