import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Plist } from '../common/model/property';
import { PagerService, CommonService } from '../common/services/index';

@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css']
})
export class MListComponent implements OnInit {

  constructor(
    private router: Router,
    private pagerService: PagerService,
    private commonService: CommonService
  ) { }
  ngOnInit() {
  }
}
