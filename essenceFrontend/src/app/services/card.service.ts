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

  // TODO: Need to think properway of handling all different types for cards. Maybe move this to their own services (?)
  public getCards(id): Observable<Card[]> {
    console.log('tultiin mestoille');
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/requirements/${id}/card`, options);
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
