import { Component, OnInit } from '@angular/core';
import { Plist, UserenqCust } from '../common/model/property';
import { CompanyDtls } from '../common/model/admin';
import { UserProfile } from '../common/model/userclass';
import { HttpService } from '../common/services/http.service';
import { CommonService } from '../common/services/common.service';
import { MockService } from '../common/services/mock.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public httpService: HttpService,
              public commonService: CommonService,
              public mockService: MockService) { }

  showprop = false;

  showmail = false;

  showEnq = false;

  adminProfile: UserProfile = new UserProfile();

  selComp: CompanyDtls = new CompanyDtls();

  addComp: CompanyDtls = new CompanyDtls();

  companys: CompanyDtls[] = [];

  propLst: Plist[] = [];

  ecustomers: UserenqCust[] = [];

  ngOnInit() {
    if (this.commonService.userProfile) {
      this.adminProfile = this.commonService.userProfile;
    }
  }

  saveAdminDetails() {
    this.httpService.saveAdminDtls(this.adminProfile).subscribe((data: any) => {
      if (this.commonService.userProfile.adminId === null || this.commonService.userProfile.adminId === 0) {
        this.commonService.userProfile.adminId = data.loginProfile.adminId;
      }
      // returns adminId;
      // saving admin details
    });
  }

  registerCompany() {
    this.httpService.registerCompany(this.addComp).subscribe((data: any) => {
      // Adding new company
    });
  }

  getCompanys() {
    if (this.commonService.mockData) {
      this.mockAdminData('comp');
    } else {
      this.httpService.getCompanys().subscribe((data: any) => {
        this.companys = data.companys;
      });
    }
  }

  getProperties(companyId: any) {
    if (this.commonService.mockData) {
      this.mockAdminData('prop');
    } else {
      this.httpService.getPropByComp(companyId).subscribe((data: any) => {
        this.showprop = true;
        this.propLst = data.propLst;
      });
    }
  }

  changeCompSts(comp: any) {
    comp.status = !comp.status;
    this.httpService.changeCompSts(comp).subscribe((data: any) => {
      // message
    });
  }

  changePropSts(prop: any) {
    prop.status = !prop.status;
    this.httpService.changePropSts(prop).subscribe((data: any) => {
      // message
    });
  }

  showMail(comp: any) {
    this.selComp = comp;
    this.showmail = true;
  }

  onMailDisp(val: any) {
    this.showmail = val;
  }

  getEnqCustomer(companyId: any) {
    // this.showEnq = true;
    if (this.commonService.mockData) {
      this.mockAdminData('enq');
    } else {
      if (this.ecustomers !== null || this.ecustomers.length > 0) {
        this.httpService.getEnqCustom(companyId).subscribe((data: any) => {
          // show message
          this.ecustomers = data.lstEnqCustomrs;
          this.showEnq = true;
        });
      }
    }
  }

  mockAdminData(type: any) {
    if (type === 'enq') {
      this.ecustomers = this.mockService.getEnqCustom().lstEnqCustomrs;
      this.showEnq = true;
    } else if (type === 'comp') {
      this.companys = this.mockService.getCompanys().companys;
    } else if (type === 'prop') {
      this.showprop = true;
      this.propLst = this.mockService.getProperties().propLst;
    }
  }

}
