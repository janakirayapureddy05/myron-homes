import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/index';
import { HttpService } from '../../services/http.service';
import { Message } from 'primeng//api';
import { MessageService } from 'primeng/api';
import { BuilderDtls, Plist, UserenqReq } from '../../model/property';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-new-propertys',
  templateUrl: './new-propertys.component.html',
  styleUrls: ['./new-propertys.component.css']
})
export class NewPropertysComponent implements OnInit {

  constructor(
    private router: Router,
    private commonService: CommonService,
    private httpService: HttpService,
    private messageService: MessageService,
    private mockService: MockService
  ) { }

  propLst: Plist[] = [];

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    if (this.commonService.mockData) {
      this.mockPropData();
    } else {
    if (this.commonService.ltstProps && this.commonService.ltstProps.length > 0) {
      this.propLst = this.commonService.ltstProps;
    } else {
      let userId = '';
      if (this.commonService.userProfile && this.commonService.userProfile.userId
        && this.commonService.userProfile.userId !== '') {
          userId = this.commonService.userProfile.userId;
        }
      this.httpService.getPropOdrPdt(userId).subscribe((data: any) => {
        this.propLst = data.propLst;
        this.commonService.ltstProps = this.propLst;
      });
    }
  }
  }

  shortListProp(prop: any) {
    prop.shortlisted = !prop.shortlisted;
    if (this.commonService.userProfile && this.commonService.userProfile.userId && this.commonService.userProfile.userId !== '' ) {
      const Reqdata = {
        id: prop.shortlistId,
        companyId: prop.companyId,
        userId: this.commonService.userProfile.userId,
        propId: prop.propId,
        status: prop.shortlisted
      };
      this.httpService.saveShrtlstProp(Reqdata).subscribe((data: any) => {
        prop.shortlistId = data.shortLst.id;
      });
    } else if (prop.shortlisted) {
      if (!this.commonService.shrtlstProps || this.commonService.shrtlstProps.length <+ 0) {
        this.commonService.shrtlstProps = [];
      }
      this.commonService.shrtlstProps.push(prop);
      //this.messageService.add({ severity: 'warn', summary: 'Login', detail: 'please login to shorlist propertys' });
    } else if (!prop.shortlisted) {
      if (this.commonService.shrtlstProps && this.commonService.shrtlstProps.length > 0) {
        this.commonService.shrtlstProps = this.commonService.shrtlstProps.filter(item => item.propId !== prop.propId);
    }
  }
  }

  gotoProp(prop: any) {
    this.commonService.propDtls = prop;
    this.router.navigate(['/mpropdtl/' + prop.propId]);
  }

  mockPropData() {
    this.propLst = this.mockService.getProperties().propLst;
    this.commonService.ltstProps = this.mockService.getProperties().propLst;
  }

}
