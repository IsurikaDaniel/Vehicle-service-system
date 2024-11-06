import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbackViewComponent } from './admin-feedback-view.component';

describe('AdminFeedbackViewComponent', () => {
  let component: AdminFeedbackViewComponent;
  let fixture: ComponentFixture<AdminFeedbackViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminFeedbackViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFeedbackViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
