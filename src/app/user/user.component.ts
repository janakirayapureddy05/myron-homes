import { Component, OnInit } from '@angular/core';
import { Credit, AddressBook, UserProfile } from '../common/model/userclass';
import { HttpService } from '../common/services/http.service';
import { CommonService } from '../common/services/common.service';
import { MockService } from '../common/services/mock.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public httpService: HttpService,
              public commonService: CommonService,
              private mockService: MockService) { }

  adddisplay = false;
  editType = 'new';
  addEditAddrs: AddressBook = new AddressBook();

  userProfile: UserProfile = new UserProfile();

  refcreditslst: Credit[] = [];

  purcreditslst: Credit[] = [];

  addressLst: AddressBook[] = [];

  ngOnInit() {
    if (this.commonService.userProfile) {
      this.userProfile = this.commonService.userProfile;
    }
  }

  saveUser() {
    this.httpService.saveUser(this.userProfile).subscribe((data: any) => {
      if (this.commonService.userProfile.adminId === null || this.commonService.userProfile.adminId === 0) {
        this.commonService.userProfile.adminId = data.loginProfile.adminId;
      }
      // returns adminId;
      // message
    });
  }

  getCredits() {
    if (this.commonService.mockData) {
      this.mockUserData('credits');
    } else {
      this.httpService.getCredits(this.userProfile.userId).subscribe((data: any) => {
        this.refcreditslst = data.refCredits;
        this.purcreditslst = data.purCredits;
      });
    }
  }

  getAdrsDtls() {
    if (this.commonService.mockData) {
      this.mockUserData('address');
    } else {
      this.httpService.getAddress(this.userProfile.userId).subscribe((data: any) => {
        this.addressLst = data.contacts;
      });
    }
  }

  showAdd() {
    this.addEditAddrs = new AddressBook();
    this.addEditAddrs.userId = this.userProfile.userId;
    this.adddisplay = true;
  }

  showEdit(item: AddressBook) {
    this.addEditAddrs = item;
    this.adddisplay = true;
  }

  delAddrs(item: AddressBook) {
    this.httpService.deleteAddrs(item).subscribe((data: any) => {
      this.addressLst = data.contacts;
      this.adddisplay = false;
    });
  }

  editAddrs() {
    this.httpService.editAddrs(this.addEditAddrs).subscribe((data: any) => {
      this.addressLst = data.contacts;
      this.adddisplay = false;
    });
  }

  mockUserData(type: any) {
    if (type === 'credits') {
      this.refcreditslst = this.mockService.getCredits().refCredits;
      this.purcreditslst = this.mockService.getCredits().purCredits;

    } else if (type === 'address') {
      this.addressLst = this.mockService.getAddress().contacts;
    }
  }

}
