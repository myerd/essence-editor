import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor(private _dialog: MatDialog,
    private _projectService: ProjectService
  ) { }

  ngOnInit() {
  }
  public add_project(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddProjectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this._projectService.addProject(result);
    });
    /*.pipe(
      withLatestFrom(this._seasonManager.getSelectedSeason())
    )
    .subscribe(([result, season]) => {
      if (!result) {
      } else {
        if (!result[1]) {
          this._rinkService.updateRink([result[0]], season.id)
            .subscribe(rink => {
              this.dataSource.updateRink(rink);
              this._router.navigateByUrl('/rinks');
            });
        } else {
          this._rinkService.deleteRink([result[0]], season.id)
            .subscribe( rink => {
              this.dataSource.deleteRink(rink);
              this._router.navigateByUrl('/rinks');
            });
        }
      }
    });*/
  }
}