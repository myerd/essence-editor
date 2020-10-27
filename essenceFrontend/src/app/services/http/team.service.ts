import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../models/team';
import { Card } from '../../models/card';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _http: HttpClient) { }

  public getTeam(id): Observable<Team[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Team[]>(`api/endeavor/${id}/team`, options);
  }

  public addTeam(team, id): Observable<Team> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Team>(`api/endeavor/${id}/team`, team, options);
  }

  public getCards(id): Observable<Card[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Card[]>(`api/team/${id}/card`, options);
  }
}
