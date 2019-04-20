import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css']
})
export class MListComponent implements OnInit {

  selResdentialTypes: any[]=[];
  ResdentialTypes: any[] = [{value:"Residential"}, {value:"Independent/Builder Floor"}
 , {value:"Independent House/Villa"}, {value:"Residential Land"}];
  locationRes: any[] = 
  [{value:"Kondapur"}, {value:"Gachibowli"}
 , {value:"Ameerpeta"}, {value:"SRnagar"}, {value:"secundrabad"}];
  selLocation: any[]=[];
  more= false;
  url="https://myronhomes.in/";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  getResTypes(res:any){
    this.selResdentialTypes.push(res);
  }

  getLocTypes(loc:any){
    this.selLocation.push(loc);
  }

  gotopropdtl(){
    this.router.navigate(['/mpropdtl']);
  }
}
