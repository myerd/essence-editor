import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/http/project.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogComponent } from '../../dialogs/add-project-dialog/add-project-dialog.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListdataService } from '../../services/datasources/listdata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public dataSource: ListdataService;
  public isloggedIn$: Observable<boolean> = this._authService.isLoggedObserv();
  constructor(
    private _authService: AuthService,
    private _dialog: MatDialog,
    private _projectService: ProjectService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._authService.isAuthenticated.subscribe(res => {
      if (res) {
        this.dataSource = new ListdataService(
          this._authService.getActiveUser(),
          this._authService,
          this._projectService
        );
      }
    });
  }

  public logout(): void {
    this._authService.logout();
    this._router.navigate(['']);
  }

  public add_project(): void {
    const dialogRef = this._dialog.open(AddProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const projectdata = {...result, user: this._authService.getActiveUserId()};
        this._projectService.addProject(projectdata, this._authService.getActiveUserId()).subscribe(
          resulti => {
            this._router.navigate(['/project/', resulti.id]);
            this.dataSource.addProject(resulti);
          }
        );
      }
    });
  }
}
