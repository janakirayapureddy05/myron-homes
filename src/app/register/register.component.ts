import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../common/services/http.service';
import { UserLoginReq } from '../common/model/userclass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() register = new EventEmitter<boolean>();
  newUser: UserLoginReq = new UserLoginReq() ;
  confirmPsswd: any;
  constructor(private router: Router,
              public httpService: HttpService) { }
  ngOnInit() {
  }
  registerfn() {
    this.newUser.id = 0;
    this.newUser.type = 'user';
    this.httpService.registerUser(this.newUser).subscribe((data: any) => {
      //show message to user
      this.register.emit(false);
    });
  }

}
