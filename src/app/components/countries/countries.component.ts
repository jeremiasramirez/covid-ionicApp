import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
import { typeAllCases } from 'src/app/services/service-covid.service';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  @Input() allcases : typeAllCases[]=[];
  @Input() searchs:string = "";
  private endItems:number=10;


  constructor(private modal:ModalController) { }

  ngOnInit(){}

  private async openModalCountry(data){
    const modals = await this.modal.create({
      component: CountryComponent,
      componentProps: {data}
    })
    modals.present();
  }
  private getByScroll(ev:any){
    
    timer(100).subscribe(()=>{
      this.endItems +=10;
      ev.target.complete();
    })
  }

}
