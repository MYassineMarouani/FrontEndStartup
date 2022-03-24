import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterformatteurComponent } from './ajouterformatteur.component';

describe('AjouterformatteurComponent', () => {
  let component: AjouterformatteurComponent;
  let fixture: ComponentFixture<AjouterformatteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterformatteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterformatteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
