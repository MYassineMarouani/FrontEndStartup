import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatteurcalendrierComponent } from './formatteurcalendrier.component';

describe('FormatteurcalendrierComponent', () => {
  let component: FormatteurcalendrierComponent;
  let fixture: ComponentFixture<FormatteurcalendrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatteurcalendrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatteurcalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
