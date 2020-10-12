import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RequirementsService } from '../../services/requirements.service';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { SoftwaresystemsService } from '../../services/softwaresystems.service';

@Component({
  selector: 'app-softwaresystem',
  templateUrl: './softwaresystem.component.html',
  styleUrls: ['./softwaresystem.component.scss']
})
export class SoftwaresystemComponent implements OnInit {
  public cards: Card[] = [];
  private _softwaresysId: string;
  private _kortit: boolean = true;
  private _sub;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _softwaresystemsService: SoftwaresystemsService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this._sub = this._activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this._softwaresysId = params.get('id');
    });
    this._softwaresystemsService.getCards(this._softwaresysId).subscribe(result => {
      console.log(result);
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.softwaresys = this._softwaresysId;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
