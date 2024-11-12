import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDasbordComponent } from './admin-dasbord.component';

describe('AdminDasbordComponent', () => {
  let component: AdminDasbordComponent;
  let fixture: ComponentFixture<AdminDasbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDasbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDasbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
