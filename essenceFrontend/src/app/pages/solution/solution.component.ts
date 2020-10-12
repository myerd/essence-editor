import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';
import { ActivatedRoute } from '@angular/router';
import { RequirementsService } from '../../services/requirements.service';
import { Requirements } from '../../models/requirements';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddSolutionDialogComponent } from '../../dialogs/add-solution-dialog/add-solution-dialog.component';
import { AddRequirementsDialogComponent } from '../../dialogs/add-requirements-dialog/add-requirements-dialog.component';
import { Softwaresystems } from '../../models/softwaresystems';
import { SoftwaresystemsService } from '../../services/softwaresystems.service';
import { AddSoftwaresystemsDialogComponent } from '../../dialogs/add-softwaresystems-dialog/add-softwaresystems-dialog.component';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  public solution: Solution;
  public solutionId: string;
  public requir: Requirements;
  public softwarsys: Softwaresystems;
  public requirements = false;
  public softwaresystems = false;

  constructor(
    private _dialog: MatDialog,
    private _solutionService: SolutionService,
    private _requirementsService: RequirementsService,
    private _softwaresystemsService: SoftwaresystemsService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      console.log(params['id']);
      this.solutionId = params['id'];
    });
    console.log(history.state);
    this.solution = history.state;
  }

  public showRequirements() {
    this.requirements = true;
    this.softwaresystems = false;
    this._requirementsService.getRequirements(this.solution.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.requir = result[0];
        console.log(this.requir.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addRequirements(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddRequirementsDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.solution = this.solution.id;
      this._requirementsService.addRequirements(result, this.solution.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }

  public showSoftwaresystems() {
    this.requirements = false;
    this.softwaresystems = true;
    this._softwaresystemsService.getSoftwaresystems(this.solution.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.softwarsys = result[0];
        console.log(this.softwarsys.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addSoftwaresystems(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddSoftwaresystemsDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.solution = this.solution.id;
      this._softwaresystemsService.addSoftwaresystems(result, this.solution.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
