import { Component } from '@angular/core';
import { UppercaseFirstPipe } from '../../pipe/uppercase-first';
import { TruncateTextPipe } from '../../pipe/truncate-text';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [UppercaseFirstPipe, TruncateTextPipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss'
})
export class PipeExampleComponent {

}
