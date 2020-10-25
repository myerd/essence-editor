import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddOpportunityDialogComponent } from '../../dialogs/add-opportunity-dialog/add-opportunity-dialog.component';
import { OpportunityService } from '../../services/opportunity.service';
import { CustomerService } from '../../services/customer.service';
import { StakeholdersService } from '../../services/stakeholders.service';
import { Stakeholders } from '../../models/stakeholders';
import { Opportunity } from '../../models/opportunity';
import { Customer } from '../../models/customer';
import { AddStakeholdersDialogComponent } from '../../dialogs/add-stakeholders-dialog/add-stakeholders-dialog.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer;
  public opportunity;
  public stakeholders;
  public stakehol: Stakeholders;
  public oppor: Opportunity;


  constructor(
    private _opportunityService: OpportunityService,
    private _customerService: CustomerService,
    private _stakeholderService: StakeholdersService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public showOpportunity() {
    this.opportunity = true;
    this.stakeholders = false;
    this._opportunityService.getOpportunity(this.customer.id).pipe(take(1)).subscribe(result => {
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
        }
      );
    });
  }

  public showStakeholders() {
    this.opportunity = false;
    this.stakeholders = true;
    this._stakeholderService.getStakeholders(this.customer.id).pipe(take(1)).subscribe(result => {
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
        }
      );
    });
  }

  public hideCards() {
    this.opportunity = false;
    this.stakeholders = false;
  }
}
