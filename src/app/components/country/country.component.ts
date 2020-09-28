import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  private imageCountry:string;
  @Input() data;

  constructor(private closeModal:ModalController) { }

  ngOnInit() {
    this.getImage(this.data.CountryCode)
  }
  
  private getImage(img:string){
    ajax.get(`https://restcountries.eu/rest/v2/alpha/${img}`).pipe(pluck("response","flag")).
      subscribe((imgs)=>{
        this.imageCountry=imgs
      })
  }

  private async closeModals(){
    this.closeModal.dismiss()
  }
}
