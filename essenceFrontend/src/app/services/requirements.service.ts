import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requirements } from '../models/requirements';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  constructor(private _http: HttpClient) { }

  public getRequirements(id): Observable<Requirements[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Requirements[]>(`api/solution/${id}/requirements`, options);
  }
}
