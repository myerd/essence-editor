import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { TeamService } from '../../services/http/team.service';
import { Team } from '../../models/team';
import { TeamdataService } from '../../services/datasources/teamdata.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {

  @Input() team: Team;
  public dataSource: TeamdataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _teamService: TeamService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new TeamdataService(
      this.team.id,
      this._teamService
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.team = this.team.id;
        this._cardService.addCard(result).subscribe(
          resulti => {
            this.dataSource.addCard(resulti);
          }
        );
      }
    });
  }
}
