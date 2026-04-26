import {
  ApiService
} from "./chunk-ZHODDKXD.js";
import {
  catchError,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/places.service.ts
var PlacesService = class _PlacesService extends ApiService {
  constructor() {
    super(...arguments);
    this.endpoint = `${this.base}/places`;
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
      let \u0275PlacesService_BaseFactory;
      return function PlacesService_Factory(__ngFactoryType__) {
        return (\u0275PlacesService_BaseFactory || (\u0275PlacesService_BaseFactory = \u0275\u0275getInheritedFactory(_PlacesService)))(__ngFactoryType__ || _PlacesService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlacesService, factory: _PlacesService.\u0275fac, providedIn: "root" });
  }
};

export {
  PlacesService
};
//# sourceMappingURL=chunk-3M7O4WSI.js.map
