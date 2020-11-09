import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/http/solution.service';
import { ActivatedRoute } from '@angular/router';
import { RequirementsService } from '../../services/http/requirements.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRequirementsDialogComponent } from '../../dialogs/add-requirements-dialog/add-requirements-dialog.component';
import { SoftwaresystemsService } from '../../services/http/softwaresystems.service';
import { AddSoftwaresystemsDialogComponent } from '../../dialogs/add-softwaresystems-dialog/add-softwaresystems-dialog.component';
import { SolutiondataService } from '../../services/datasources/solutiondata.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit, OnChanges {

  public solu = false;
  @Input() solution: Solution;
  public dataSource: SolutiondataService;

  constructor(
    private _dialog: MatDialog,
    private _solutionService: SolutionService,
    private _requirementsService: RequirementsService,
    private _softwaresystemsService: SoftwaresystemsService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataSource = new SolutiondataService(
      this.solution.id,
      this._requirementsService,
      this._softwaresystemsService
      );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public addRequirements(): void {
    const dialogRef = this._dialog.open(AddRequirementsDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.solution = this.solution.id;
        this._requirementsService.addRequirements(result, this.solution.id).subscribe(
          resulti => {
            this.dataSource.addRequirements(resulti);
          }
        );
      }
    });
  }

  public addSoftwaresystems(): void {
    const dialogRef = this._dialog.open(AddSoftwaresystemsDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.solution = this.solution.id;
        this._softwaresystemsService.addSoftwaresystems(result, this.solution.id).subscribe(
          resulti => {
            this.dataSource.addSoftwaresystems(resulti);
          }
        );
      }
    });
  }

}
