import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionManagementComponent } from './session-management.component';

describe('SessionManagementComponent', () => {
  let component: SessionManagementComponent;
  let fixture: ComponentFixture<SessionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
