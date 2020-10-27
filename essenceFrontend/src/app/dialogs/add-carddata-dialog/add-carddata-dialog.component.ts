import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Cardattribute } from '../../models/cardattribute';
import { AddCardDialogComponent } from '../add-card-dialog/add-card-dialog.component';

@Component({
  selector: 'app-add-carddata-dialog',
  templateUrl: './add-carddata-dialog.component.html',
  styleUrls: ['./add-carddata-dialog.component.scss']
})
export class AddCarddataDialogComponent implements OnInit {
  public form: FormGroup;
  public card: Cardattribute;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddCardDialogComponent>
  )  {}

  public ngOnInit(): void {
    this.form = this._fb.group({
      completed: this._fb.control(false, [
      ]),
      task: this._fb.control('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(1)
      ])
    });
  }

  public save(): void {
    const cardtoAdd: Cardattribute = this.form?.value as Cardattribute;
    const forDeleting: boolean = false;
    this._dialogRef.close(cardtoAdd);
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
