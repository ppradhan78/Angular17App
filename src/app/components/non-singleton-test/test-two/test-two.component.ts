import { Component } from '@angular/core';
import { NonSingletonService } from '../../../services/non-singleton/non-singleton.service';

@Component({
  selector: 'app-test-two',
  standalone: true,
  imports: [],
  templateUrl: './test-two.component.html',
  styleUrl: './test-two.component.scss',
  providers: [NonSingletonService]
})
export class TestTwoComponent {
  numList: number[] = [];
  constructor(private nonsingletonService: NonSingletonService) {
    this.numList = this.nonsingletonService.getList();
  }

  Add(number: any) {
    this.nonsingletonService.addList(number);
    this.numList = this.nonsingletonService.getList();
  }
}
