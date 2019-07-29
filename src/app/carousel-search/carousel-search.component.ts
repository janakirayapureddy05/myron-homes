import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-search',
  templateUrl: './carousel-search.component.html',
  styleUrls: ['./carousel-search.component.css']
})
export class CarouselSearchComponent implements OnInit {

  images: any[];
  visibleSidebar2;

  constructor(private router: Router) {
    this.images = [];
    this.images.push(
      {source: 'assets/images-myron/img1.jpg', alt: 'Description for Image 1', title: 'Title 3'},
      {source: 'assets/images-myron/img2.jpg', alt: 'Description for Image 1', title: 'Title 3'},
      {source: 'assets/images-myron/img3.jpg', alt: 'Description for Image 1', title: 'Title 3'},
    );
   }

  ngOnInit() {
  }

  gotomyron() {
    this.router.navigate(['/about']);
  }
}
