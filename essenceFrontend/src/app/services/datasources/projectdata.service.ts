import { Inject, Injectable } from '@angular/core';
import { ProjectService } from '../http/project.service';
import { SolutionService } from '../http/solution.service';
import { EndeavorService } from '../http/endeavor.service';
import { CustomerService } from '../http/customer.service';
import { Project } from '../../models/project';
import { Solution } from '../../models/solution';
import { Customer } from '../../models/customer';
import { Endeavor } from '../../models/endeavor';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  public _solution: Solution;
  public _customer: Customer;
  public _endeavor: Endeavor;

  constructor(@Inject(String)
    private _projectId: string,
    private _solutionService: SolutionService,
    private _endeavorService: EndeavorService,
    private _customerService: CustomerService
  ) {
    this._solutionService.getSolution(this._projectId).pipe(take(1)).subscribe(
      result => {
        this._solution = result[0];
      });
    this._endeavorService.getEndeavor(this._projectId).pipe(take(1)).subscribe(
      result => {
        console.log(result);
        this._endeavor = result[0];
      }
    );
    this._customerService.getCustomer(this._projectId).pipe(take(1)).subscribe(
      result => {
        console.log(result);
        this._customer = result[0];
      }
    );
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
}
