import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/http/card.service';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { TeamService } from '../../services/http/team.service';
import { Team } from '../../models/team';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {

  @Input() team: Team;
  public cards: Card[] = [];

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _teamService: TeamService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this._teamService.getCards(changes.team.currentValue.id).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public add_card(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.team = this.team.id;
      this._cardService.addCard(result).subscribe(
        resulti => {
          console.log(resulti);
        }
      );
    });
  }
}
