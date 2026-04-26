import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OJTOGUY.js";

// src/app/shared/star-rating/star-rating.component.ts
function StarRatingComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(i_r1 <= ctx_r1.fullStars ? "star" : "star-empty");
  }
}
function StarRatingComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.rating.toFixed(1));
  }
}
var StarRatingComponent = class _StarRatingComponent {
  constructor() {
    this.rating = 0;
    this.showValue = true;
    this.stars = [1, 2, 3, 4, 5];
  }
  get fullStars() {
    return Math.round(this.rating);
  }
  static {
    this.\u0275fac = function StarRatingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StarRatingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarRatingComponent, selectors: [["app-star-rating"]], inputs: { rating: "rating", showValue: "showValue" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [[1, "star-rating"], [3, "class"], [1, "rating-value"]], template: function StarRatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275repeaterCreate(1, StarRatingComponent_For_2_Template, 2, 2, "span", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275template(3, StarRatingComponent_Conditional_3_Template, 2, 1, "span", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.rating + " out of 5 stars");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.stars);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showValue ? 3 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.star-rating[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n}\n.star[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-size: inherit;\n}\n.star-empty[_ngcontent-%COMP%] {\n  color: var(--dark-500);\n  font-size: inherit;\n}\n.rating-value[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  font-size: 0.8em;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=star-rating.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarRatingComponent, { className: "StarRatingComponent", filePath: "src\\app\\shared\\star-rating\\star-rating.component.ts", lineNumber: 26 });
})();

export {
  StarRatingComponent
};
//# sourceMappingURL=chunk-D6CROIM6.js.map
