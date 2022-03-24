import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieremploiComponent } from './modifieremploi.component';

describe('ModifieremploiComponent', () => {
  let component: ModifieremploiComponent;
  let fixture: ComponentFixture<ModifieremploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieremploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieremploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
