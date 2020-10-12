import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requirements } from '../models/requirements';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  constructor(private _http: HttpClient) { }

  public getRequirements(id): Observable<Requirements[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Requirements[]>(`api/solution/${id}/requirements`, options);
  }

  public addRequirements(requirements, id): Observable<Requirements> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Requirements>(`api/solution/${id}/requirements`, requirements, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/requirements/${id}/card`, options);
  }
}
