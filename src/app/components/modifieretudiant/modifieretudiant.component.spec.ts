import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieretudiantComponent } from './modifieretudiant.component';

describe('ModifieretudiantComponent', () => {
  let component: ModifieretudiantComponent;
  let fixture: ComponentFixture<ModifieretudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieretudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
