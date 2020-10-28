import { Inject, Injectable } from '@angular/core';
import { SoftwaresystemsService } from '../http/softwaresystems.service';
import { Card } from '../../models/card';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SoftwaresystemsdataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _sysId: string,
    private _softwaresysService: SoftwaresystemsService,
  ) {
    this._softwaresysService.getCards(this._sysId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
