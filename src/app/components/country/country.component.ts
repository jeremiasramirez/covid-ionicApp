import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() titleCountry:string;
  constructor(private closeModal:ModalController) { }

  ngOnInit() {}


  private async closeModals(){
    this.closeModal.dismiss()
  }
}
