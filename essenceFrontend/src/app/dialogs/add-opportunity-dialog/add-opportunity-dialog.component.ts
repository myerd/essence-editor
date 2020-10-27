import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Opportunity } from '../../models/opportunity';

@Component({
  selector: 'app-add-opportunity-dialog',
  templateUrl: './add-opportunity-dialog.component.html',
  styleUrls: ['./add-opportunity-dialog.component.scss']
})
export class AddOpportunityDialogComponent implements OnInit {
  public form: FormGroup;
  public opportunity: Opportunity;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddOpportunityDialogComponent>
  )  {}

  public ngOnInit(): void {
    this.form = this._fb.group({
      description: this._fb.control('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(1)
      ])
    });
  }

  public save(): void {
    const opportunityToAdd: Opportunity = this.form.value as Opportunity;
    this._dialogRef.close(opportunityToAdd);
  }

  /*public delete(): void {
    const forDeleting: boolean = true;
    this._dialogRef.close();
  }*/

  public close(): void {
    this._dialogRef.close();
  }

  public noWhitespaceValidator(control: FormControl): object {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }


}
