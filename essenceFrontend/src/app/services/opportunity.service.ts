import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { Opportunity } from '../models/opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private _http: HttpClient) { }

  public getOpportunity(id): Observable<Opportunity[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Opportunity[]>(`api/customer/${id}/opportunity`, options);
  }

  public addOpportunity(opportunity, id): Observable<Opportunity> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Opportunity>(`api/customer/${id}/opportunity`, opportunity, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/opportunity/${id}/card`, options);
  }
}
