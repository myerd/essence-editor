import { Inject, Injectable } from '@angular/core';
import { RequirementsService } from '../http/requirements.service';
import { take } from 'rxjs/operators';
import { Card } from '../../models/card';

@Injectable({
  providedIn: 'root'
})
export class RequirementsdataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _reqId: string,
    private _requirementsService: RequirementsService
  ) {
    this._requirementsService.getCards(this._reqId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
