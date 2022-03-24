import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantdashboardComponent } from './etudiantdashboard.component';

describe('EtudiantdashboardComponent', () => {
  let component: EtudiantdashboardComponent;
  let fixture: ComponentFixture<EtudiantdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
