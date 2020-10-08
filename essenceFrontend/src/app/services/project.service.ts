import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public addProject(project: Project) {
    console.log(project);
  }
}
