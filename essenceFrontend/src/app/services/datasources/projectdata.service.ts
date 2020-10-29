import { Inject, Injectable } from '@angular/core';
import { SolutionService } from '../http/solution.service';
import { EndeavorService } from '../http/endeavor.service';
import { CustomerService } from '../http/customer.service';
import { Solution } from '../../models/solution';
import { Customer } from '../../models/customer';
import { Endeavor } from '../../models/endeavor';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  public _solution: Solution;
  public _customer: Customer;
  public _endeavor: Endeavor;

  constructor(
    @Inject(String) private _projectId: string,
    private _solutionService: SolutionService,
    private _endeavorService: EndeavorService,
    private _customerService: CustomerService,
    private _router: Router
  ) {
    this.updateData(this._projectId);
  }

  public addCustomer(customer: Customer): void {
    this._customer = customer;
  }

  public addSolution(solution: Solution): void {
    this._solution = solution;
  }

  public addEndeavor(endeavor: Endeavor): void {
    this._endeavor = endeavor;
  }

  public updateData(projId: string): void {
    this._solutionService.getSolution(projId).pipe(take(1)).subscribe(
      result => {
        this._solution = result[0];
      },
      error => {
        this._router.navigate(['']);
      });
    this._endeavorService.getEndeavor(projId).pipe(take(1)).subscribe(
      result => {
        this._endeavor = result[0];
      },
      error => {
        this._router.navigate(['']);
      }
    );
    this._customerService.getCustomer(projId).pipe(take(1)).subscribe(
      result => {
        this._customer = result[0];
      },
      error => {
        this._router.navigate(['']);
      }
    );
  }
}
