import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantcalendrierComponent } from './etudiantcalendrier.component';

describe('EtudiantcalendrierComponent', () => {
  let component: EtudiantcalendrierComponent;
  let fixture: ComponentFixture<EtudiantcalendrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantcalendrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantcalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
