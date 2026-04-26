import {
  ApiService
} from "./chunk-ZHODDKXD.js";
import {
  catchError,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService extends ApiService {
  getDashboardStats() {
    return this.http.get(`${this.base}/admin/dashboard`).pipe(catchError(this.handleError));
  }
  listUsers(params = {}) {
    return this.http.get(`${this.base}/users`, { params: this.buildParams(params) }).pipe(catchError(this.handleError));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AdminService_BaseFactory;
      return function AdminService_Factory(__ngFactoryType__) {
        return (\u0275AdminService_BaseFactory || (\u0275AdminService_BaseFactory = \u0275\u0275getInheritedFactory(_AdminService)))(__ngFactoryType__ || _AdminService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};

export {
  AdminService
};
//# sourceMappingURL=chunk-CKSUMIHG.js.map
