import { Inject, Injectable } from '@angular/core';
import { TeamService } from '../http/team.service';
import { WorkService } from '../http/work.service';
import { WayofworkService } from '../http/wayofwork.service';
import { take } from 'rxjs/operators';
import { Wayofwork } from '../../models/wayofwork';
import { Work } from '../../models/work';
import { Team } from '../../models/team';

@Injectable({
  providedIn: 'root'
})
export class EndeavordataService {

  public work: Work;
  public wayofwork: Wayofwork;
  public team: Team;

  constructor(
    @Inject(String) private _endeavorId: string,
    private _teamService: TeamService,
    private _workService: WorkService,
    private _wayofworkService: WayofworkService
  ) {
    this._workService.getWork(this._endeavorId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.work = result[0];
      } else {
        console.log('UNDEFINED');
      }
    });
    this._teamService.getTeam(this._endeavorId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.team = result[0];
      } else {
        console.log('UNDEFINED');
      }
    });
    this._wayofworkService.getWayofwork(this._endeavorId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.wayofwork = result[0];
      } else {
        console.log('UNDEFINED');
      }
    });
  }

  public addWork(work: Work): void {
    this.work = work;
  }

  public addWow(wow: Wayofwork): void {
    this.wayofwork = wow;
  }

  public addTeam(team: Team): void {
    this.team = team;
  }
}
