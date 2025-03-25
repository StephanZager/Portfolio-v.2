import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenzenItemComponent } from './referenzen-item.component';

describe('ReferenzenItemComponent', () => {
  let component: ReferenzenItemComponent;
  let fixture: ComponentFixture<ReferenzenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenzenItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenzenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
