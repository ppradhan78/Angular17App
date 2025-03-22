import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorExampleComponent } from './validator-example.component';

describe('ValidatorExampleComponent', () => {
  let component: ValidatorExampleComponent;
  let fixture: ComponentFixture<ValidatorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
