import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Wayofwork } from '../../models/wayofwork';

@Component({
  selector: 'app-add-wayofwork-dialog',
  templateUrl: './add-wayofwork-dialog.component.html',
  styleUrls: ['./add-wayofwork-dialog.component.scss']
})
export class AddWayofworkDialogComponent implements OnInit {

  public form: FormGroup;
  public wayofwork: Wayofwork;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddWayofworkDialogComponent>
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
    const wayofworkToAdd: Wayofwork = this.form.value as Wayofwork;
    this._dialogRef.close(wayofworkToAdd);
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
