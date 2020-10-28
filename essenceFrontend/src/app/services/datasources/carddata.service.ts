import { Inject, Injectable } from '@angular/core';
import { CardService } from '../http/card.service';
import { Cardattribute } from '../../models/cardattribute';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarddataService {

  public cardData: Cardattribute[] = [];

  constructor(
    @Inject(String) private _cardId: string,
    private cardService: CardService
  ) {
    this.cardService.getCardData(this._cardId).pipe(take(1)).subscribe(result => {
      this.cardData = result;
    });
  }

  public addCardData(data: Cardattribute): void {
    this.cardData.push(data);
  }

  public editCardData(data: Cardattribute): void {
    for (const dt of this.cardData) {
      if (dt.id === data.id) {
        dt.completed = data.completed;
        break;
      }
    }
  }
}
