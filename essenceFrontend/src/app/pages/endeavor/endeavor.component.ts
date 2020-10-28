import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EndeavorService } from '../../services/http/endeavor.service';
import { TeamService } from '../../services/http/team.service';
import { WorkService } from '../../services/http/work.service';
import { WayofworkService } from '../../services/http/wayofwork.service';
import { Endeavor } from '../../models/endeavor';
import { AddWorkDialogComponent } from '../../dialogs/add-work-dialog/add-work-dialog.component';
import { AddTeamDialogComponent } from '../../dialogs/add-team-dialog/add-team-dialog.component';
import { AddWayofworkDialogComponent } from '../../dialogs/add-wayofwork-dialog/add-wayofwork-dialog.component';
import { EndeavordataService } from '../../services/datasources/endeavordata.service';

@Component({
  selector: 'app-endeavor',
  templateUrl: './endeavor.component.html',
  styleUrls: ['./endeavor.component.scss']
})
export class EndeavorComponent implements OnInit, OnChanges {

  @Input() endeavor: Endeavor;;
  public team;
  public work;
  public wayofwork;
  public hide;
  public dataSource: EndeavordataService;

  constructor(
    private _dialog: MatDialog,
    private _endeavorService: EndeavorService,
    private _teamService: TeamService,
    private _workService: WorkService,
    private _wayofworkService: WayofworkService
  ) { }

  ngOnInit() {
    this.dataSource = new EndeavordataService(
      this.endeavor.id,
      this._teamService,
      this._workService,
      this._wayofworkService
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  public showWork() {
    this.hide = true;
    this.work = true;
    this.team = false;
    this.wayofwork = false;
  }

  public addWork(): void {
    const dialogRef = this._dialog.open(AddWorkDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endeavor = this.endeavor.id;
        this._workService.addWork(result, this.endeavor.id).subscribe(
          resulti => {
            this.dataSource.addWork(resulti);
          }
        );
      }
    });
  }

  public showTeam() {
    this.hide = true;
    this.work = false;
    this.team = true;
    this.wayofwork = false;
  }

  public addTeam(): void {
    const dialogRef = this._dialog.open(AddTeamDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.endeavor = this.endeavor.id;
        this._teamService.addTeam(result, this.endeavor.id).subscribe(
          resulti => {
            this.dataSource.addTeam(resulti);
            }
        );
      }
    });
  }

  public showWoW() {
    this.hide = true;
    this.work = false;
    this.team = false;
    this.wayofwork = true;
  }

  public addWoW(): void {
    const dialogRef = this._dialog.open(AddWayofworkDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.endeavor = this.endeavor.id;
      this._wayofworkService.addWayofwork(result, this.endeavor.id).subscribe(
        resulti => {
          this.dataSource.addWow(resulti);
        }
      );
    });
  }

  public hideCards() {
    this.hide = false;
    this.work = false;
    this.team = false;
    this.wayofwork = false;
  }
}
