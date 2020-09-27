import { Component, OnInit } from '@angular/core';
import { globalCases, ServiceCovidService, typeAllCases } from 'src/app/services/service-covid.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  providers: [
    ServiceCovidService
  ]
})
export class GlobalComponent implements OnInit {
  private global:globalCases={
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0
  }
  private all:typeAllCases[]= [];

  private segmentValue:string="global";

  constructor(private httpService:ServiceCovidService) {
    this.getGlobal()
  }

 private getGlobal(){
    this.httpService.getGlobal().subscribe((resp)=>{
      
      this.global=resp;
      console.log(this.global)
      
    })
  }

  ngOnInit() {}

}
