import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { WorkService } from '../../services/work.service';
import { Work } from '../../models/work';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnChanges {

  @Input() work: Work;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _workService: WorkService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this._workService.getCards(changes.work.currentValue.id).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.work = this.work.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
