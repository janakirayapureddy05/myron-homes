import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../common/services/http.service';
import { CommonService } from '../common/services/common.service';
import { UserLoginReq } from '../common/model/userclass';
import { MessageService } from 'primeng/api';
import { MockService } from '../common/services/mock.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private httpService: HttpService,
              private commonService: CommonService,
              private messageService: MessageService,
              private mockService: MockService
  ) { }
  register = false;
  forgot = false;
  recapt: any;
  userReq: UserLoginReq = new UserLoginReq();
  // pattern = "[^ @]*@[^ @]*";
  ngOnInit() {
    this.userReq.id = 0;
  }

  showRegister() {
    this.register = true;
  }
  showForgot() {
    this.forgot = true;
  }
  login() {
    if (this.commonService.mockData) {
      this.mockLoginData();
    } else {
      if (!this.recapt) {
        this.messageService.add({ severity: 'warn', summary: 'reCaptcha', detail: 'Please check the reCaptcha Checkbox' });
        return;
      }
      if (this.userReq.mail !== '' && this.userReq.password !== '') {
        this.httpService.userLogin(this.userReq).subscribe((data: any) => {
          this.commonService.userProfile = data.loginProfile;
          this.commonService.setUpdateProfile(data.loginProfile);
          if (this.commonService.userProfile.userType === 'user') {
            this.router.navigate(['/user']);
          } else if (this.commonService.userProfile.userType === 'admin') {
            this.router.navigate(['/admin']);
          } else if (this.commonService.userProfile.userType === 'cadmin') {
            this.router.navigate(['/cadmin']);
          }
        });
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Message', detail: 'Please Enter username/password' });
      }
    }
  }

  forgotPass() {
    this.httpService.forgotPassword(this.userReq).subscribe((data: any) => {
      // show message
      this.forgot = false;
    });

  }

  onRegister(register: boolean) {
    this.register = register;
  }

  mockLoginData() {
    if (this.userReq.mail === 'janaki.johnny@gmail.com') {
      this.commonService.userProfile = this.mockService.userLogin('cadmin');
      this.commonService.setUpdateProfile(this.commonService.userProfile);
      this.router.navigate(['/cadmin']);
    } else if (this.userReq.mail === 'anji.bandapalli@gmail.com') {
      this.commonService.userProfile = this.mockService.userLogin('user');
      this.commonService.setUpdateProfile(this.commonService.userProfile);
      this.router.navigate(['/user']);
    } else if (this.userReq.mail === 'janakirayapureddy05@gmail.com') {
      this.commonService.userProfile = this.mockService.userLogin('admin');
      this.commonService.setUpdateProfile(this.commonService.userProfile);
      this.router.navigate(['/admin']);
    }
  }

}
