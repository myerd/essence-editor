import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/http/project.service';
import { Project } from '../../models/project';
import { take } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProjectDialogComponent } from '../../dialogs/add-project-dialog/add-project-dialog.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public _userName;
  private _loading;
  public _authenticated;
  public projects: Project[] = [];
  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._loading = true;
    this._authenticated = this._authService.getExpiration();
    this._loading = false;
    if (this._authenticated) {
      this._projectService.getProjects(this._authService.getActiveUserId()).pipe(take(1)).subscribe(result => {
        this.projects = result;
      } );
      this._userName = this._authService.getActiveUser();
    }
  }

  public logout(): void {
    this._authService.logout();
  }
  public add_project(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      const projectdata = { ...result, user: this._authService.getActiveUserId()};
      console.log(projectdata);
      this._projectService.addProject(projectdata, this._authService.getActiveUserId()).subscribe(
        resulti => {
          this._router.navigate(['/project/', resulti.id]);
        }
      );
    });
  }
}
