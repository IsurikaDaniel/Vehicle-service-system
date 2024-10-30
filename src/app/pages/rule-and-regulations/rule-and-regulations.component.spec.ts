import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleAndRegulationsComponent } from './rule-and-regulations.component';

describe('RuleAndRegulationsComponent', () => {
  let component: RuleAndRegulationsComponent;
  let fixture: ComponentFixture<RuleAndRegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleAndRegulationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleAndRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
