import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { HttpInterceptorFn } from '@angular/common/http';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() { debugger; }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    console.log('Outgoing HTTP request', request);
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        console.log('Incoming HTTP response', event);
      }));
  }
}



export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  debugger
  console.log('Outgoing request:', req);

  return next(req).pipe(
    tap((event) => {
      console.log('Incoming response:', event);
    })
  );
};

