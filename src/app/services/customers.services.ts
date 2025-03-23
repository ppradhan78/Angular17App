import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable(
  {
    providedIn: 'root'
  })
export class CustomersService {

  constructor(private http: HttpClient) {

  }
  getList(): Observable<any[]> {
    return this.http.get<any[]>('https://data-northwind.indigo.design/Customers');
  }
}
