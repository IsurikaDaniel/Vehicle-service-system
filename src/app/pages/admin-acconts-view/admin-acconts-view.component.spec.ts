import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccontsViewComponent } from './admin-acconts-view.component';

describe('AdminAccontsViewComponent', () => {
  let component: AdminAccontsViewComponent;
  let fixture: ComponentFixture<AdminAccontsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccontsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccontsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
