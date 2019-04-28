import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-search',
  templateUrl: './carousel-search.component.html',
  styleUrls: ['./carousel-search.component.css']
})
export class CarouselSearchComponent implements OnInit {

  images:any[];

  constructor() {
    this.images = [];
    this.images.push(
      {source:'assets/images-myron/img1.jpg',alt:'Description for Image 1', title:'Title 3'},
      {source:'assets/images-myron/img4.jpg',alt:'Description for Image 1', title:'Title 3'},
    )
   }

  ngOnInit() {
  }


}
