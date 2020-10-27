import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endeavor } from '../../models/endeavor';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EndeavorService {

  constructor(private _http: HttpClient) { }

  public getEndeavor(id): Observable<Endeavor[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Endeavor[]>(`api/project/${id}/endeavor`, options);
  }

  public addEndeavor(endeavor: Endeavor, id): Observable<Endeavor> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Endeavor>(`api/project/${id}/endeavor`, endeavor, options);
  }
}
