import { Component, Inject, Injector, OnInit, effect, signal } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SignalsService } from '../../services/signals.service';
import { Categories } from '../../model/categories';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss',
  providers: [SignalsService, JsonPipe]
})
export class SignalDemoComponent {
  cat = [{}] as any;
  i = 0;
  counter = signal(this.i);
  username = signal('prasanta');
  array = signal([
    'prasanta', 'ppradhan'
  ])
  objectex = signal({ name: "prasanta", tech: "angular" })

  categorie = this.signalsService.categorie

  C_CategoriesSignal = signal<Categories[]>([]);
  constructor(private injector: Injector, private signalsService: SignalsService) {
    //effect(() => {
    //  console.log(this.counter());
    //  console.log(this.objectex().name)
    //})
    this.signalsService.getCategories();
    effect(() => {
      this.cat = this.categorie();
      console.log(this.cat)
    })
    this.signalsService.getList().subscribe(
      data => this.C_CategoriesSignal.set(data)
    );
  }


  signalEffect(): void {
    effect(() => {
      console.log(this.counter());
      console.log(this.objectex().name)
    }, { injector: this.injector })
  }



  updateCounter() {
    this.i++;
    this.counter.set(this.i);
    this.signalEffect();
  }
}
