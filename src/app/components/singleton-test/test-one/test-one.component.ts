import { Component } from '@angular/core';
import { SingletonService } from '../../../services/singleton/singleton.service';

@Component({
  selector: 'app-test-one',
  standalone: true,
  imports: [],
  templateUrl: './test-one.component.html',
  styleUrl: './test-one.component.scss'
})
export class TestOneComponent {
  numList: number[] = [];
  constructor(private singletonService: SingletonService) {
    this.numList = this.singletonService.getList();
  }

  Add(number: any) {
    this.singletonService.addList(number);
    this.numList = this.singletonService.getList();
  }
}
