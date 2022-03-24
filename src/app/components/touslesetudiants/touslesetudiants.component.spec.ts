import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesetudiantsComponent } from './touslesetudiants.component';

describe('TouslesetudiantsComponent', () => {
  let component: TouslesetudiantsComponent;
  let fixture: ComponentFixture<TouslesetudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesetudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesetudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
