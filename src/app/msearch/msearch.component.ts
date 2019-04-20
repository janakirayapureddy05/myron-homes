import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msearch',
  templateUrl: './msearch.component.html',
  styleUrls: ['./msearch.component.css']
})

export class MsearchComponent implements OnInit {

slides = [
    { image:'assets/images-myron/img1.jpeg'},
    { image: 'assets/images-myron/img2.jpg'},
    {image:'assets/images-myron/img5.jpeg'}
 ];
 selResdentialTypes={value: "All resdential"};
  ResdentialTypes: any[] = [{value:"Residential"}, {value:"Independent/Builder Floor"}
 , {value:"Independent House/Villa"}, {value:"Residential Land"}];
  locationRes: string[] = ["Kondapur", "Gachibowli", "Ameerpeta", "SRnagar","secundrabad"];
  selLocation: any;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ChangeResType(newResType: any){
    this.selResdentialTypes = newResType;
  }

  searchLoc = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    map(term => term === '' ? []
      : this.locationRes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )
  // formatter = (x: {name: string}) => x.name;
  searchprop(){
    this.router.navigate(['/mlist']);
  }
}