import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public constructor(private _http: HttpClient) { }

  public addProject(project: Project) {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Project>(`api/project`, project, options);
  }

  public getProjects(): Observable<Project[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Project[]>(`api/project`, options);
  }
}
