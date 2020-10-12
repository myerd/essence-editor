import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

const baseUrl = 'http://localhost:8080/api/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _http: HttpClient) { }

  public addCard(card: Card): Observable<Card> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Card>(`api/card`, card, options);
  }
// Below code will change / delete later
  getAll(): Observable<any> {
    return this._http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this._http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this._http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this._http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this._http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this._http.delete(baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this._http.get(`${baseUrl}?title=${title}`);
  }
}
