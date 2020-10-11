import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solution } from '../models/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  constructor(private _http: HttpClient) { }

  public getSolution(id): Observable<Solution[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Solution[]>(`api/project/${id}/solution`, options);
  }

  public addSolution(solution: Solution, id): Observable<Solution> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Solution>(`api/project/${id}/solution`, solution, options);
  }

}
