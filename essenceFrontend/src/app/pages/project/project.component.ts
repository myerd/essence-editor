import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { SolutionService } from '../../services/solution.service';
import { Solution } from '../../models/solution';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddSolutionDialogComponent } from '../../dialogs/add-solution-dialog/add-solution-dialog.component';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private _project: Project;
  public solution: Solution;

  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectService,
    private _solutionService: SolutionService
  ) { }

  ngOnInit(): void {
    this._project = history.state;
    console.log(history.state);
     this._solutionService.getSolution(this._project.id).subscribe(
      result => {
        console.log(result);
        this.solution = result[0];
      }
    );
  }
  public add_solution(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddSolutionDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.project = this._project.id;
      this._solutionService.addSolution(result, this._project.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
