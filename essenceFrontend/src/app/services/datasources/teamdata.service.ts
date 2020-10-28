import { Inject, Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { take } from 'rxjs/operators';
import { TeamService } from '../http/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeamdataService {

  public cards: Card[] = [];

  constructor(
    @Inject(String) private _teamId: string,
    private _teamService: TeamService
  ) {
    this._teamService.getCards(this._teamId).pipe(take(1)).subscribe(result => {
      this.cards = result;
    });
  }

  public addCard(card: Card) {
    this.cards.push(card);
  }
}
