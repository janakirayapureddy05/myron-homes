import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Plist } from '../model/pList';
import { PagerService, CommonService } from "../services/index";

@Component({
  selector: 'app-m-list',
  templateUrl: './m-list.component.html',
  styleUrls: ['./m-list.component.css']
})
export class MListComponent implements OnInit {
  resdentialTypes: any[]=[];
  locationRes: any[] = [];
  selLocation: any[]=[];
  more= false;
  url="https://myronhomes.in/";

  constructor(
    private router: Router,
    private pagerService: PagerService,
    private commonService: CommonService
  ) { }

  propLsttemp:any[];


  ngOnInit() {
    this.resdentialTypes.push(this.commonService.selectedResTypes);
    this.resdentialTypes[0].checked=true;
    this.locationRes = this.commonService.selectedLocations;
    for(let i=0; i<this.locationRes.length; i++){
      this.locationRes[i].checked= true;
    }
    this.propLsttemp = this.propLst;
    this.setPage(1);
  }

  filterResTypes(){
    //this.selResdentialTypes.push(res);
  }

  filterLocTypes(loc){
    this.propLsttemp = this.propLst.filter(function(prop){
      if(prop.location===loc.location){
        if(loc.checked===false)
        return prop;
      }else{
        return prop;
      }
    })
    this.setPage(1);
  }

  gotopropdtl(){
    this.router.navigate(['/mpropdtl']);
  }
  
  // slider change....................
  rangeValues: number[] = [0, 1000];
  areaSizeVals: number[] = [0, 10000];

  sizeChange(event){
    this.propLsttemp = this.propLst.filter(function(prop){
      if(event.values[1]===10000 && Number(prop.size)>event.values[0]){
        return prop;
      }else{
       if(Number(prop.size)>event.values[0] && Number(prop.size)<event.values[1]){
         return prop;
       }
      }
    });
    this.setPage(1);
  }

  costChange(event){
    this.propLsttemp = this.propLst.filter(function(prop){
      if(event.values[1]===1000){
        let minval = event.values[0]*100000
       if(Number(prop.cost)>minval)
       return prop;
      }else{
        let minval = event.values[0]*100000;
        let maxval = event.values[1]*100000
        if( Number(prop.cost)>minval && Number(prop.cost)<maxval){
          return prop;
        }
      }
    });
    this.setPage(1);
  }

  // paginatation changes
  pager: any = {};
  pagedItems: any[];

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.propLsttemp.length, page, 5);

    // get current page of items
    this.pagedItems = this.propLsttemp.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

//dummy data
  propLst: Plist[]=[
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Kondapur Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Gachibowli Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "1000",
      cost: "10000000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Ameerpeta Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "secundrabad Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "secundrabad Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "secundrabad Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Ameerpeta Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Ameerpeta Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Gachibowli Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Gachibowli Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Kondapur Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Gachibowli Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
    {id: "1",
      type: "Residential",
      title: "KINGS MARQUE HMDA approved venture at Tukkuguda",
      location: "Kondapur Telengana",
      latitude: "51.678418",
      longitude:"7.809007",
      shorlisted:"false",
      description: "An east facing 4 bhk resale flat is available in the promising locality of gachibowli, hyderabad. It is a ready to move in spacious flat and is located on the 16th floor. Every single detail of the flat is carefully designed. This feng shui/vaastu compliant property offers quality specifications such as lift(S), park, visitor parking, water storage, intercom facility and security/fire alarm. It is a gated society flat. It provides a spectacular view of the park/garden, main road, club and pool. The apartment is priced at rs. 37600000 (Rs. 7999 per sq. Ft. ). It is a freehold property, with a super built-Up area of 4701 sq. Ft. The property price is all inclusive. It has 6 bathroom(S). The flat comprises of 2 balcony(S). 24x7 water supply from municipal corporation and borewell/tank.",
      size: "7999",
      cost: "37700000",
      postedon: "Apr 20, 2019",
      Builders:"Myron",
      imgsrc: [{source:'assets/images-myron/prop1/img1.jpeg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/prop1/img2.jpg',alt:'Description for Image 1', title:'Title 3'}]
    },
  ]
}
