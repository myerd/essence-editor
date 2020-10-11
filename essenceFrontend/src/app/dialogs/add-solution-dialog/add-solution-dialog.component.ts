import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Solution } from '../../models/solution';

@Component({
  selector: 'app-add-solution-dialog',
  templateUrl: './add-solution-dialog.component.html',
  styleUrls: ['./add-solution-dialog.component.scss']
})
export class AddSolutionDialogComponent implements OnInit {

  public form: FormGroup;
  public solution: Solution;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddSolutionDialogComponent>
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
    const solutionToAdd: Solution = this.form.value as Solution;
    this._dialogRef.close(solutionToAdd);
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
