import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { interval, timer } from 'rxjs';
import { ConnectComponent } from 'src/app/components/connect/connect.component';
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
  constructor(
    private connectModal:ModalController,
    private service:ServiceCovidService) {}

  ngOnInit() {
    this.verifiedConnection();
    this.changeAll();
    this.openToReconnect();
  }

  private async openToReconnect():Promise<any>{
    timer(5000).subscribe(()=>{
      if (this.showSkeleton==true) this.reconnect()
    })
  }

  private changeAll():void{
    this.service.getAll().subscribe((resp)=>{
      this.allCases =resp
    }, ()=>{return}, ()=>{this.showSkeleton=false})
  }

  private async closeReconnect(){
    this.connectModal.dismiss()
  }
  private async reconnect(){
    const connects = await this.connectModal.create({
      component: ConnectComponent
    })
    connects.present();
  }

  private verifiedConnection():void{
    
    let timingHttp= interval(5000).subscribe(()=>{
      
      if(this.showSkeleton==true)this.changeAll();  
      else {timingHttp.unsubscribe();this.closeReconnect()}
      
    })

   }


}
