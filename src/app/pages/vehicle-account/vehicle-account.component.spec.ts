import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAccountComponent } from './vehicle-account.component';

describe('VehicleAccountComponent', () => {
  let component: VehicleAccountComponent;
  let fixture: ComponentFixture<VehicleAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
