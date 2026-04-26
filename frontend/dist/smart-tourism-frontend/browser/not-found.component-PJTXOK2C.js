import {
  AuthService
} from "./chunk-XHBJMX36.js";
import {
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/not-found/not-found.component.ts
var NotFoundComponent = class _NotFoundComponent {
  constructor(auth) {
    this.auth = auth;
  }
  static {
    this.\u0275fac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotFoundComponent)(\u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "not-found"], [1, "nf-content"], [1, "nf-code"], [1, "nf-title"], [1, "nf-sub"], [1, "nf-actions"], [1, "btn", "btn-primary", "btn-lg", 3, "routerLink"], ["routerLink", "/destinations", 1, "btn", "btn-secondary", "btn-lg"]], template: function NotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, "404");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1", 3);
        \u0275\u0275text(5, "Page not found");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Looks like this destination doesn't exist on our map. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5)(9, "a", 6);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275text(12, " Browse Destinations ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("routerLink", ctx.auth.isLoggedIn() ? "/dashboard" : "/auth/login");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.auth.isLoggedIn() ? "Back to Dashboard" : "Go to Login", " ");
      }
    }, dependencies: [RouterLink], styles: ["\n\n.not-found[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--dark-950);\n  padding: 2rem;\n}\n.nf-content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 480px;\n}\n.nf-code[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: 700;\n  line-height: 1;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c,\n      #e0c070);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 1rem;\n}\n.nf-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n}\n.nf-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin-bottom: 2.5rem;\n  line-height: 1.7;\n}\n.nf-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=not-found.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\features\\not-found\\not-found.component.ts", lineNumber: 77 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=not-found.component-PJTXOK2C.js.map
