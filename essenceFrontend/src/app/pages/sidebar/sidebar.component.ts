import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { take } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProjectDialogComponent } from '../../dialogs/add-project-dialog/add-project-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public projects: Project[] = [];
  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this._projectService.getProjects().pipe(take(1)).subscribe(result => {
      this.projects = result;
    } );
  }

  public add_project(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this._projectService.addProject(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
