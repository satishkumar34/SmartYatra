import { Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, TokenResponse, LoginRequest, RegisterRequest } from '../models';

const TOKEN_KEY = 'st_access_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = environment.apiBaseUrl;

  // Reactive state via signals
  private _currentUser = signal<User | null>(null);
  readonly currentUser = this._currentUser.asReadonly();
  readonly isLoggedIn = computed(() => this._currentUser() !== null);
  readonly isAdmin = computed(() => this._currentUser()?.role === 'admin');

  constructor(private http: HttpClient, private router: Router) {
    this.hydrateUser();
  }

  login(credentials: LoginRequest): Observable<TokenResponse> {
    const form = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

    return this.http
      .post<TokenResponse>(`${this.api}/auth/login`, form.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .pipe(
        tap((res) => {
          localStorage.setItem(TOKEN_KEY, res.access_token);
        }),
        switchMap((res) =>
          this.fetchCurrentUser().pipe(
            map(() => res)
          )
        )
      );
  }

  register(payload: RegisterRequest): Observable<User> {
    return this.http.post<User>(`${this.api}/auth/register`, payload);
  }

  fetchCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.api}/auth/me`).pipe(
      tap((user) => this._currentUser.set(user))
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    this._currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private hydrateUser(): void {
    if (this.getToken()) {
      this.fetchCurrentUser().subscribe({ error: () => this.logout() });
    }
  }
}
