import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { OpportunityService } from '../../services/opportunity.service';
import { Opportunity } from '../../models/opportunity';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit, OnChanges {

  @Input() oppo: Opportunity;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _opportunityService: OpportunityService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges) {
    this._opportunityService.getCards(changes.oppo.currentValue.id).pipe(take(1)).subscribe(result => {
      console.log(result);
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.opportunity = this.oppo.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
