import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipExampleComponent } from './impure-pip-example.component';

describe('ImpurePipExampleComponent', () => {
  let component: ImpurePipExampleComponent;
  let fixture: ComponentFixture<ImpurePipExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpurePipExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpurePipExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
