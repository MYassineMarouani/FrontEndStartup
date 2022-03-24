import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesemploisComponent } from './touslesemplois.component';

describe('TouslesemploisComponent', () => {
  let component: TouslesemploisComponent;
  let fixture: ComponentFixture<TouslesemploisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouslesemploisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouslesemploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
