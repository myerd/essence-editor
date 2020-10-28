import { Inject, Injectable } from '@angular/core';
import { WayofworkService } from '../http/wayofwork.service';
import { Card } from '../../models/card';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WayofworkdataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _wowId: string,
    private _wowService: WayofworkService
  ) {
    this._wowService.getCards(this._wowId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
