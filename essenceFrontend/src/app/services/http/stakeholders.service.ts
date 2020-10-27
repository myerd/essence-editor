import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../../models/card';
import { Stakeholders } from '../../models/stakeholders';

@Injectable({
  providedIn: 'root'
})
export class StakeholdersService {
// TODO: DELETE AND UPDATE on all services + components
  constructor(private _http: HttpClient) { }

  public getStakeholders(id): Observable<Stakeholders[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Stakeholders[]>(`api/customer/${id}/stakeholders`, options);
  }

  public addStakeholders(stakeholder, id): Observable<Stakeholders> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Stakeholders>(`api/customer/${id}/stakeholders`, stakeholder, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/stakeholders/${id}/card`, options);
  }
}
