import { Component, Input, OnInit } from '@angular/core';
import { typeAllCases } from 'src/app/services/service-covid.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  @Input() allcases : typeAllCases[]=[];
  @Input() search:string = "";
  private endItems:number=10;
  constructor() { }

  ngOnInit() {
    console.log(this.allcases) 
  }


  private getByScroll(ev:any){

  }

}
