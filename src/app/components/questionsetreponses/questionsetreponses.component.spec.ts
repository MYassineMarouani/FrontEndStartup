import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsetreponsesComponent } from './questionsetreponses.component';

describe('QuestionsetreponsesComponent', () => {
  let component: QuestionsetreponsesComponent;
  let fixture: ComponentFixture<QuestionsetreponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsetreponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsetreponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
