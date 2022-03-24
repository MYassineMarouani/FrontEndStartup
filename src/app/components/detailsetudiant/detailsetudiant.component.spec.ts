import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsetudiantComponent } from './detailsetudiant.component';

describe('DetailsetudiantComponent', () => {
  let component: DetailsetudiantComponent;
  let fixture: ComponentFixture<DetailsetudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsetudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsetudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
