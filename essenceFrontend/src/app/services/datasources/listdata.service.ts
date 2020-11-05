import { Inject, Injectable } from '@angular/core';
import { ProjectService } from '../http/project.service';
import { Project } from '../../models/project';
import { AuthService } from '../auth.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListdataService {

  public projects: Project[] = [];
  public authenticated;
  public userName;

  constructor(
    @Inject(String) private _userId: string,
    private _authService: AuthService,
    private _projectService: ProjectService
  ) {
    this.authenticated = this._authService.isAuthenticated.subscribe(res => {
      if (res) {
        this._projectService.getProjects(this._authService.getActiveUserId()).pipe(take(1)).subscribe(result => {
          this.projects = result;
        } );
        this.userName = this._authService.getActiveUser();
      }
    });
  }

  public addProject(proj: Project): void {
    this.projects.push(proj);
  }

}
