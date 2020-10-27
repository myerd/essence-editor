import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { WayofworkService } from '../../services/http/wayofwork.service';
import { Wayofwork } from '../../models/wayofwork';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-wayofwork',
  templateUrl: './wayofwork.component.html',
  styleUrls: ['./wayofwork.component.scss']
})
export class WayofworkComponent implements OnInit, OnChanges {

  @Input() wow: Wayofwork;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _wayofworkService: WayofworkService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this._wayofworkService.getCards(changes.wow.currentValue.id).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.wayofwo = this.wow.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
