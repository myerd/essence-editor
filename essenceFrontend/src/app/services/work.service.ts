import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from '../models/work';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private _http: HttpClient) { }

  public getWork(id): Observable<Work[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Work[]>(`api/endeavor/${id}/work`, options);
  }

  public addWork(work, id): Observable<Work> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Work>(`api/endeavor/${id}/work`, work, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/work/${id}/card`, options);
  }
}
