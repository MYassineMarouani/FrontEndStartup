import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformatteurComponent } from './modifierformatteur.component';

describe('ModifierformatteurComponent', () => {
  let component: ModifierformatteurComponent;
  let fixture: ComponentFixture<ModifierformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
