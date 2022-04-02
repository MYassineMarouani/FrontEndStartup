import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotformatteurComponent } from './depotformatteur.component';

describe('DepotformatteurComponent', () => {
  let component: DepotformatteurComponent;
  let fixture: ComponentFixture<DepotformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
