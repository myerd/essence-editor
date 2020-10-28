import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { WayofworkService } from '../../services/http/wayofwork.service';
import { Wayofwork } from '../../models/wayofwork';
import { WayofworkdataService } from '../../services/datasources/wayofworkdata.service';

@Component({
  selector: 'app-wayofwork',
  templateUrl: './wayofwork.component.html',
  styleUrls: ['./wayofwork.component.scss']
})
export class WayofworkComponent implements OnInit, OnChanges {

  @Input() wow: Wayofwork;
  public dataSource: WayofworkdataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _wayofworkService: WayofworkService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new WayofworkdataService(
      this.wow.id,
      this._wayofworkService
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.wayofwo = this.wow.id;
        this._cardService.addCard(result).subscribe(
          resulti => {
            this.dataSource.addCard(resulti);
          }
        );
      }
    });
  }
}
