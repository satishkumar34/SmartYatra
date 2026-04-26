import {
  ApiService
} from "./chunk-ZHODDKXD.js";
import {
  catchError,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/bookings.service.ts
var BookingsService = class _BookingsService extends ApiService {
  constructor() {
    super(...arguments);
    this.endpoint = `${this.base}/bookings`;
  }
  create(payload) {
    return this.http.post(this.endpoint, payload).pipe(catchError(this.handleError));
  }
  myBookings(params = {}) {
    return this.http.get(`${this.endpoint}/my`, { params: this.buildParams(params) }).pipe(catchError(this.handleError));
  }
  allBookings(params = {}) {
    return this.http.get(this.endpoint, { params: this.buildParams(params) }).pipe(catchError(this.handleError));
  }
  getById(id) {
    return this.http.get(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.endpoint}/${id}/status`, { status }).pipe(catchError(this.handleError));
  }
  cancel(id) {
    return this.http.post(`${this.endpoint}/${id}/cancel`, {}).pipe(catchError(this.handleError));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BookingsService_BaseFactory;
      return function BookingsService_Factory(__ngFactoryType__) {
        return (\u0275BookingsService_BaseFactory || (\u0275BookingsService_BaseFactory = \u0275\u0275getInheritedFactory(_BookingsService)))(__ngFactoryType__ || _BookingsService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingsService, factory: _BookingsService.\u0275fac, providedIn: "root" });
  }
};

export {
  BookingsService
};
//# sourceMappingURL=chunk-ULEBUOV3.js.map
