import {
  ApiService
} from "./chunk-ZHODDKXD.js";
import {
  catchError,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/hotels.service.ts
var HotelsService = class _HotelsService extends ApiService {
  constructor() {
    super(...arguments);
    this.endpoint = `${this.base}/hotels`;
  }
  list(params = {}) {
    return this.http.get(this.endpoint, { params: this.buildParams(params) }).pipe(catchError(this.handleError));
  }
  getById(id) {
    return this.http.get(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }
  create(payload) {
    return this.http.post(this.endpoint, payload).pipe(catchError(this.handleError));
  }
  update(id, payload) {
    return this.http.patch(`${this.endpoint}/${id}`, payload).pipe(catchError(this.handleError));
  }
  delete(id) {
    return this.http.delete(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HotelsService_BaseFactory;
      return function HotelsService_Factory(__ngFactoryType__) {
        return (\u0275HotelsService_BaseFactory || (\u0275HotelsService_BaseFactory = \u0275\u0275getInheritedFactory(_HotelsService)))(__ngFactoryType__ || _HotelsService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HotelsService, factory: _HotelsService.\u0275fac, providedIn: "root" });
  }
};

export {
  HotelsService
};
//# sourceMappingURL=chunk-52RINIPS.js.map
