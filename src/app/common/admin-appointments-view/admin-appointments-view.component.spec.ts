import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentsViewComponent } from './admin-appointments-view.component';

describe('AdminAppointmentsViewComponent', () => {
  let component: AdminAppointmentsViewComponent;
  let fixture: ComponentFixture<AdminAppointmentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAppointmentsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppointmentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
