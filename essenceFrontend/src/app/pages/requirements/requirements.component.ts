import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../../services/requirements.service';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';


@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  public gridoptions: GridsterConfig;
  public dashboard: Array<GridsterItem>;
  public cards: Card[] = [];
  private _reqId: string;
  private _kortit: boolean = true;
  private _sub;

  public itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  public itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

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

    this.gridoptions = {
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
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

  public changedOptions() {
    this.gridoptions.api.optionsChanged();
  }

  public removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  public addItem() {
    this.dashboard.push();
  }
}
