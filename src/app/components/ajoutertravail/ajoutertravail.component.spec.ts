import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertravailComponent } from './ajoutertravail.component';

describe('AjoutertravailComponent', () => {
  let component: AjoutertravailComponent;
  let fixture: ComponentFixture<AjoutertravailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutertravailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
