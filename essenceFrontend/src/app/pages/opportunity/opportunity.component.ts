import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { OpportunityService } from '../../services/http/opportunity.service';
import { Opportunity } from '../../models/opportunity';
import { OpportunitydataService } from '../../services/datasources/opportunitydata.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit, OnChanges {

  @Input() oppo: Opportunity;
  public dataSource: OpportunitydataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _opportunityService: OpportunityService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new OpportunitydataService(
      this.oppo.id,
      this._opportunityService
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.opportunity = this.oppo.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          this.dataSource.addCard(resulti);
        }
      );
    });
  }
}
