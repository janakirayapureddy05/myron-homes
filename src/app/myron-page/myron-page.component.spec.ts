import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyronPageComponent } from './myron-page.component';

describe('MyronPageComponent', () => {
  let component: MyronPageComponent;
  let fixture: ComponentFixture<MyronPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyronPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyronPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
