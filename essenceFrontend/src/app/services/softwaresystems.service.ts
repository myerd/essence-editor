import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Softwaresystems } from '../models/softwaresystems';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class SoftwaresystemsService {

  constructor(private _http: HttpClient) { }

  public getSoftwaresystems(id): Observable<Softwaresystems[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Softwaresystems[]>(`api/solution/${id}/softwaresystems`, options);
  }

  public addSoftwaresystems(softwaresystems, id): Observable<Softwaresystems> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Softwaresystems>(`api/solution/${id}/softwaresystems`, softwaresystems, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/softwaresystems/${id}/card`, options);
  }
}
