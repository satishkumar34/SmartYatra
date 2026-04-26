import {
  Subject,
  ɵɵdefineInjectable
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  constructor() {
    this._counter = 0;
    this._toasts$ = new Subject();
    this.toasts$ = this._toasts$.asObservable();
  }
  show(message, type = "info") {
    this._toasts$.next({ id: ++this._counter, message, type });
  }
  success(message) {
    this.show(message, "success");
  }
  error(message) {
    this.show(message, "error");
  }
  warning(message) {
    this.show(message, "warning");
  }
  static {
    this.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToastService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
  }
};

export {
  ToastService
};
//# sourceMappingURL=chunk-6ZHTHB22.js.map
