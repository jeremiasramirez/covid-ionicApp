import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { globalCases, ServiceCovidService, typeAllCases } from 'src/app/services/service-covid.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  providers: [  ServiceCovidService ]
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
  public showSkeleton:boolean=true;
  private segmentValue:string="global";

  constructor(
    private router:Router,
    private httpService:ServiceCovidService) {
    this.getGlobal()
  }

  private toAll():void{
    timer(300).subscribe(()=>{this.router.navigate(["home/all"])})
  }
  private getGlobal():void{
      this.httpService.getGlobal().subscribe((resp)=>{
        this.global=resp;
      }, ()=>{return}, ()=>{this.showSkeleton=false})
    }

  ngOnInit() {}

}
