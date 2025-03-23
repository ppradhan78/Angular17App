import { Component,   OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.services';
import { customerFilterImpure } from '../../../pipe/impure/customer-filter-impure';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from '../../../Interceptor/logging-interceptor';
import { HeadersInterceptor } from '../../../Interceptor/headers-interceptor';
@Component({
  selector: 'app-impure-pip-example',
  standalone: true,
  imports: [customerFilterImpure, FormsModule, CommonModule],
  templateUrl: './impure-pip-example.component.html',
  styleUrl: './impure-pip-example.component.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }
  ]
})
export class ImpurePipExampleComponent implements OnInit {

  customers: any[] = [] as any;
  searchText = '';
  loadCount = 0;
  count = 0;

  custs: Observable<any[]>;

  constructor(private customersService: CustomersService) {
    this.custs = this.customersService.getList();
  }

  ngOnInit(): void {
   
    this.customersService.getList().subscribe(
      (data) => {
        this.customers = data;
        this.loadCount = data.length;
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );

    
  }

  addItem() {
    this.customers.unshift({ contactName: this.searchText });
    this.count = this.customers.length;
  }
}
