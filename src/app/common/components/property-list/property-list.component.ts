import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { BuilderDtls, Plist, UserenqReq } from '../../model/property';
import { Credit } from '../../model/userclass';
import { CommonService } from '../../services/common.service';
import { HttpService } from '../../services/http.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService,
              private commonService: CommonService,
              private router: Router,
              private messageService: MessageService) { }
  subscription: Subscription;
  shareprop: Plist = new Plist();
  url = 'http://localhost:4200/mpropdtl/';
  showmail = false;
  @Input() propAppType: any;
  propLst: Plist[] = [];
  sortOptions: any[];
  sortField: string;
  sortOrder: number;
  selContact: BuilderDtls = new BuilderDtls();
  showcontact = false;
  sortKey: any;
  selPropId: any;
  shareItms: MenuItem[];
  ngOnInit() {
    this.sortOptions = [
      { label: 'Cost', value: 'cost' },
      { label: 'Area Size', value: 'size' },
      { label: 'Posted date', value: '!pdate' }
    ];
    if (this.propAppType === 'shrtlst') {
      this.propLst = this.commonService.shrtlstProps;
      this.subscription = this.commonService.getshrtlstPropsSub().subscribe(
        data => {
          this.propLst = data;
          this.onSortChange('!pdate');
          this.sortKey = '!pdate';
        }
      );
    } else {
      this.propLst = this.commonService.propertys;
      this.subscription = this.commonService.getPropertySub().subscribe(
        data => {
          this.propLst = data;
          this.onSortChange('!pdate');
          this.sortKey = '!pdate';
        }
      );
    }
    // this.url = 'https://myronhomes.in/';
    // this.onSortChange('!pdate');
    // this.sortKey = "!pdate";
    this.shareItms = [
      {
        label: 'Facebook',
        icon: 'pi pi-fw pi-caret-right',
        command: () => {
          window.open('https://www.facebook.com/sharer/sharer.php?u='
            + this.url + this.shareprop.propId + '&t='
            + this.url + this.shareprop.propId, 'popupwindow', 'width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable');
        }
      },
      {
        label: 'Whatsapp',
        icon: 'pi pi-fw pi-caret-right',
        command: () => {
          window.open('https://api.whatsapp.com/send?text=check out this Property :'
            + this.url + this.shareprop.propId, 'popupwindow', 'width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable');
        }
      },
      {
        label: 'Linkedin',
        icon: 'pi pi-fw pi-caret-right',
        command: () => {
          window.open('https://www.linkedin.com/shareArticle?mini=true&url='
            + this.url + this.shareprop.propId
            + '&title=Check out this property from Myron Homes:', 'popupwindow',
            'width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable'
          );
        }
      },
      {
        label: 'Twitter',
        icon: 'pi pi-fw pi-caret-right',
        command: () => {
          window.open('https://twitter.com/intent/tweet??text=check out this Property :'
            + this.url + this.shareprop.propId, 'popupwindow', 'width=800,height=500,left=200,top=5,scrollbars,toolbar=0,resizable');
        }
      },
      {
        label: 'Mail',
        icon: 'pi pi-fw pi-caret-right',
        command: () => {
          this.viewMail(this.shareprop.propId);
        }
      },
      { separator: true },
      {
        label: 'Quit', icon: 'pi pi-fw pi-times'
      }
    ];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }


  onSortChange(value) {
    if (value.indexOf('!') === 0) {
      this.sortingfn(value.substring(1, value.length), true);
    } else {
      this.sortingfn(value, false);
    }
    this.sortOrder = -1;
  }

  ShortListProp(prop: any) {
    prop.shortlisted = !prop.shortlisted;
    if (this.commonService.userProfile && this.commonService.userProfile.userId !== '') {
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
    } else {
      // this.commonService.s
      this.messageService.add({ severity: 'warn', summary: 'Login', detail: 'please login to shorlist propertys' });
    }
  }

  onMailDisp(val: any) {
    this.showmail = val;
  }

  viewMail(propId: any) {
    this.showmail = true;
    this.selPropId = propId;
  }

  viewContact(prop: any) {
    const valid = this.showLoginMsg('Please login to view contact details');
    if (valid) {
      this.showcontact = true;
      this.selContact = prop.builder;
      const userenqCust: UserenqReq = {
        id: 0,
        companyId: prop.companyId,
        propId: prop.propId,
        userId: this.commonService.userProfile.userId,
        status: 'viewed Builder contact details'
      };
      this.httpService.updateEnqCust(userenqCust).subscribe((data: any) => {
        // no message to user.
      });
    }
  }

  viewDetails(prop: Plist) {
    this.commonService.propDtls = prop;
    this.router.navigate(['/mpropdtl/' + prop.propId]);
  }

  showLoginMsg(msg: any): boolean {
    let valid = true;
    if (!(this.commonService.userProfile && this.commonService.userProfile.userId)) {
      valid = false;
      this.messageService.add({ severity: 'warn', summary: 'Login', detail: msg });
    }
    return valid;
  }

  socialShare(prop: any, msg: any) {
    if (this.commonService.userProfile && this.commonService.userProfile.userId) {
      const crdtReq: Credit = {
        id: 0,
        propId: prop.propId,
        companyId: prop.companyId,
        userId: this.commonService.userProfile.userId,
        type: 'refferal',
        date: '',
        creditedBy: msg,
        count: 1
      };
      this.httpService.saveCredits(crdtReq).subscribe((data: any) => {
        // no message
      });
    }
  }

  sortingfn(key: any, reverse: boolean) {
    this.propLst = this.sort(this.propLst, key, reverse);
  }

  private sort(value: any[], key?: any, reverse?: boolean): any[] {
    // const isInside = key && key.indexOf('.') !== -1;
    // if (isInside) {
    //   key = key.split('.');
    // }
    const array: any[] = value.sort((a: any, b: any): number => {
      if (!key) {
        return a > b ? 1 : -1;
      }
      if (key === 'cost' || key === 'size') {
        // return Number(this.getValue(a, key)) > Number(this.getValue(b, key)) ? 1 : -1;
        return Number(a[key]) > Number(b[key]) ? 1 : -1;
      }
      // if (!isInside) {
      // }
      return a[key] > b[key] ? 1 : -1;
      // return this.getValue(a, key) > this.getValue(b, key) ? 1 : -1;
    });
    if (reverse) {
      return array.reverse();
    }
    return array;
  }

  // private getValue(object: any, key: string[]) {
  //   for (let i = 0, n = key.length; i < n; ++i) {
  //     const k = key[i];
  //     if (!(k in object)) {
  //       return;
  //     }
  //     object = object[k];
  //   }
  //   return object;
  // }

}
