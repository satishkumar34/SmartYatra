import {
  Router
} from "./chunk-JKA44PGP.js";
import {
  HttpClient,
  HttpParams,
  computed,
  environment,
  map,
  signal,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/auth.service.ts
var TOKEN_KEY = "st_access_token";
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.api = environment.apiBaseUrl;
    this._currentUser = signal(null);
    this.currentUser = this._currentUser.asReadonly();
    this.isLoggedIn = computed(() => this._currentUser() !== null);
    this.isAdmin = computed(() => this._currentUser()?.role === "admin");
    this.hydrateUser();
  }
  login(credentials) {
    const form = new HttpParams().set("username", credentials.username).set("password", credentials.password);
    return this.http.post(`${this.api}/auth/login`, form.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }).pipe(tap((res) => {
      localStorage.setItem(TOKEN_KEY, res.access_token);
    }), switchMap((res) => this.fetchCurrentUser().pipe(map(() => res))));
  }
  register(payload) {
    return this.http.post(`${this.api}/auth/register`, payload);
  }
  fetchCurrentUser() {
    return this.http.get(`${this.api}/auth/me`).pipe(tap((user) => this._currentUser.set(user)));
  }
  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this._currentUser.set(null);
    this.router.navigate(["/auth/login"]);
  }
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
  hydrateUser() {
    if (this.getToken()) {
      this.fetchCurrentUser().subscribe({ error: () => this.logout() });
    }
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-XHBJMX36.js.map
