import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpropdetailComponent } from './mpropdetail.component';

describe('MpropdetailComponent', () => {
  let component: MpropdetailComponent;
  let fixture: ComponentFixture<MpropdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpropdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpropdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
