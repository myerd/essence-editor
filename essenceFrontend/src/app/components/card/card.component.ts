import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardService } from '../../services/http/card.service';
import { Card } from '../../models/card';
import { Cardattribute } from '../../models/cardattribute';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCarddataDialogComponent } from '../../dialogs/add-carddata-dialog/add-carddata-dialog.component';
import { CarddataService } from '../../services/datasources/carddata.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() card: Card;
  @Input() color: string;
  public isEditing = false;
  public editeddata: Cardattribute[] = [];
  public dataSource: CarddataService;

  constructor(
    private cardService: CardService,
    private _dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.dataSource = new CarddataService(
      this.card.id,
      this.cardService
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }


  public add_card_task(id): void {
    const dialogRef = this._dialog.open(AddCarddataDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.card = id;
        this.cardService.addCardData(result, id).subscribe(
          resulti => {
            this.dataSource.addCardData(resulti);
          }
        );
      }
    });
  }

  public save_card_task(): void {
    for (const editData of this.editeddata) {
      this.cardService.updateCardData(editData, editData.id).subscribe(result => {
          this.dataSource.editCardData(result);
        }
      );
    }
    this.isEditing = false;
  }

  public deleteCard(id): void {
    this.cardService.deleteCard(id).subscribe(result => {
      console.log(result);
    });
  }
  public edit() {
    this.isEditing = true;
  }

  setCheckbox(event: any, value: Cardattribute) {
    if (event.target.checked) {
      value.completed = true;
      this.editeddata.push(value);
    }
    else {
      this.editeddata = this.editeddata.filter(val => val !== value);
    }
  }
}
