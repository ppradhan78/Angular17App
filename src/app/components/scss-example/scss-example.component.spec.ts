import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssExampleComponent } from './scss-example.component';

describe('ScssExampleComponent', () => {
  let component: ScssExampleComponent;
  let fixture: ComponentFixture<ScssExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScssExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
