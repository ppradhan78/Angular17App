import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSingletonTestComponent } from './singleton-test.component';

describe('SingletonTestComponent', () => {
  let component: NonSingletonTestComponent;
  let fixture: ComponentFixture<NonSingletonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonSingletonTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonSingletonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
