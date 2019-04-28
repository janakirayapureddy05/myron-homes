import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import {  SearchCls } from '../model/searchCls';
import { CommonService } from "../services/index";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchCls]
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {this
    if(this.commonService.selectedResTypes===null || this.commonService.selectedResTypes===undefined){
    this.commonService.selectedResTypes={type:"ALL Resedential", location:""};
    }
    if(this.commonService.selectedLocations===null || this.commonService.selectedLocations===undefined || this.commonService.selectedLocations.length<=0){
      this.commonService.selectedLocations = [];
      }
    if(this.commonService.propLocTypes===null || this.commonService.propLocTypes===undefined || this.commonService.propLocTypes.length<=0){
      this.commonService.propLocTypes = [
      {id:"1", type:"Residential", location: "Kondapur Telengana"}, 
      {id:"2", type:"Independent/Builder Floor", location:"Gachibowli Telengana"},
      {id: "3", type:"Independent House/Villa", location:"Ameerpeta Telengana"}, 
      {id:"4", type:"Residential Land", location:"secundrabad Telengana"}];
    }
  }
  resultLocs: any[];

   ChangeResType(newResType: any){
    this.commonService.selectedResTypes.type= newResType.type;
  }

  filterLocations(event) {
    this.resultLocs = [];
    for(let i = 0; i < this.commonService.propLocTypes.length; i++) {
        let prop = this.commonService.propLocTypes[i];
        if(prop.location.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.resultLocs.push(prop);
        }
    }
}

  
  searchprop(){
    this.router.navigate(['/mlist']);
  }

}
