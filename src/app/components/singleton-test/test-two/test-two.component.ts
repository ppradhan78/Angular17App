import { Component } from '@angular/core';
import { SingletonService } from '../../../services/singleton/singleton.service';

@Component({
  selector: 'app-test-two',
  standalone: true,
  imports: [],
  templateUrl: './test-two.component.html',
  styleUrl: './test-two.component.scss'
})
export class TestTwoComponent {
  numList: number[] = [];
  constructor(private singletonService: SingletonService) {
    this.numList = this.singletonService.getList();
  }

  Add(number: any) {
    this.singletonService.addList(number);
    this.numList = this.singletonService.getList();
  }
}
