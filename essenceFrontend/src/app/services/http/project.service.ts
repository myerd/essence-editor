import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public constructor(private _http: HttpClient) { }

  public addProject(project: Project, userid: string) {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post<Project>(`api/project/${userid}`, project, options);
  }

  public getProjects(userId: string): Observable<Project[]> {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.get<Project[]>(`api/project/${userId}`, options);
  }
}
