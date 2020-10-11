import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/solution';
import { RequirementsService } from '../../services/requirements.service';
import { Requirements } from '../../models/requirements';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  public cards: Card[] = [];
  private _reqId: string;
  private _kortit: boolean = true;
  private _sub;

  constructor(private _activatedRoute: ActivatedRoute,
    private requirementsService: RequirementsService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this._sub = this._activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      this._reqId = params.get('id');
    });
      this.cardService.getCards(this._reqId).subscribe(result => {
        console.log(result);
        this.cards = result;
      });
  }

  public add_card(): void {
    console.log('Card added');
  }
}
