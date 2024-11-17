import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConactbarComponent } from './conactbar.component';

describe('ConactbarComponent', () => {
  let component: ConactbarComponent;
  let fixture: ComponentFixture<ConactbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConactbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConactbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
