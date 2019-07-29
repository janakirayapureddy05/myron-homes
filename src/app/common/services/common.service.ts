
import { Injectable } from '@angular/core';
import { UserProfile } from '../model/userclass';
import { Plist } from '../model/property';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CommonService {
    public mockData = true;
    public selPropTypes: string[];
    public selPropLocs: string[];
    public selLocation: any[];
    public propLocTypes: any[];
    public userProfile: UserProfile;
    public propertys: Plist[];
    private propertysSub = new Subject<any>();
    private updateProfile = new Subject<any>();
    public propDtls: Plist;
    public ltstProps: Plist[];
    public shrtlstProps: Plist[];
    private shrtlstPropsSub = new Subject<any>();
    setPropertySub(data: any) {
        this.propertysSub.next(data);
    }
    getPropertySub(): Observable<any> {
        return this.propertysSub.asObservable();
    }
    setUpdateProfile(data: any) {
        this.updateProfile.next(data);
    }
    getupdateProfile(): Observable<any> {
        return this.updateProfile.asObservable();
    }
    setshrtlstPropsSub(data: any) {
        this.shrtlstPropsSub.next(data);
    }
    getshrtlstPropsSub(): Observable<any> {
        return this.shrtlstPropsSub.asObservable();
    }
    public constructor() { }
}
