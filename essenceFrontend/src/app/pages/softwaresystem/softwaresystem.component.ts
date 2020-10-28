import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { SoftwaresystemsService } from '../../services/http/softwaresystems.service';
import { Softwaresystems } from '../../models/softwaresystems';
import { SoftwaresystemsdataService } from '../../services/datasources/softwaresystemsdata.service';

@Component({
  selector: 'app-softwaresystem',
  templateUrl: './softwaresystem.component.html',
  styleUrls: ['./softwaresystem.component.scss']
})
export class SoftwaresystemComponent implements OnInit, OnChanges {

  @Input() sys: Softwaresystems;
  public dataSource: SoftwaresystemsdataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _softwaresystemsService: SoftwaresystemsService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new SoftwaresystemsdataService(
      this.sys.id,
      this._softwaresystemsService
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.softwaresys = this.sys.id;
        this._cardService.addCard(result).subscribe(
          resulti => {
            this.dataSource.addCard(resulti);
          }
        );
      }
    });
  }
}
