import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RequirementsService } from '../../services/requirements.service';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { Requirements } from '../../models/requirements';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit, OnChanges {

  @Input() req: Requirements;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _requirementsService: RequirementsService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges) {
    this._requirementsService.getCards(changes.req.currentValue.id).pipe(take(1)).subscribe(result => {
      console.log(result);
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.requirements = this.req.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }

}
