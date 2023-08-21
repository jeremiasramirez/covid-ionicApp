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
  public searchResult:string= ""
  constructor(public service:ServiceCovidService) {}

  ngOnInit() :void{
    this.verifiedConnection();
    this.changeAll();
    this.openToReconnect();
  }

  private async openToReconnect():Promise<any>{
    timer(5000).subscribe(()=>{
      if (this.showSkeleton==true) this.service.reconnect()
    })
  }

  private changeAll():void{
    this.service.getAll().subscribe((resp:any)=>{
      this.allCases =resp
      console.log(resp);
      
    }, ()=>{return}, ()=>{this.showSkeleton=false})
  }


  private verifiedConnection():void{
    
    let timingHttp= interval(5000).subscribe(()=>{
      
      if(this.showSkeleton==true)this.changeAll();  
      else {timingHttp.unsubscribe();this.service.closeReconnect()}
      
    })

   }


}
