import { Credit } from './userclass';

export class Plist {
    propId: any;
    type?: string;
    title?: string;
    location?: string;
    latitude?: any;
    longitude?: any;
    description?: string;
    size?: string;
    cost?: string;
    layout?: string;
    broucher?: string;
    pdate?: string;
    companyId?: any;
    status: boolean;
    projectHlts?: any;
    locationHlts?: any;
    builder?: BuilderDtls;
    images?: any[];
    shortlisted?: boolean;
    shortlistId?: number;
    specifics?: any;
    amenities?: any;
    otherAmnty?: any;
}
export class PropReq {
    title: any;
    images: any[];
    layout: any;
    broucher: any;
    type: any;
    location: any;
    latitude: number;
    longitude: number;
    size: any;
    cost: any;
    description: any;
    projectHlts: any;
    locationHlts: any;
    companyId: number;
    specifics: any;
    amenities: any;
    otherAmnty: any;
}

export class MailReq {
    mailIds: any;
    subject: any;
    body: any;
    updateCrdts?: boolean;
    creditsDtls?: Credit;
}

export class PropShrtlst {
    id?: any;
    status?: boolean;
    userId?: true;
    propId?: any;
    companyId?: any;
}

export class BuilderDtls {
    companyId: any;
    userId: string;
    name: any;
    mail: any;
    website: any;
    location?: any;
    phone: any;
    status: any;
}

export class UserenqCust {
    companyId: any;
    propId: any;
    userId: string;
    status: string;
    name: string;
    mail: string;
    phone: string;
    title: string;
}

export class UserenqReq {
    id: number;
    companyId: any;
    propId: any;
    userId: string;
    status: any;
}
