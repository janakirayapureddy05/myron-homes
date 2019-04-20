import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsearchComponent } from './msearch.component';

describe('MsearchComponent', () => {
  let component: MsearchComponent;
  let fixture: ComponentFixture<MsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
