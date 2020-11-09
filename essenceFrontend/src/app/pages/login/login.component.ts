import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;
  public form: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get f() { return this.form.controls; }

  public onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this._authService.login(this.f.username.value, this.f.password.value).pipe(first())
      .subscribe(
      success => this._router.navigate(['']),
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

}
