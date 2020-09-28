import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServiceCovidService, typeAllCases } from 'src/app/services/service-covid.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
  providers: [
    ServiceCovidService
  ]
})
export class AllPage implements OnInit {
  public showSkeleton:boolean=true;
  private allCases:typeAllCases[] = [];
  private searchResult:string= ""
  constructor(private service:ServiceCovidService) {}

  ngOnInit() {
    this.verifiedConnection();
    this.changeAll();
  }

  private changeAll():void{
    this.service.getAll().subscribe((resp)=>{
      this.allCases =resp
    }, ()=>{return}, ()=>{this.showSkeleton=false})
  }

  private verifiedConnection():void{
    
    let timingHttp= interval(2000).subscribe(()=>{
      
      if(this.showSkeleton==true)this.changeAll()
      else timingHttp.unsubscribe()
      
    })

   }


}
