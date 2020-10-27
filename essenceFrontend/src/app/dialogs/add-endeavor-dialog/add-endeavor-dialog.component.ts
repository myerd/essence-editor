import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Endeavor } from '../../models/endeavor';

@Component({
  selector: 'app-add-endeavor-dialog',
  templateUrl: './add-endeavor-dialog.component.html',
  styleUrls: ['./add-endeavor-dialog.component.scss']
})
export class AddEndeavorDialogComponent implements OnInit {
  public form: FormGroup;
  public endeavor: Endeavor;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEndeavorDialogComponent>
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
    const endeavorToAdd: Endeavor = this.form.value as Endeavor;
    this._dialogRef.close(endeavorToAdd);
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
