import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyReactiveFormsComponent } from './dynamically-reactive-forms.component';

describe('DynamicallyReactiveFormsComponent', () => {
  let component: DynamicallyReactiveFormsComponent;
  let fixture: ComponentFixture<DynamicallyReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicallyReactiveFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicallyReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
