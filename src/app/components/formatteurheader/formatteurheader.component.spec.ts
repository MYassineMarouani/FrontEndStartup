import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatteurheaderComponent } from './formatteurheader.component';

describe('FormatteurheaderComponent', () => {
  let component: FormatteurheaderComponent;
  let fixture: ComponentFixture<FormatteurheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatteurheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatteurheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
