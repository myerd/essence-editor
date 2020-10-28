import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../../services/http/project.service';
import { SolutionService } from '../../services/http/solution.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddSolutionDialogComponent } from '../../dialogs/add-solution-dialog/add-solution-dialog.component';
import { EndeavorService } from '../../services/http/endeavor.service';
import { CustomerService } from '../../services/http/customer.service';
import { AddEndeavorDialogComponent } from '../../dialogs/add-endeavor-dialog/add-endeavor-dialog.component';
import { AddCustomerDialogComponent } from '../../dialogs/add-customer-dialog/add-customer-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectdataService } from '../../services/datasources/projectdata.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public projectId: string;
  public dataSource: ProjectdataService;

  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectService,
    private _solutionService: SolutionService,
    private _endeavorService: EndeavorService,
    private _customerService: CustomerService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.projectId = params['id'];
    });
    this.dataSource = new ProjectdataService(
      this.projectId,
      this._solutionService,
      this._endeavorService,
      this._customerService);
  }

  public add_solution(): void {
    const dialogRef = this._dialog.open(AddSolutionDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.project = this.projectId;
        this._solutionService.addSolution(result, this.projectId).subscribe(
          resulti => {
            console.log(resulti);
            this.dataSource.addSolution(resulti);
          }
        );
      }
    });
  }

  public add_endeavor(): void {
    const dialogRef = this._dialog.open(AddEndeavorDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.project = this.projectId;
        this._endeavorService.addEndeavor(result, this.projectId).subscribe(
          resulti => {
            console.log(resulti);
            this.dataSource.addEndeavor(resulti);
          }
        );
      }
    });
  }

  public add_customer(): void {
    const dialogRef = this._dialog.open(AddCustomerDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.project = this.projectId;
        this._customerService.addCustomer(result, this.projectId).subscribe(
          resulti => {
            console.log(resulti);
            this.dataSource.addCustomer(resulti);
          }
        );
      }
    });
  }
}
