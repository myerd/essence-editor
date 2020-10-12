import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Requirements } from '../../models/requirements';

@Component({
  selector: 'app-add-requirements-dialog',
  templateUrl: './add-requirements-dialog.component.html',
  styleUrls: ['./add-requirements-dialog.component.scss']
})
export class AddRequirementsDialogComponent implements OnInit {
  public form: FormGroup;
  public requirements: Requirements;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddRequirementsDialogComponent>
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
    const requirementsToAdd: Requirements = this.form.value as Requirements;
    this._dialogRef.close(requirementsToAdd);
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
