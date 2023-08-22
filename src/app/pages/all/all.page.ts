import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { ServiceCovidService, typeAllCases } from 'src/app/services/service-covid.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
  providers: [ServiceCovidService]
})
export class AllPage implements OnInit {
  public showSkeleton:boolean=true;
  public allCases:typeAllCases[] = [];
  public allCountries = [];
  public searchResult:string= ""
  constructor(public service:ServiceCovidService) {}

  ngOnInit() :void{
    this.verifiedConnection();
    this.changeAll();
    this.openToReconnect();
    this.setAllCountries()
  }

  private async openToReconnect():Promise<any>{
    timer(5000).subscribe(()=>{
      if (this.showSkeleton==true) this.service.reconnect()
    })
  }
  public setAllCountries(){
    this.service.getAllCountries().subscribe((data:any)=>{
      this.allCountries=data.response
      console.log(this.allCountries);
      
    })
  }

  private changeAll():void{
    this.service.getCaseSpecific('canada').subscribe((resp:any)=>{
      this.allCases =resp.response
      console.log(this.allCases);
      
    }, ()=>{return}, ()=>{this.showSkeleton=false})
  }


  private verifiedConnection():void{
    
    let timingHttp= interval(5000).subscribe(()=>{
      
      if(this.showSkeleton==true)this.changeAll();  
      else {timingHttp.unsubscribe();this.service.closeReconnect()}
      
    })

   }


}
