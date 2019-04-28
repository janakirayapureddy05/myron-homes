import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSearchComponent } from './carousel-search.component';

describe('CarouselSearchComponent', () => {
  let component: CarouselSearchComponent;
  let fixture: ComponentFixture<CarouselSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
