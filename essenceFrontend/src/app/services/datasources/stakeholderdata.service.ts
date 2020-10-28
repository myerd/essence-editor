import { Inject, Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { take } from 'rxjs/operators';
import { StakeholdersService } from '../http/stakeholders.service';

@Injectable({
  providedIn: 'root'
})
export class StakeholderdataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _stakeId: string,
    private _stakeService: StakeholdersService
  ) {
    this._stakeService.getCards(this._stakeId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
