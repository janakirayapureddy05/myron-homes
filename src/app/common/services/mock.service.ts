import { Injectable } from '@angular/core';
import { UserProfile } from '../model/userclass';
import { Plist } from '../model/property';

@Injectable()
export class MockService {
    public constructor() { }

    userLogin(type: any): UserProfile {
        if (type === 'user') {
            return {
                userId: 'MY66668',
                companyId: 0,
                name: 'janaki',
                mail: 'anji.bandapalli@gmail.com',
                phone: '9999999999',
                location: null,
                occupation: null,
                gender: 'female',
                website: null,
                userType: 'user',
                companyStatus: null,
                adminId: 42
            };
        } else if (type === 'cadmin') {
            return {
                userId: 'MY66667',
                companyId: 6,
                name: 'Johns Company',
                mail: 'janaki.johnny@gmail.com',
                phone: '9951362100',
                location: 'janaki.website1',
                occupation: null,
                gender: null,
                website: null,
                userType: 'cadmin',
                companyStatus: true,
                adminId: 0
            };
        } else if (type === 'admin') {
            return {
                userId: 'MY66666',
                companyId: 0,
                name: 'janaki',
                mail: 'janakirayapureddy05@gmail.com',
                phone: '9951362100',
                location: null,
                occupation: 'developer',
                gender: 'female',
                website: null,
                userType: 'admin',
                companyStatus: null,
                adminId: 21
            };
        }
    }

    getCredits() {
        return {
            refCredits: [
                {
                    id: 2,
                    companyId: 6,
                    userId: 'MY66668',
                    propId: 14,
                    count: '4',
                    creditedBy: 'ravi',
                    type: 'refferal',
                    date: '2019-05-14T07:00:00.000+0000'
                },
                {
                    id: 39,
                    companyId: 6,
                    userId: 'MY66668',
                    propId: 27,
                    count: '1',
                    creditedBy: 'Likedin share',
                    type: 'refferal',
                    date: '2019-06-06T07:00:00.000+0000'
                },
                {
                    id: 40,
                    companyId: 0,
                    userId: 'MY66668',
                    propId: 14,
                    count: '1',
                    creditedBy: 'janaki.johnny@gmail.com',
                    type: 'refferal',
                    date: '2019-06-06T07:00:00.000+0000'
                },
                {
                    id: 43,
                    companyId: 0,
                    userId: 'MY66668',
                    propId: 14,
                    count: '1',
                    creditedBy: 'janaki.johnny@gmail.com',
                    type: 'refferal',
                    date: '2019-06-18T07:00:00.000+0000'
                },
                {
                    id: 44,
                    companyId: 0,
                    userId: 'MY66668',
                    propId: 27,
                    count: '1',
                    creditedBy: 'janaki.johnny@gmail.com',
                    type: 'refferal',
                    date: '2019-06-18T07:00:00.000+0000'
                },
                {
                    id: 45,
                    companyId: 0,
                    userId: 'MY66668',
                    propId: 14,
                    count: '1',
                    creditedBy: 'janaki.johnny@gmail.com',
                    type: 'refferal',
                    date: '2019-06-18T07:00:00.000+0000'
                }
            ],
            purCredits: [
                {
                    id: 1,
                    companyId: 0,
                    userId: 'MY66668',
                    propId: 0,
                    count: '4',
                    creditedBy: 'rahul',
                    type: 'purchase',
                    date: '2019-05-14T07:00:00.000+0000'
                }
            ],
        };
    }

    getAddress() {
        return {
            contacts: [
                {
                    id: 1,
                    userId: 'MY66668',
                    name: 'janaki',
                    mail: 'janaki.johnny@gmail.com',
                    phone: '9999999999'
                },
                {
                    id: 25,
                    userId: 'MY66668',
                    name: 'rahul',
                    mail: 'janakirayapureddy05@gmail.com',
                    phone: '999999999'
                }
            ],
        };
    }

    getProperties() {
        return {
            regStatus: null,
            errors: [],
            loginProfile: null,
            mailStatus: null,
            propId: null,
            exeStatus: null,
            lstEnqCustomrs: null,
            companys: null,
            propLst: [
                {
                    propId: 14,
                    type: 'House',
                    title: 'Myron Aero Integrity Homes',
                    location: 'GHANSIMIYAGUDA, SHAMSHABAD',
                    latitude: 17,
                    longitude: 78,
                    description: 'A Gated community is a residential or housing property containing controlled and protected surroundings most gated communities have a name and exact geographic definition as set apart by the boundaries and gates that control access to the area.',
                    size: '1800',
                    cost: '5000000',
                    layout: 'assets/33/layout.pdf',
                    broucher: 'assets/33/broucher.pdf',
                    companyId: 6,
                    status: true,
                    projectHlts: 'Gated community offers you and your family with a safe, secure, healthy, clean, and hassle free environment.\nAn extremely important aspect of living amongest people in gated community is the sense of community you develop with like minded people.\nUnlike compressed complexes, you are guaranteed more private and serene community.\nIt allows to enjoy high end living with an engaging life sytle.\nGated communities are designed in pollution free environment with restricted traffic with in the complex.\nIt has all basic amenities one needs.',
                    locationHlts: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan.\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    specifics: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    amenities: 'Car Parking,LIFT,24/7 Water Supply,Fire Fighting Systems,Garden/Park,Childrens Play Area,Street Lights,Gymnasium,Club House',
                    otherAmnty: null,
                    images: [
                        {
                            id: 19,
                            propId: 14,
                            source: 'assets/33/img.jpg'
                        },
                        {
                            id: 20,
                            propId: 14,
                            source: 'assets/33/img-1.jpg'
                        }
                    ],
                    shortlisted: true,
                    shortlistId: 26,
                    pdate: '2019-05-14T07:00:00.000+0000',
                    builder: {
                        companyId: 6,
                        userId: 'MY66667',
                        name: 'Johns Company',
                        phone: '9951362100',
                        mail: 'janaki.johnny@gmail.com',
                        website: null,
                        location: 'janaki.website1',
                        status: true
                    }
                },
                {
                    propId: 27,
                    type: 'House',
                    title: 'Myron Aero Integrity Homes',
                    location: 'GHANSIMIYAGUDA, SHAMSHABAD',
                    latitude: 17,
                    longitude: 78,
                    description: 'A Gated community is a residential or housing property containing controlled and protected surroundings most gated communities have a name and exact geographic definition as set apart by the boundaries and gates that control access to the area.',
                    size: '1331',
                    cost: '10000000',
                    layout: 'assets/33/layout.pdf',
                    broucher: 'assets/33/broucher.pdf',
                    companyId: 6,
                    status: true,
                    projectHlts: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    locationHlts: 'Living in a greater community is a perfect option to transform and upgrade your life fundamentally.\nExpose to various amenities and scenic landscape is enough to convince you of this change.\nGated community offers you and your family with a safe, secure, healthy, clean, and hassle free environment.\nAn extremely important aspect of living amongst people in gated community is the sense of community you develop with like minded people.\nUnlike compressed complexes, you are guaranteed more private and serene community.\nIt allows to enjoy high end living with an engaging life sytle.\nGated communities are designed in pollution free environment with restricted traffic with in the complex.\nIt has all basic amenities one needs.',
                    specifics: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    amenities: 'Car Parking,LIFT,24/7 Water Supply,Fire Fighting Systems,Garden/Park,Childrens Play Area,Street Lights,Gymnasium,Club House',
                    otherAmnty: null,
                    images: [
                        {
                            id: 31,
                            propId: 27,
                            source: 'assets/33/img-1.jpg'
                        },
                        {
                            id: 32,
                            propId: 27,
                            source: 'assets/33/img-2.jpg'
                        }
                    ],
                    shortlisted: false,
                    shortlistId: 0,
                    pdate: '2019-05-28T07:00:00.000+0000',
                    builder: {
                        companyId: 6,
                        userId: 'MY66667',
                        name: 'Johns Company',
                        phone: '9951362100',
                        mail: 'janaki.johnny@gmail.com',
                        website: null,
                        location: 'janaki.website1',
                        status: true
                    }
                },
                {
                    propId: 33,
                    type: 'House',
                    title: 'Myron Aero Integrity Homes Area Ranges From 1180 Sq.ft – 1331 Sq.ft   2BHK',
                    location: 'GHANSIMIYAGUDA, SHAMSHABAD',
                    latitude: 17,
                    longitude: 78,
                    description: 'A Gated community is a residential or housing property containing controlled and protected surroundings most gated communities have a name and exact geographic definition as set apart by the boundaries and gates that control access to the area. we have houses area ranges From 1180 Sq.ft – 1331 Sq.ft 2BHK and it\'s 10Min. drive from RAJIV GANDHI INTERNATIONAL AIRPORT',
                    size: '1331',
                    cost: '100000000',
                    layout: 'assets/33/layout.pdf',
                    broucher: 'assets/33/broucher.pdf',
                    companyId: 6,
                    status: true,
                    projectHlts: 'Living in a greater community is a perfect option to transform and upgrade your life fundamentally.\nExpose to various amenities and scenic landscape is enough to convince you of this change.\nGated community offers you and your family with a safe, secure, healthy, clean, and hassle free environment.\nAn extremely important aspect of living among\'st people in gated community is the sense of community you develop with like minded people.\nUnlike compressed complexes, you are guaranteed more private and serene community.\nIt allows to enjoy high end living with an engaging life style.\nGated communities are designed in pollution free environment with restricted traffic with in the complex.\nIt has all basic amenities one needs.',
                    locationHlts: 'Metro Mall At 12Min. Drive\nRGI Airport At 10Min. Drive\nOuter Ring Road At 05 Min. Drive\nnear to Escape Water Park\nDecathlon At 10 Min. Drive',
                    specifics: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    amenities: 'Car Parking,LIFT,24/7 Water Supply,Fire Fighting Systems,Garden/Park,Childrens Play Area,Street Lights,Gymnasium,Club House',
                    otherAmnty: 'Avenue Plantation\nBlack Top Road\nUnderground Drainage',
                    images: [
                        {
                            id: 34,
                            propId: 33,
                            source: 'assets/33/img.jpg'
                        },
                        {
                            id: 35,
                            propId: 33,
                            source: 'assets/33/img-1.jpg'
                        },
                        {
                            id: 36,
                            propId: 33,
                            source: 'assets/33/img-2.jpg'
                        },
                        {
                            id: 37,
                            propId: 33,
                            source: 'assets/33/img-3.jpg'
                        },
                        {
                            id: 38,
                            propId: 33,
                            source: 'assets/33/img-4.jpg'
                        }
                    ],
                    shortlisted: true,
                    shortlistId: 50,
                    pdate: '2019-05-28T07:00:00.000+0000',
                    builder: {
                        companyId: 6,
                        userId: 'MY66667',
                        name: 'Johns Company',
                        phone: '9951362100',
                        mail: 'janaki.johnny@gmail.com',
                        website: null,
                        location: 'janaki.website1',
                        status: true
                    }
                }
            ],
            refCredits: null,
            purCredits: null,
            contacts: null,
            shortLst: null,
            mails: null,
            propById: null
        };
    }

    getShortlstd() {
        return {
            regStatus: null,
            errors: [],
            loginProfile: null,
            mailStatus: null,
            propId: null,
            exeStatus: null,
            lstEnqCustomrs: null,
            companys: null,
            propLst: [
                {
                    propId: 14,
                    type: 'House',
                    title: 'Myron Aero Integrity Homes',
                    location: 'GHANSIMIYAGUDA, SHAMSHABAD',
                    latitude: 17,
                    longitude: 78,
                    description: 'A Gated community is a residential or housing property containing controlled and protected surroundings most gated communities have a name and exact geographic definition as set apart by the boundaries and gates that control access to the area.',
                    size: '1800',
                    cost: '5000000',
                    layout: 'assets/33/layout.pdf',
                    broucher: 'assets/33/broucher.pdf',
                    companyId: 6,
                    status: true,
                    projectHlts: 'Gated community offers you and your family with a safe, secure, healthy, clean, and hassle free environment.\nAn extremely important aspect of living amongest people in gated community is the sense of community you develop with like minded people.\nUnlike compressed complexes, you are guaranteed more private and serene community.\nIt allows to enjoy high end living with an engaging life sytle.\nGated communities are designed in pollution free environment with restricted traffic with in the complex.\nIt has all basic amenities one needs.',
                    locationHlts: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan.\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    specifics: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    amenities: 'Car Parking,LIFT,24/7 Water Supply,Fire Fighting Systems,Garden/Park,Childrens Play Area,Street Lights,Gymnasium,Club House',
                    otherAmnty: null,
                    images: [
                        {
                            id: 19,
                            propId: 14,
                            source: 'assets/33/img.jpg'
                        },
                        {
                            id: 20,
                            propId: 14,
                            source: 'assets/33/img-1.jpg'
                        }
                    ],
                    shortlisted: true,
                    shortlistId: 0,
                    pdate: '2019-05-14T07:00:00.000+0000',
                    builder: {
                        companyId: 6,
                        userId: 'MY66667',
                        name: 'Johns Company',
                        phone: '9951362100',
                        mail: 'janaki.johnny@gmail.com',
                        website: null,
                        location: 'janaki.website1',
                        status: true
                    }
                },
                {
                    propId: 33,
                    type: 'House',
                    title: 'Myron Aero Integrity Homes Area Ranges From 1180 Sq.ft – 1331 Sq.ft   2BHK',
                    location: 'GHANSIMIYAGUDA, SHAMSHABAD',
                    latitude: 17,
                    longitude: 78,
                    description: 'A Gated community is a residential or housing property containing controlled and protected surroundings most gated communities have a name and exact geographic definition as set apart by the boundaries and gates that control access to the area. we have houses area ranges From 1180 Sq.ft – 1331 Sq.ft 2BHK and it\'s 10Min. drive from RAJIV GANDHI INTERNATIONAL AIRPORT',
                    size: '1331',
                    cost: '100000000',
                    layout: 'assets/33/layout.pdf',
                    broucher: 'assets/33/broucher.pdf',
                    companyId: 6,
                    status: true,
                    projectHlts: 'Living in a greater community is a perfect option to transform and upgrade your life fundamentally.\nExpose to various amenities and scenic landscape is enough to convince you of this change.\nGated community offers you and your family with a safe, secure, healthy, clean, and hassle free environment.\nAn extremely important aspect of living among\'st people in gated community is the sense of community you develop with like minded people.\nUnlike compressed complexes, you are guaranteed more private and serene community.\nIt allows to enjoy high end living with an engaging life style.\nGated communities are designed in pollution free environment with restricted traffic with in the complex.\nIt has all basic amenities one needs.',
                    locationHlts: 'Metro Mall At 12Min. Drive\nRGI Airport At 10Min. Drive\nOuter Ring Road At 05 Min. Drive\nnear to Escape Water Park\nDecathlon At 10 Min. Drive',
                    specifics: 'Structure : RCC Framed Structure\nSuper Structure : Mud brick in cement mortar\nPlastering : Double coat cement with smooth finishing (both inside and outside)\nMain Door : M teak frames with teak shutter with fitting\nInternal Doors : M teak wood frames with flush shutters pointed\nWindows : Alluminium two track shutter with frame along with plain glass and safety grill\nFlooring : Vitrified tiles in all rooms, non-skid ceramic tiles in bathroom\nKitchen : Black granite plat form with glazed tiles Dano with stainless sink\nToilet : Glazed tiles dado upto door height. All toilets will have EWC/IWC wall mixer shower points geyser points and provision for exhaust fan\nElectrical : Concealed copper wiring in pvc conduits with modular switches adequate points like fans points, tv, tele-phone points, 15a/5a power plugs\nPaintings : Putty finish for internal walls emulsion paints for internal walls and external walls with good quality paints/ textured finish doors and windows with enamel paint\nExternal Amenities : Landscape area, underground swage line, tank for water ',
                    amenities: 'Car Parking,LIFT,24/7 Water Supply,Fire Fighting Systems,Garden/Park,Childrens Play Area,Street Lights,Gymnasium,Club House',
                    otherAmnty: 'Avenue Plantation\nBlack Top Road\nUnderground Drainage',
                    images: [
                        {
                            id: 34,
                            propId: 33,
                            source: 'assets/33/img.jpg'
                        },
                        {
                            id: 35,
                            propId: 33,
                            source: 'assets/33/img-1.jpg'
                        },
                        {
                            id: 36,
                            propId: 33,
                            source: 'assets/33/img-2.jpg'
                        },
                        {
                            id: 37,
                            propId: 33,
                            source: 'assets/33/img-3.jpg'
                        },
                        {
                            id: 38,
                            propId: 33,
                            source: 'assets/33/img-4.jpg'
                        }
                    ],
                    shortlisted: true,
                    shortlistId: 0,
                    pdate: '2019-05-28T07:00:00.000+0000',
                    builder: {
                        companyId: 6,
                        userId: 'MY66667',
                        name: 'Johns Company',
                        phone: '9951362100',
                        mail: 'janaki.johnny@gmail.com',
                        website: null,
                        location: 'janaki.website1',
                        status: true
                    }
                }
            ],
            refCredits: null,
            purCredits: null,
            contacts: null,
            shortLst: null,
            mails: null,
            propById: null
        };
    }

    getCompanys() {
        return {
            regStatus: null,
            errors: [],
            loginProfile: null,
            mailStatus: null,
            propId: null,
            exeStatus: null,
            lstEnqCustomrs: null,
            companys: [
                {
                    companyId: 6,
                    userId: 'MY66667',
                    name: 'Johns Company',
                    phone: '9951362100',
                    mail: 'janaki.johnny@gmail.com',
                    website: null,
                    location: 'janaki.website1',
                    status: true
                }
            ],
            propLst: null,
            refCredits: null,
            purCredits: null,
            contacts: null,
            shortLst: null,
            mails: null,
            propById: null
        };
    }

    getEnqCustom() {
        return {
            lstEnqCustomrs: [
                {
                    companyId: 6,
                    propId: 14,
                    userId: 'MY66668',
                    status: 'viewed contact Info',
                    name: 'janaki',
                    mail: 'anji.bandapalli@gmail.com',
                    phone: '9999999999',
                    title: 'Myron Aero Integrity Homes'
                },
                {
                    companyId: 6,
                    propId: 14,
                    userId: 'MY66668',
                    status: 'viewed Builder contact details',
                    name: 'janaki',
                    mail: 'anji.bandapalli@gmail.com',
                    phone: '9999999999',
                    title: 'Myron Aero Integrity Homes'
                },
                {
                    companyId: 6,
                    propId: 27,
                    userId: 'MY66668',
                    status: 'viewed Builder contact details',
                    name: 'janaki',
                    mail: 'anji.bandapalli@gmail.com',
                    phone: '9999999999',
                    title: 'Myron Aero Integrity Homes'
                }
            ],
        };
    }
}
