import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[] = [];
  currentCard = null;
  currentIndex = -1;
  tittle = '';

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getAll().subscribe(
      data => this.cards = data,
      error => console.log(error)
    );
  }


}
