import { Component } from '@angular/core';
import { NonSingletonService } from '../../../services/non-singleton/non-singleton.service';

@Component({
  selector: 'app-test-one',
  standalone: true,
  imports: [],
  templateUrl: './test-one.component.html',
  styleUrl: './test-one.component.scss',
  providers: [NonSingletonService]

})
export class TestOneComponent {
  numList: number[] = [];
  constructor(private nonsingletonService: NonSingletonService) {
    this.numList = this.nonsingletonService.getList();
  }

  Add(number: any) {
    this.nonsingletonService.addList(number);
    this.numList = this.nonsingletonService.getList();
  }
}
