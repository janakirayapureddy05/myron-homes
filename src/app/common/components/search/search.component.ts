import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/index';
import { HttpService } from '../../services/http.service';
import { Observable, of } from 'rxjs';
import { Plist } from '../../model/property';
import { UserProfile } from '../../model/userclass';
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private commonService: CommonService,
    private httpService: HttpService,
    private messageService: MessageService,
    private mockService: MockService
  ) { }
  resultLocs: any[];
  selType: any;
  selLocation: any;
  ngOnInit() {
    if (!this.commonService.selPropTypes) {
      this.commonService.selPropTypes = [];
    } else {
      this.selType = this.commonService.selPropTypes[0];
    }
    if (this.commonService.selPropLocs === null ||
      this.commonService.selPropLocs === undefined || this.commonService.selPropLocs.length <= 0) {
      this.commonService.selPropLocs = [];
      this.commonService.selLocation = [];
    } else {
      this.selLocation = this.commonService.selLocation;
    }
    if (this.commonService.propLocTypes === null ||
      this.commonService.propLocTypes === undefined || this.commonService.propLocTypes.length <= 0) {
      this.commonService.propLocTypes = [
        { id: '1', type: 'Residential', location: 'Kondapur Telengana' },
        { id: '2', type: 'Independent/Builder Floor', location: 'Gachibowli Telengana' },
        { id: '3', type: 'Independent House/Villa', location: 'Ameerpeta Telengana' },
        { id: '4', type: 'Residential Land', location: 'secundrabad Telengana' },
        { id: '5', type: 'House', location: 'GHANSIMIYAGUDA, SHAMSHABAD' }];
    }
  }

  // ChangeResType(newResType: any) {
  //   this.commonService.selPropLocs = [];
  //   this.selType = newResType.type;
  // }

  filterLocations(event) {
    this.resultLocs = [];
    for (const prop of this.commonService.propLocTypes) {
      if (prop.location.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.resultLocs.push(prop);
      }
    }
  }

  searchprop() {
    if (!(this.selLocation && this.selLocation.length > 0)) {
      this.messageService.add({ severity: 'warn', summary: 'Location', detail: 'Please select atleast one location' });
    }
    this.commonService.selPropTypes.push(this.selType);
    this.commonService.selLocation = this.selLocation;
    for (const loc of this.selLocation) {
      this.commonService.selPropLocs.push(loc.location);
    }
    this.getProperties();
    this.router.navigate(['/mlist']);
  }

  getProperties() {
    if (this.commonService.mockData) {
      this.mockPropData();
    } else {
      const seltypes: any[] = [];
      seltypes.push(this.selType.type);
      const Reqdata = {
        types: seltypes,
        locations: this.commonService.selPropLocs,
        userId: this.commonService.userProfile ? this.commonService.userProfile.userId : ''
      };
      this.httpService.getProperties(Reqdata).subscribe((data: any) => {
        this.commonService.setPropertySub(data.propLst);
      });
    }
  }

  clear() {
    this.messageService.clear();
  }

  mockPropData() {
    this.commonService.propertys = this.mockService.getProperties().propLst;
    this.commonService.setPropertySub(this.mockService.getProperties().propLst);
  }


}
