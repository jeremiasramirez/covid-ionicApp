import { Component, OnInit } from '@angular/core';
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

  constructor(private service:ServiceCovidService) { }

  ngOnInit() {
    this.service.getAll().subscribe((resp:typeAllCases)=>{
      console.log(resp);
      
    })
  }

}
