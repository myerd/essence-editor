import { Inject, Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { take } from 'rxjs/operators';
import { OpportunityService } from '../http/opportunity.service';

@Injectable({
  providedIn: 'root'
})
export class OpportunitydataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _oppoId: string,
    private _oppoService: OpportunityService
  ) {
    this._oppoService.getCards(this._oppoId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
