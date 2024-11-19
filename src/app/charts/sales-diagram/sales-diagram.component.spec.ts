import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDiagramComponent } from './sales-diagram.component';

describe('SalesDiagramComponent', () => {
  let component: SalesDiagramComponent;
  let fixture: ComponentFixture<SalesDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesDiagramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
