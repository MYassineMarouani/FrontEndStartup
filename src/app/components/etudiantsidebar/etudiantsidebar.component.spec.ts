import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsidebarComponent } from './etudiantsidebar.component';

describe('EtudiantsidebarComponent', () => {
  let component: EtudiantsidebarComponent;
  let fixture: ComponentFixture<EtudiantsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
