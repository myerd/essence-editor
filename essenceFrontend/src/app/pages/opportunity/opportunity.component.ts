import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { OpportunityService } from '../../services/opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  public cards: Card[] = [];
  private _opporId: string;
  private _kortit: boolean = true;
  private _sub;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _opportunityService: OpportunityService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this._sub = this._activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this._opporId = params.get('id');
    });
    this._opportunityService.getCards(this._opporId).subscribe(result => {
      console.log(result);
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.opportunity = this._opporId;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
