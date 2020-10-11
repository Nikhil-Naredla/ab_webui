import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    // this.maxDate.setDate(this.maxDate.getDate() +30);
    // this.bsRangeValue = [this.bsValue, this.maxDate];
    // console.log(this.bsRangeValue)
  }
  currentDate = new Date();
 
  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([
      new Date(),
      new Date(this.currentDate.setDate(this.currentDate.getDate() + 30))
    ]) 
  });

  ngOnInit(){
    this.maxDate.setDate(this.maxDate.getDate() +30);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    console.log(this.bsRangeValue)
  }

}
