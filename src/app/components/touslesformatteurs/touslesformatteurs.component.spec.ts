import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesformatteursComponent } from './touslesformatteurs.component';

describe('TouslesformatteursComponent', () => {
  let component: TouslesformatteursComponent;
  let fixture: ComponentFixture<TouslesformatteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesformatteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesformatteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
