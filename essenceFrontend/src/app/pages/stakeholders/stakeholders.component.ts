import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { StakeholdersService } from '../../services/stakeholders.service';
import { Stakeholders } from '../../models/stakeholders';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrls: ['./stakeholders.component.scss']
})
export class StakeholdersComponent implements OnInit, OnChanges {

  @Input() stake: Stakeholders;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _stakeholderService: StakeholdersService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges) {
    this._stakeholderService.getCards(changes.stake.currentValue.id).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }
  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.stakeholders = this.stake.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
