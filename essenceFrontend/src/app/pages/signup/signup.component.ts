import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public signup(username: string, email: string, password1: string, password2: string) {
    this._authService.signup(username, email, password1, password2).subscribe(
      success => this._router.navigate(['/']),
      error => this.error = error
    );
  }
}
