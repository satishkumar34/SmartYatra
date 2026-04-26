import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity
} from "./chunk-6OJTOGUY.js";

// src/app/shared/card-skeleton/card-skeleton.component.ts
function CardSkeletonComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275element(3, "div", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275elementEnd()();
  }
}
var CardSkeletonComponent = class _CardSkeletonComponent {
  constructor() {
    this.count = 6;
  }
  get items() {
    return Array.from({ length: this.count }, (_, i) => i);
  }
  static {
    this.\u0275fac = function CardSkeletonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardSkeletonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardSkeletonComponent, selectors: [["app-card-skeleton"]], inputs: { count: "count" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 0, consts: [[1, "skeleton-grid"], [1, "skeleton-card"], [1, "skeleton-img"], [1, "skeleton-body"], [1, "skeleton-line", "wide"], [1, "skeleton-line", "medium"], [1, "skeleton-line", "short"]], template: function CardSkeletonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, CardSkeletonComponent_For_2_Template, 6, 0, "div", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.items);
      }
    }, dependencies: [CommonModule], styles: ["\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  overflow: hidden;\n}\n.skeleton-img[_ngcontent-%COMP%] {\n  height: 200px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--dark-700) 25%,\n      var(--dark-600) 50%,\n      var(--dark-700) 75%);\n  background-size: 600px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n}\n.skeleton-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skeleton-line[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--dark-700) 25%,\n      var(--dark-600) 50%,\n      var(--dark-700) 75%);\n  background-size: 600px 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite linear;\n}\n.wide[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.medium[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.short[_ngcontent-%COMP%] {\n  width: 35%;\n}\n/*# sourceMappingURL=card-skeleton.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardSkeletonComponent, { className: "CardSkeletonComponent", filePath: "src\\app\\shared\\card-skeleton\\card-skeleton.component.ts", lineNumber: 57 });
})();

export {
  CardSkeletonComponent
};
//# sourceMappingURL=chunk-5IFWQRM4.js.map
