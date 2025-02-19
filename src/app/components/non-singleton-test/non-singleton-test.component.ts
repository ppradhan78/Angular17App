import { Component } from '@angular/core';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

@Component({
  selector: 'app-non-singleton-test',
  standalone: true,
  imports: [TestOneComponent, TestTwoComponent],
  templateUrl: './non-singleton-test.component.html',
  styleUrl: './non-singleton-test.component.scss'
})
export class NonSingletonTestComponent {
  
}
