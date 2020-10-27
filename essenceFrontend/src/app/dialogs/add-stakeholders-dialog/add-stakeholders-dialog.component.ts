import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Stakeholders } from '../../models/stakeholders';

@Component({
  selector: 'app-add-stakeholders-dialog',
  templateUrl: './add-stakeholders-dialog.component.html',
  styleUrls: ['./add-stakeholders-dialog.component.scss']
})
export class AddStakeholdersDialogComponent implements OnInit {
  public form: FormGroup;
  public stakeholders: Stakeholders;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddStakeholdersDialogComponent>
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
    const stakeholderToAdd: Stakeholders = this.form.value as Stakeholders;
    this._dialogRef.close(stakeholderToAdd);
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
