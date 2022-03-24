import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsformatteurComponent } from './detailsformatteur.component';

describe('DetailsformatteurComponent', () => {
  let component: DetailsformatteurComponent;
  let fixture: ComponentFixture<DetailsformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
