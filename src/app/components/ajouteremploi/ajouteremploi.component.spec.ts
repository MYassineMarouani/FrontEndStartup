import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteremploiComponent } from './ajouteremploi.component';

describe('AjouteremploiComponent', () => {
  let component: AjouteremploiComponent;
  let fixture: ComponentFixture<AjouteremploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteremploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteremploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
