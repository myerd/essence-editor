import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { StakeholdersService } from '../../services/http/stakeholders.service';
import { Stakeholders } from '../../models/stakeholders';
import { StakeholderdataService } from '../../services/datasources/stakeholderdata.service';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrls: ['./stakeholders.component.scss']
})
export class StakeholdersComponent implements OnInit, OnChanges {

  @Input() stake: Stakeholders;
  public dataSource: StakeholderdataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _stakeholderService: StakeholdersService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new StakeholderdataService(
      this.stake.id,
      this._stakeholderService
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.stakeholders = this.stake.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          this.dataSource.addCard(resulti);
        }
      );
    });
  }
}
