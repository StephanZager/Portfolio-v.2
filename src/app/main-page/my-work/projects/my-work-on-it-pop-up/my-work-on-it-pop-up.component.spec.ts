import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkOnItPopUpComponent } from './my-work-on-it-pop-up.component';

describe('MyWorkOnItPopUpComponent', () => {
  let component: MyWorkOnItPopUpComponent;
  let fixture: ComponentFixture<MyWorkOnItPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkOnItPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWorkOnItPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
