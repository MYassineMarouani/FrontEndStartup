import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesformationsComponent } from './touslesformations.component';

describe('TouslesformationsComponent', () => {
  let component: TouslesformationsComponent;
  let fixture: ComponentFixture<TouslesformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
