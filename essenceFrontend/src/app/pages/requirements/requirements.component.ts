import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../../services/requirements.service';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  public cards: Card[] = [];
  private _reqId: string;
  private _kortit: boolean = true;
  private _sub;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _requirementsService: RequirementsService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this._sub = this._activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this._reqId = params.get('id');
    });
    this._requirementsService.getCards(this._reqId).subscribe(result => {
        console.log(result);
        this.cards = result;
      });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.requirements = this._reqId;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
