import { Inject, Injectable } from '@angular/core';
import { RequirementsService } from '../http/requirements.service';
import { SoftwaresystemsService } from '../http/softwaresystems.service';
import { take } from 'rxjs/operators';
import { Requirements } from '../../models/requirements';
import { Softwaresystems } from '../../models/softwaresystems';

@Injectable({
  providedIn: 'root'
})
export class SolutiondataService {

  public requirements: Requirements;
  public softwaresystems: Softwaresystems;

  constructor(
    @Inject(String) private _solutionId: string,
    private _requirementsService: RequirementsService,
    private _softwaresystemsService: SoftwaresystemsService,
  ) {
    this._requirementsService.getRequirements(this._solutionId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.requirements = result[0];
        }
      else {
        console.log('UNDEFINED');
      }
    });
    this._softwaresystemsService.getSoftwaresystems(this._solutionId).pipe(take(1)).subscribe(result => {
      if (result) {
        this.softwaresystems = result[0];
      }
      else {
        console.log('UNDEFINED');
      }
    });
  }

  public addRequirements(req: Requirements): void {
    this.requirements = req;
  }

  public addSoftwaresystems(sys: Softwaresystems): void {
    this.softwaresystems = sys;
  }
}
