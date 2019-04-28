import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpropdetail',
  templateUrl: './mpropdetail.component.html',
  styleUrls: ['./mpropdetail.component.css']
})
export class MpropdetailComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
