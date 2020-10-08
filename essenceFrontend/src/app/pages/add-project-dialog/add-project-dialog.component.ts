import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/project';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {
  public form: FormGroup;
  public project: Project;

  public constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddProjectDialogComponent>
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
    const projecttoAdd: Project = this.form.value as Project;
    //editedRink.id = this.originalRink.id;
    const forDeleting: boolean = false;
    this._dialogRef.close(projecttoAdd);
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
