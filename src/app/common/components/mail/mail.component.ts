import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CommonService } from '../../services/common.service';
import { MailReq, UserenqReq } from '../../model/property';
import { Credit } from '../../model/userclass';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(public httpService: HttpService,
    public commonService: CommonService) {
  }
  @Input() mail: any;
  @Input() mailType: any;
  @Input() propId: any;
  @Input() compId: any;
  @Output() display = new EventEmitter<boolean>();
  mails = [];
  showtag = true;
  selMails: any;
  mailReq: MailReq = new MailReq();

  ngOnInit() {
    if (this.mailType === 'compInvite') {
      this.showtag = false;
    } else {
      if (this.commonService.userProfile && this.commonService.userProfile.userId !== '') {
        this.httpService.getMailIds(this.commonService.userProfile.userId).subscribe((data: any) => {
          this.mails = data.mails;
        });
      }
    }
  }

  sendMail() {
    this.mailReq.mailIds = [];
    if (!this.showtag) {
      this.mailReq.mailIds.push(this.mail);
    } else {
      for (let i = 0; i < this.selMails.length; i++) {
        const ma = this.selMails[i].value;
        this.mailReq.mailIds.push(ma);
      }
      // this.mailReq.mailIds = this.selMails;
    }
    if (this.mailType === 'share' || this.mailType === 'refmyron') {
      this.mailReq.updateCrdts = false;
      if (this.commonService.userProfile && this.commonService.userProfile.userType === 'user') {
        this.mailReq.updateCrdts = true;
        const creditReq: Credit = {
          id: 0,
          creditedBy: '',
          count: 1,
          date: '',
          type: 'refferal',
          companyId: this.mailType === 'share' ? this.compId : '',
          propId: this.mailType === 'share' ? this.propId : '',
          userId: this.commonService.userProfile.userId
        };
        this.mailReq.creditsDtls = creditReq;
      }
      if (this.mailType === 'share') {
        this.mailReq.body = this.mailReq.subject + '\n'
          + 'Check out this property: ' + '\n' + 'http://localhost:4200/mpropdtl/' + this.propId;
      } else if ( this.mailType === 'refmyron') {
        this.mailReq.body = this.mailReq.subject + '\n'
        + 'Check out Myron Homes for the propertys: ' + '\n' + 'http://localhost:4200/';
      }
    }
    this.httpService.sendMail(this.mailReq).subscribe((data: any) => {
      this.display.emit(false);
    });
  }

  getMailIds() {
    this.httpService.sendMail(this.commonService.userProfile.userId).subscribe((data: any) => {
      this.mails = data.mails;
    });
  }

  // updateEnqCust() {
  //   let mailIdStrng = '';
  //   for (const mail of  this.mailReq.mailIds) {
  //     mailIdStrng = mailIdStrng + ' , ' + mail;
  //   }
  //   const userenqCust: UserenqReq = {
  //     id: 0,
  //     companyId: this.compId,
  //     propId: this.propId,
  //     userId: this.commonService.userProfile.userId,
  //     status: 'shared the property details with' + mailIdStrng
  //   };
  //   this.httpService.updateEnqCust(userenqCust).subscribe((data: any) => {
  //     //no message to user.
  //   });
  // }
}
