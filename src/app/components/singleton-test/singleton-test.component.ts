import { Component } from '@angular/core';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

@Component({
  selector: 'app-singleton-test',
  standalone: true,
  imports: [TestOneComponent, TestTwoComponent],
  templateUrl: './singleton-test.component.html',
  styleUrl: './singleton-test.component.scss'
})
export class SingletonTestComponent {
  
}
