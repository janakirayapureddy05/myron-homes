import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './common/services/common.service';
import { HttpService } from './common/services/http.service';
import { MockService } from './common/services/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myron-homes';
  showmail = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private httpService: HttpService,
    private mockService: MockService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const data = this.route.snapshot;
      }
    });
  }
  loginClick() {
    this.router.navigate(['/login']);
  }
  msearchClick() {
    this.router.navigate(['/msearch']);
  }
  gotomyron() {
    this.router.navigate(['/about']);
  }
  myAccount() {
    if (this.commonService.userProfile.userType === 'user') {
      this.router.navigate(['/user']);
    } else if (this.commonService.userProfile.userType === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.commonService.userProfile.userType === 'cadmin') {
      this.router.navigate(['/cadmin']);
    }
  }
  shtlstdProp() {
    if (this.commonService.mockData) {
      this.mockPropData();
    } else {
      if (this.commonService.userProfile && this.commonService.userProfile.userId && this.commonService.userProfile.userId !== '') {
        this.httpService.getShortlstd(this.commonService.userProfile.userId).subscribe((data: any) => {
          this.commonService.setshrtlstPropsSub(data.propLst);
          this.commonService.shrtlstProps = data.propLst;
          this.router.navigate(['/shrtlst']);
        });
      } else {
        this.router.navigate(['/shrtlst']);
      }
    }
  }
  referMyron() {
    this.showmail = true;
  }
  logout() {
    this.commonService.userProfile = null;
    this.router.navigate(['/msearch']);
  }

  mockPropData() {
    if (this.commonService.userProfile && this.commonService.userProfile.userId && this.commonService.userProfile.userId !== '') {
      this.commonService.setshrtlstPropsSub(this.mockService.getShortlstd().propLst);
      this.commonService.shrtlstProps = this.mockService.getShortlstd().propLst;
    }
    this.router.navigate(['/shrtlst']);
  }

  onMailDisp(val: any) {
    this.showmail = val;
  }

}
