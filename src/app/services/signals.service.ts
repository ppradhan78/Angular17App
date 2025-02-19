import { Injectable, signal } from '@angular/core';
import { Categories } from '../model/categories';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  //{
  //providedIn: 'root'
  //}
)
export class SignalsService {
  private CategoriesSignal = signal<Categories[]>([]);
  constructor(private http: HttpClient) { }
  getCategories(){
    this.http.get<Categories[]>('https://data-northwind.indigo.design/Categories').subscribe(
      data => this.CategoriesSignal.set(data)
    );
    console.log(this.CategoriesSignal())

  }

  getList(): Observable<any[]> {
    return this.http.get<any[]>('https://data-northwind.indigo.design/Categories');
  }
  categorie() {
    return this.CategoriesSignal;
  }
}
