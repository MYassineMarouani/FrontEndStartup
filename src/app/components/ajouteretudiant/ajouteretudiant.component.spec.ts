import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteretudiantComponent } from './ajouteretudiant.component';

describe('AjouteretudiantComponent', () => {
  let component: AjouteretudiantComponent;
  let fixture: ComponentFixture<AjouteretudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteretudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
