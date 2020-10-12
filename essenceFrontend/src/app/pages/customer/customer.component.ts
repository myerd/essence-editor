import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddOpportunityDialogComponent } from '../../dialogs/add-opportunity-dialog/add-opportunity-dialog.component';
import { OpportunityService } from '../../services/opportunity.service';
import { CustomerService } from '../../services/customer.service';
import { StakeholdersService } from '../../services/stakeholders.service';
import { Stakeholders } from '../../models/stakeholders';
import { Opportunity } from '../../models/opportunity';
import { Customer } from '../../models/customer';
import { AddStakeholdersDialogComponent } from '../../dialogs/add-stakeholders-dialog/add-stakeholders-dialog.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public opportunity;
  public stakeholders;
  public stakehol: Stakeholders;
  public oppor: Opportunity;
  public customer: Customer;

  constructor(
    private _opportunityService: OpportunityService,
    private _customerService: CustomerService,
    private _stakeholderService: StakeholdersService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(history.state);
    this.customer = history.state;
  }

  public showOpportunity() {
    this.opportunity = true;
    this.stakeholders = false;
    this._opportunityService.getOpportunity(this.customer.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.oppor = result[0];
        console.log(this.oppor.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addOpportunity(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddOpportunityDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.customer = this.customer.id;
      this._opportunityService.addOpportunity(result, this.customer.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }

  public showStakeholders() {
    this.opportunity = false;
    this.stakeholders = true;
    this._stakeholderService.getStakeholders(this.customer.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.stakehol = result[0];
        console.log(this.stakehol.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addStakeholders(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddStakeholdersDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.customer = this.customer.id;
      this._stakeholderService.addStakeholders(result, this.customer.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
