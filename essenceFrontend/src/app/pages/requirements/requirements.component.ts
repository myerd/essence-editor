import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RequirementsService } from '../../services/http/requirements.service';
import { CardService } from '../../services/http/card.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { AddCardDialogComponent } from '../../dialogs/add-card-dialog/add-card-dialog.component';
import { Requirements } from '../../models/requirements';
import { RequirementsdataService } from '../../services/datasources/requirementsdata.service';



@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit, OnChanges {

  @Input() req: Requirements;
  public dataSource: RequirementsdataService;

  constructor(
    private _dialog: MatDialog,
    private _activatedRoute: ActivatedRoute,
    private _requirementsService: RequirementsService,
    private _cardService: CardService
  ) { }

  ngOnInit(): void {
    this.dataSource = new RequirementsdataService(
      this.req.id,
      this._requirementsService
    );
  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  public add_card(): void {
    const dialogRef = this._dialog.open(AddCardDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.requirements = this.req.id;
        this._cardService.addCard(result).subscribe(
          resulti => {
            this.dataSource.addCard(resulti);
          }
        );
      }});
  }

}
