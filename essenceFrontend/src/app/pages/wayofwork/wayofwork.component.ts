import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StakeholdersService } from '../../services/stakeholders.service';
import { CardService } from '../../services/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { WayofworkService } from '../../services/wayofwork.service';

@Component({
  selector: 'app-wayofwork',
  templateUrl: './wayofwork.component.html',
  styleUrls: ['./wayofwork.component.scss']
})
export class WayofworkComponent implements OnInit {

  public cards: Card[] = [];
  private _wowId: string;
  private _kortit: boolean = true;
  private _sub;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _wayofworkService: WayofworkService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this._sub = this._activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this._wowId = params.get('id');
    });
    this._wayofworkService.getCards(this._wowId).subscribe(result => {
      console.log(result);
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.wayofwo = this._wowId;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
