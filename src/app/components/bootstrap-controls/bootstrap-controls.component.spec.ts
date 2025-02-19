import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapControlsComponent } from './bootstrap-controls.component';

describe('BootstrapControlsComponent', () => {
  let component: BootstrapControlsComponent;
  let fixture: ComponentFixture<BootstrapControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
