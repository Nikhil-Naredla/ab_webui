import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.scss']
})
export class SummaryViewComponent implements OnInit {
  oeeData : any = [
    {name : 'OLE'},
    {name : 'TEEP'},
    {name : 'Availability'},
    {name : 'Performance'},
    {name : 'Quality'},
 ]

 cp1 : any = [
  {name : 'Capacity Utilization'},
  {name : 'Capacity'},
]

cp2 : any = [
  {name : 'Ideal Cycle Time'},
  {name : 'Actual Cycle Time'},
  
]


  constructor() { }

  ngOnInit() {
    
    console.log(this.oeeData.name)
    console.log(this.tiles_data)
  }

}
