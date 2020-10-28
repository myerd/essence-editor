import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { WorkService } from '../../services/http/work.service';
import { Work } from '../../models/work';
import { WorkdataService } from '../../services/datasources/workdata.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnChanges {

  @Input() work: Work;
  public dataSource: WorkdataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _workService: WorkService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new WorkdataService(
      this.work.id,
      this._workService
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.work = this.work.id;
        this._cardService.addCard(result).subscribe(
          resulti => {
            this.dataSource.addCard(resulti);
          }
        );
      }
    });
  }
}
