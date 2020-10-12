import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EndeavorService } from '../../services/endeavor.service';
import { TeamService } from '../../services/team.service';
import { WorkService } from '../../services/work.service';
import { WayofworkService } from '../../services/wayofwork.service';
import { Wayofwork } from '../../models/wayofwork';
import { Team } from '../../models/team';
import { Work } from '../../models/work';
import { Endeavor } from '../../models/endeavor';
import { AddWorkDialogComponent } from '../../dialogs/add-work-dialog/add-work-dialog.component';
import { AddTeamDialogComponent } from '../../dialogs/add-team-dialog/add-team-dialog.component';
import { AddWayofworkDialogComponent } from '../../dialogs/add-wayofwork-dialog/add-wayofwork-dialog.component';

@Component({
  selector: 'app-endeavor',
  templateUrl: './endeavor.component.html',
  styleUrls: ['./endeavor.component.scss']
})
export class EndeavorComponent implements OnInit {

  public endeavor: Endeavor;
  public wow: Wayofwork;
  public tea: Team;
  public wor: Work;
  public team;
  public work;
  public wayofwork;

  constructor(
    private _dialog: MatDialog,
    private _endeavorService: EndeavorService,
    private _teamService: TeamService,
    private _workService: WorkService,
    private _wayofworkService: WayofworkService
  ) { }

  ngOnInit() {
    console.log(history.state);
    this.endeavor = history.state;
  }

  public showWork() {
    this.work = true;
    this.team = false;
    this.wayofwork = false;
    this._workService.getWork(this.endeavor.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.wor = result[0];
        console.log(this.wor.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addWork(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddWorkDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.endeavor = this.endeavor.id;
      this._workService.addWork(result, this.endeavor.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }

  public showTeam() {
    this.work = false;
    this.team = true;
    this.wayofwork = false;
    this._teamService.getTeam(this.endeavor.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.tea = result[0];
        console.log(this.wor.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addTeam(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddTeamDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.endeavor = this.endeavor.id;
      this._teamService.addTeam(result, this.endeavor.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }

  public showWoW() {
    this.work = false;
    this.team = false;
    this.wayofwork = true;
    this._wayofworkService.getWayofwork(this.endeavor.id).subscribe(result => {
      console.log(result[0])
      if (result) {
        this.wow = result[0];
        console.log(this.wor.id);
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addWoW(): void {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this._dialog.open(AddWayofworkDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      result.endeavor = this.endeavor.id;
      this._wayofworkService.addWayofwork(result, this.endeavor.id).subscribe(
        resulti => {
          console.log(resulti);
          // this._router.navigateByUrl('/project');
        }
      );
    });
  }
}
