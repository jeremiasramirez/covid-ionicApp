import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent implements OnInit {
  @Input() show:boolean=true;
  @Input() arr=[1,1,1,1];
  constructor() { }

  ngOnInit() {}

}
