import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Work } from '../../models/work';

@Component({
  selector: 'app-add-work-dialog',
  templateUrl: './add-work-dialog.component.html',
  styleUrls: ['./add-work-dialog.component.scss']
})
export class AddWorkDialogComponent implements OnInit {

  public form: FormGroup;
  public work: Work;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddWorkDialogComponent>
  )
  //@Inject(MAT_DIALOG_DATA) data: any) {
  //this.originalRink = data.pageValue;
  //}
  {}

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
    const workToAdd: Work = this.form.value as Work;
    this._dialogRef.close(workToAdd);
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
