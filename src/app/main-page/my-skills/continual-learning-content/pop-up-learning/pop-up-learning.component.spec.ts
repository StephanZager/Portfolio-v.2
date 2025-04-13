import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpLearningComponent } from './pop-up-learning.component';

describe('PopUpLearningComponent', () => {
  let component: PopUpLearningComponent;
  let fixture: ComponentFixture<PopUpLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
