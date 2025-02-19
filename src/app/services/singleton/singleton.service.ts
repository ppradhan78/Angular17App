import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  instanceId: number;
  numList: number[] = [1];

  constructor() {
    this.instanceId = Math.random(); // Generate a unique ID
    console.log('SingletonService instance created:', this.instanceId);
  }

  addList(num: number) {
    this.numList.push(num);
  }
  getList() {
    return this.numList;
  }
}
