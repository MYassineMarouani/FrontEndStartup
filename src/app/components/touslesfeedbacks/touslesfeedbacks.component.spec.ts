import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesfeedbacksComponent } from './touslesfeedbacks.component';

describe('TouslesfeedbacksComponent', () => {
  let component: TouslesfeedbacksComponent;
  let fixture: ComponentFixture<TouslesfeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesfeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
