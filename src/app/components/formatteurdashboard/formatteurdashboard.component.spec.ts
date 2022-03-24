import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatteurdashboardComponent } from './formatteurdashboard.component';

describe('FormatteurdashboardComponent', () => {
  let component: FormatteurdashboardComponent;
  let fixture: ComponentFixture<FormatteurdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatteurdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatteurdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
