import { Injectable } from '@angular/core'; 
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax"
import { pluck, delay } from 'rxjs/operators'
import { ConnectComponent } from '../components/connect/connect.component';

@Injectable()
export class ServiceCovidService {
  private ApiURI : string = 'https://api.api-ninjas.com/v1/covid19';
  private apiImg: string="https://restcountries.eu/rest/v2/name/{name}";
  private apikey:string = "eG88GHVdKgLflG914JlkhQ==JY0YVi9JIbbXtVOP"
   

  constructor( 
    private connectModal:ModalController, ){   }

  private  getGlobalCase(){
    return ajax.get(this.ApiURI).pipe(delay(500))
  }


  private  getCase(country:string) {
      return ajax.get(this.ApiURI+`?country=${country}`,{'X-Api-Key': this.apikey}).pipe(
        delay(700))
  }
  public getCaseSpecific(country:string){
    return this.getCase(country)
  }

  public getAllCountries(){
    return ajax.get(`https://restcountries.com/v3.1/all`).pipe(
      delay(700))
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