import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOpportunityDialogComponent } from '../../dialogs/add-opportunity-dialog/add-opportunity-dialog.component';
import { OpportunityService } from '../../services/http/opportunity.service';
import { CustomerService } from '../../services/http/customer.service';
import { StakeholdersService } from '../../services/http/stakeholders.service';
import { Customer } from '../../models/customer';
import { AddStakeholdersDialogComponent } from '../../dialogs/add-stakeholders-dialog/add-stakeholders-dialog.component';
import { CustomerdataService } from '../../services/datasources/customerdata.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer;
  public cust = false;
  public dataSource: CustomerdataService;

  constructor(
    private _opportunityService: OpportunityService,
    private _customerService: CustomerService,
    private _stakeholderService: StakeholdersService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource = new CustomerdataService(
      this.customer.id,
      this._opportunityService,
      this._stakeholderService
    );
  }

  public addOpportunity(): void {
    const dialogRef = this._dialog.open(AddOpportunityDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.customer = this.customer.id;
        this._opportunityService.addOpportunity(result, this.customer.id).subscribe(
          resulti => {
            this.dataSource.addOpportunity(resulti);
          }
        );
      }
    });
  }

  public addStakeholders(): void {
    const dialogRef = this._dialog.open(AddStakeholdersDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.customer = this.customer.id;
        this._stakeholderService.addStakeholders(result, this.customer.id).subscribe(
          resulti => {
            this.dataSource.addStakeholders(resulti);
          }
        );
      }
    });
  }
}
