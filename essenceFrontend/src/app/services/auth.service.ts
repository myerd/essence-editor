import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private _userName;
  private _activeUserId;
  private apiRoot = 'http://localhost:8080/auth/';
  private _helper = new JwtHelperService();

  constructor(private _http: HttpClient) { }

  private setSession(authResult) {
    let token = authResult.token;
    let payload = this._helper.decodeToken(token);
    let expiresAt = dayjs.unix(payload.exp);
    this._activeUserId = payload.user_id;
    this._userName = payload.username;
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    console.log(localStorage.getItem('expires_at'));
    this.isAuthenticatedSubject.next(true);
  }

  public getActiveUserId(): string {
    return this._activeUserId;
  }

  public getActiveUser(): string {
    return this._userName;
  }

  public get token(): string {
    return localStorage.getItem('token');
  }

  public login(username: string, password: string) {
    const  options = {headers: {'Content-Type': 'application/json'}};
    return this._http.post(
      this.apiRoot.concat('login/'),
      { username, password }, options
    ).pipe(
      tap(response => this.setSession(response)),
      shareReplay(),
    );
  }

  public signup(username: string, email: string, password1: string, password2: string) {
      return this._http.post(
        this.apiRoot.concat('signup/'),
        { username, email, password1, password2 }
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      );
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.isAuthenticatedSubject.next(false);
  }

  public refreshToken() {
    const dayjs = require('dayjs');
    const isBetween = require('dayjs/plugin/isBetween');
    let now = dayjs();
    dayjs.extend(isBetween);
    if (now.isBetween(this.getExpiration().subtract(1, 'day'), this.getExpiration())) {
      return this._http.post(
        this.apiRoot.concat('refresh-token/'),
        {token: this.token}
      ).pipe(
        tap(response => this.setSession(response)),
        shareReplay(),
      ).subscribe();
    }
  }

  public getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return dayjs(expiresAt);
  }

  public isLoggedIn() {
    return dayjs().isBefore(this.getExpiration());
  }

  public isLoggedObserv() {
    return this.isAuthenticated;
  }
  public isLoggedOut() {
    return !this.isLoggedIn();
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'JWT '.concat(token))
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.authService.refreshToken();

      return true;
    } else {
      this.authService.logout();
      this.router.navigate(['login']);

      return false;
    }
  }
}

