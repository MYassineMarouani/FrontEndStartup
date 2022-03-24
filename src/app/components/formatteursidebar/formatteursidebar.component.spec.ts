import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatteursidebarComponent } from './formatteursidebar.component';

describe('FormatteursidebarComponent', () => {
  let component: FormatteursidebarComponent;
  let fixture: ComponentFixture<FormatteursidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatteursidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatteursidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
