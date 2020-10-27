import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  ngOnInit() {
  }

  public login(username: string, password: string) {
    this._authService.login(username, password).subscribe(
      success => this._router.navigate(['']),
      error => this.error = error
    );
  }
}
