import { Inject, Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { OpportunityService } from '../http/opportunity.service';
import { StakeholdersService } from '../http/stakeholders.service';
import { Opportunity } from '../../models/opportunity';
import { Stakeholders } from '../../models/stakeholders';


@Injectable({
  providedIn: 'root'
})
export class CustomerdataService {

  public opportunity: Opportunity;
  public stakeholders: Stakeholders;

  constructor(
    @Inject(String) private _customerId: string,
    private _opportunityService: OpportunityService,
    private _stakeholderService: StakeholdersService,
    ) {
    this._stakeholderService.getStakeholders(this._customerId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.stakeholders = result[0];
      }
      else {
        console.log('UNDEFINED');
      }
    });
    this._opportunityService.getOpportunity(this._customerId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.opportunity = result[0];
        }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addOpportunity(oppo: Opportunity): void {
    this.opportunity = oppo;
  }

  public addStakeholders(stake: Stakeholders): void {
    this.stakeholders = stake;
  }
}
