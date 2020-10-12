import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Card } from '../../models/card';

@Component({
  selector: 'app-add-card-dialog',
  templateUrl: './add-card-dialog.component.html',
  styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent implements OnInit {
  public form: FormGroup;
  public card: Card;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddCardDialogComponent>
  )
  //@Inject(MAT_DIALOG_DATA) data: any) {
  //this.originalRink = data.pageValue;
  //}
  {}

  public ngOnInit(): void {
    this.form = this._fb.group({
      title: this._fb.control('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(1)
      ]),
      description: this._fb.control('', [
        Validators.required,
        this.noWhitespaceValidator,
        Validators.minLength(1)
      ])
    });
    //this.form.controls['title'].setValue(this.originalRink.name);
    //this.form.controls['city'].setValue(this.originalRink.city);
  }

  public save(): void {
    const cardtoAdd: Card = this.form.value as Card;
    //editedRink.id = this.originalRink.id;
    const forDeleting: boolean = false;
    this._dialogRef.close(cardtoAdd);
  }

  /*public delete(): void {
    const forDeleting: boolean = true;
    this._dialogRef.close([this.originalRink, forDeleting]);
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
