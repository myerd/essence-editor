import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { SolutionService } from '../../services/solution.service';
import { Solution } from '../../models/solution';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddSolutionDialogComponent } from '../../dialogs/add-solution-dialog/add-solution-dialog.component';
import { EndeavorService } from '../../services/endeavor.service';
import { CustomerService } from '../../services/customer.service';
import { Endeavor } from '../../models/endeavor';
import { Customer } from '../../models/customer';
import { AddEndeavorDialogComponent } from '../../dialogs/add-endeavor-dialog/add-endeavor-dialog.component';
import { AddCustomerDialogComponent } from '../../dialogs/add-customer-dialog/add-customer-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public projectId: string;
  public solution: Solution;
  public endeavor: Endeavor;
  public customer: Customer;

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
      this._solutionService.getSolution(this.projectId).pipe(take(1)).subscribe(
        result => {
          console.log(result);
          this.solution = result[0];
        }
      );
      this._endeavorService.getEndeavor(this.projectId).pipe(take(1)).subscribe(
        result => {
          console.log(result);
          this.endeavor = result[0];
        }
      );
      this._customerService.getCustomer(this.projectId).pipe(take(1)).subscribe(
        result => {
          console.log(result);
          this.customer = result[0];
        }
      );
    });
  }

  public add_solution(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddSolutionDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.project = this.projectId;
      this._solutionService.addSolution(result, this.projectId).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }

  public add_endeavor(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddEndeavorDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.project = this.projectId;
      this._endeavorService.addEndeavor(result, this.projectId).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }

  public add_customer(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCustomerDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.project = this.projectId;
      this._customerService.addCustomer(result, this.projectId).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
