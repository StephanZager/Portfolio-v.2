import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinualLearningContentComponent } from './continual-learning-content.component';

describe('ContinualLearningContentComponent', () => {
  let component: ContinualLearningContentComponent;
  let fixture: ComponentFixture<ContinualLearningContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinualLearningContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinualLearningContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
