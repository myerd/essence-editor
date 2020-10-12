import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http: HttpClient) { }

  public getCustomer(id): Observable<Customer[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Customer[]>(`api/project/${id}/customer`, options);
  }

  public addCustomer(customer: Customer, id): Observable<Customer> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Customer>(`api/project/${id}/customer`, customer, options);
  }
}
