import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../common/services/http.service';
import { UserLoginReq } from '../common/model/userclass';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router: Router,
    public httpService: HttpService) { }

  changePass: UserLoginReq;
  confirmPsswd: any;

  ngOnInit() {
    this.changePass = new UserLoginReq();
  }

  changePassword() {
    if (this.confirmPsswd === this.changePass.password) {
      this.httpService.changePassword(this.changePass).subscribe((data: any) => {
        this.router.navigate(['/login']);
      });
    }

  }

}
