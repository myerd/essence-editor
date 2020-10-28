import { Inject, Injectable } from '@angular/core';
import { WorkService } from '../http/work.service';
import { Card } from '../../models/card';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkdataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _workId: string,
    private _workService: WorkService
  ) {
    this._workService.getCards(this._workId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
