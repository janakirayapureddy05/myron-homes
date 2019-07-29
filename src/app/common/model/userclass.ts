import { AnimateChildAst } from '@angular/animations/browser/src/dsl/animation_ast';

export class UserLoginReq {
     id: any;
     name: string;
     phone: string;
     mail: string;
     password: string;
     type: string;
     oldpassword: string;
}
export class UserProfile {
    userId: string;
    companyId: any;
    name: string;
    gender: string;
    phone: string;
    mail: string;
    location: string;
    occupation: string;
    website: string;
    userType: string;
    companyStatus: any;
    adminId?: any;
}
export class AddressBook {
    id: any;
    name: string;
    phone: string;
    mail?: string;
    userId?: any;
}
export class Credit {
    id: number;
    creditedBy: string;
    count: any;
    date: any;
    type?: any;
    companyId?: number;
    propId?: number;
    userId?: any;
}
