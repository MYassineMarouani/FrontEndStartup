import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierformationComponent } from './modifierformation.component';

describe('ModifierformationComponent', () => {
  let component: ModifierformationComponent;
  let fixture: ComponentFixture<ModifierformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
