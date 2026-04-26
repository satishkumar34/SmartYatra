import {
  HttpClient,
  HttpParams,
  environment,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/api.service.ts
var ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiBaseUrl;
  }
  buildParams(obj) {
    let params = new HttpParams();
    Object.entries(obj).forEach(([k, v]) => {
      if (v !== void 0 && v !== null && v !== "") {
        params = params.set(k, String(v));
      }
    });
    return params;
  }
  handleError(err) {
    const message = err.error?.detail || (Array.isArray(err.error?.detail) ? err.error.detail.map((e) => e.msg).join(", ") : "An unexpected error occurred.");
    return throwError(() => new Error(message));
  }
  static {
    this.\u0275fac = function ApiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApiService
};
//# sourceMappingURL=chunk-ZHODDKXD.js.map
