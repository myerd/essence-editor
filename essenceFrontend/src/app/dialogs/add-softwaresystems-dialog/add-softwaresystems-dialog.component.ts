import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Softwaresystems } from '../../models/softwaresystems';

@Component({
  selector: 'app-add-softwaresystems-dialog',
  templateUrl: './add-softwaresystems-dialog.component.html',
  styleUrls: ['./add-softwaresystems-dialog.component.scss']
})
export class AddSoftwaresystemsDialogComponent implements OnInit {
  public form: FormGroup;
  public softwaresystems: Softwaresystems;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddSoftwaresystemsDialogComponent>
  ) {}

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
    const softwaresstemsToAdd: Softwaresystems = this.form.value as Softwaresystems;
    this._dialogRef.close(softwaresstemsToAdd);
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
