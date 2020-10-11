import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/solution';
import { SolutionService } from '../../services/solution.service';
import { ActivatedRoute } from '@angular/router';
import { RequirementsService } from '../../services/requirements.service';
import { Requirements } from '../../models/requirements';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  public solution: Solution;
  public solutionId: string;
  public requir: Requirements;
  public requirements: boolean = false;
  public softwaresystems: boolean = false;

  constructor(
    private _solutionService: SolutionService,
    private _requirementsService: RequirementsService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      console.log(params['id']);
      this.solutionId = params['id'];
    });
    console.log(history.state);
    this.solution = history.state;
  }

  public showRequirements() {
    this.requirements = true;
    this.softwaresystems = false;
    console.log(history.state);
    this._requirementsService.getRequirements(this.solution.id).subscribe(result => {
      this.requir = result[0];
    });
  }

  public showSoftwaresystems() {
    this.requirements = false;
    this.softwaresystems = true;
  }
}
