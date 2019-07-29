import { Component, OnInit } from '@angular/core';
import { UserenqCust } from '../common/model/property';
import { UserProfile } from '../common/model/userclass';
import { HttpService } from '../common/services/http.service';
import { CommonService } from '../common/services/common.service';
import { MockService } from '../common/services/mock.service';

@Component({
  selector: 'app-company-admin',
  templateUrl: './company-admin.component.html',
  styleUrls: ['./company-admin.component.css']
})
export class CompanyAdminComponent implements OnInit {

  constructor(public httpService: HttpService,
              public commonService: CommonService,
              public mockService: MockService) { }
  cadminProfile: UserProfile = new UserProfile();
  ecustomers: UserenqCust[] = [];

  ngOnInit() {
    if (this.commonService.userProfile) {
      this.cadminProfile = this.commonService.userProfile;
    }
  }

  saveCmpnyDtls() {
    this.httpService.saveCompDtls(this.cadminProfile).subscribe((data: any) => {
      // show message
    });
  }

  getEnqCustomer() {
    if (this.commonService.mockData) {
      this.mockCadminData('enq');
    } else {
      if (this.ecustomers !== null || this.ecustomers.length > 0) {
        this.httpService.getEnqCustom(this.cadminProfile.companyId).subscribe((data: any) => {
          // show message
          this.ecustomers = data.lstEnqCustomrs;
        });
      }
    }
  }

  getProperties() {
    if (this.commonService.mockData) {
      this.mockCadminData('prop');
    } else {
      this.httpService.getPropByComp(this.cadminProfile.companyId).subscribe((data: any) => {
        // show message
        this.commonService.setPropertySub(data.propLst);
        this.commonService.propertys = data.propLst;
      });
    }
  }

  mockCadminData(type: any) {
    if (type === 'enq') {
      this.ecustomers = this.mockService.getEnqCustom().lstEnqCustomrs;
    } else if (type === 'prop') {
      this.commonService.setPropertySub(this.mockService.getProperties().propLst);
      this.commonService.propertys = this.mockService.getProperties().propLst;
    }
  }

}
