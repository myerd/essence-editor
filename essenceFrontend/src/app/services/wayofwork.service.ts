import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requirements } from '../models/requirements';
import { Wayofwork } from '../models/wayofwork';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class WayofworkService {

  constructor(private _http: HttpClient) { }

  public getWayofwork(id): Observable<Wayofwork[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Wayofwork[]>(`api/endeavor/${id}/wayofwork`, options);
  }

  public addWayofwork(wayofwork, id): Observable<Wayofwork> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Wayofwork>(`api/endeavor/${id}/wayofwork`, wayofwork, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/wayofwork/${id}/card`, options);
  }
}
