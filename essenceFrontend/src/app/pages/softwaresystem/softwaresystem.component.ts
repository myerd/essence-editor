import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { SoftwaresystemsService } from '../../services/softwaresystems.service';
import { take } from 'rxjs/operators';
import { Softwaresystems } from '../../models/softwaresystems';

@Component({
  selector: 'app-softwaresystem',
  templateUrl: './softwaresystem.component.html',
  styleUrls: ['./softwaresystem.component.scss']
})
export class SoftwaresystemComponent implements OnInit, OnChanges {

  @Input() sys: Softwaresystems;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _softwaresystemsService: SoftwaresystemsService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    this._softwaresystemsService.getCards(changes.sys.currentValue.id).pipe(take(1)).subscribe(result => {
      console.log(result);
      this.cards = result;
    });
  }
  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.softwaresys = this.sys.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
