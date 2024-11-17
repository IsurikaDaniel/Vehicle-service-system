import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConactsidebarComponent } from './conactsidebar.component';

describe('ConactsidebarComponent', () => {
  let component: ConactsidebarComponent;
  let fixture: ComponentFixture<ConactsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConactsidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConactsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
