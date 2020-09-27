import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax"
import { pluck, delay } from 'rxjs/operators'

@Injectable()
export class ServiceCovidService {
  private ApiURI : string = 'https://api.covid19api.com/summary';
  private apiImg: string="https://restcountries.eu/rest/v2/name/{name}"
  constructor(){ }

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