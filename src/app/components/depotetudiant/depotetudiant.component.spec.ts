import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotetudiantComponent } from './depotetudiant.component';

describe('DepotetudiantComponent', () => {
  let component: DepotetudiantComponent;
  let fixture: ComponentFixture<DepotetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
