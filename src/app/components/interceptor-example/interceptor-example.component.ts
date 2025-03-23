import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoggingInterceptor, loggingInterceptor } from '../../Interceptor/logging-interceptor';

@Component({
  selector: 'app-interceptor-example',
  standalone: true,
  imports: [],
  templateUrl: './interceptor-example.component.html',
  styleUrl: './interceptor-example.component.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
  //providers: [
  //  provideHttpClient(withInterceptors([loggingInterceptor]))
  //],
})
export class InterceptorExampleComponent {

}
