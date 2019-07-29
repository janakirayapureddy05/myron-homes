import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropertysComponent } from './new-propertys.component';

describe('NewPropertysComponent', () => {
  let component: NewPropertysComponent;
  let fixture: ComponentFixture<NewPropertysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPropertysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropertysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
