import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
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


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private _project: Project;
  public solution: Solution;
  public endeavor: Endeavor;
  public customer: Customer;

  constructor(
    private _dialog: MatDialog,
    private _projectService: ProjectService,
    private _solutionService: SolutionService,
    private _endeavorService: EndeavorService,
    private _customerService: CustomerService
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
    this._endeavorService.getEndeavor(this._project.id).subscribe(
      result => {
        console.log(result);
        this.endeavor = result[0];
      }
    );
    this._customerService.getCustomer(this._project.id).subscribe(
      result => {
        console.log(result);
        this.customer = result[0];
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

  public add_endeavor(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddEndeavorDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.project = this._project.id;
      this._endeavorService.addEndeavor(result, this._project.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }

  public add_customer(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCustomerDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.project = this._project.id;
      this._customerService.addCustomer(result, this._project.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
