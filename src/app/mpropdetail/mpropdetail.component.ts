import { Component, OnInit } from '@angular/core';
import { Plist, BuilderDtls } from '../common/model/property';
import { HttpService } from '../common/services/http.service';
import { CommonService } from '../common/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mpropdetail',
  templateUrl: './mpropdetail.component.html',
  styleUrls: ['./mpropdetail.component.css']
})
export class MpropdetailComponent implements OnInit {
  property: any;
  subscription: Subscription;
  apiroot = this.commonService.mockData ? '' : 'http://localhost:8080/';
  srcurl = '';
  constructor(private httpService: HttpService,
              private commonService: CommonService, private route: ActivatedRoute,
              private router: Router) {
    this.property = this.commonService.propDtls;
  }

  ngOnInit() {
    if (this.commonService.propDtls) {
      this.property = this.commonService.propDtls;
    } else {
      const id = this.route.snapshot.paramMap.get('param1');
      this.httpService.getPropById(id).subscribe((data) => {
        this.property = data.propById;
      });
    }
    this.srcurl = 'https://www.google.com/maps/embed/v1/place?q=' + this.property.location + '&key=AIzaSyDXpkk7KXg5YmtMN1GfAl5aRxPQpFQj77Y';
  }

}
