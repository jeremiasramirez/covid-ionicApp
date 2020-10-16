import { Injectable } from '@angular/core'; 
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax"
import { pluck, delay } from 'rxjs/operators'
import { ConnectComponent } from '../components/connect/connect.component';

@Injectable()
export class ServiceCovidService {
  private ApiURI : string = 'https://api.covid19api.com/summary';
  private apiImg: string="https://restcountries.eu/rest/v2/name/{name}";

   

  constructor( 
    private connectModal:ModalController,
    ){   }

  private  getGlobalCase(){
    return ajax.get(this.ApiURI).pipe(delay(500),pluck('response','Global'))
  }


  private  getAllCase() {
      return ajax.get(this.ApiURI).pipe(
        delay(700), pluck('response','Countries'))
  }
  public getAll(){
    return this.getAllCase()
  }
 
  public getGlobal(){
    return this.getGlobalCase();
  }
  

   async closeReconnect(){
    this.connectModal.dismiss()
  }
   async reconnect(){
    const connects = await this.connectModal.create({
      component: ConnectComponent
    })
    connects.present();
  }

}

export interface typeAllCases  {
  Country: string;
  CountryCode: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface globalCases {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number
}