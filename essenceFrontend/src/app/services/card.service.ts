import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { Cardattribute } from '../models/cardattribute';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _http: HttpClient) { }

  public addCard(card: Card): Observable<Card> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Card>(`api/card`, card, options);
  }

  public getCardData(card: string): Observable<Cardattribute[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Cardattribute[]>(`api/card/${card}/data`,  options);
  }

  public addCardData(card: Card, id: string): Observable<Cardattribute> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Cardattribute>(`api/card/${id}/data`, card, options);
  }

  public updateCardData(data: Cardattribute, id: string): Observable<Cardattribute> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.put<Cardattribute>(`api/card/data/${id}`, data,  options);
  }

  public deleteCard(id) {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.delete(`api/card/${id}`,  options);

  }

}
