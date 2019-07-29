import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlstPropComponent } from './shortlst-prop.component';

describe('ShortlstPropComponent', () => {
  let component: ShortlstPropComponent;
  let fixture: ComponentFixture<ShortlstPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlstPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlstPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
