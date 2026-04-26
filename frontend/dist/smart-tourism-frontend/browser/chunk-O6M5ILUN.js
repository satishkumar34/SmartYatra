import {
  CommonModule,
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-6OJTOGUY.js";

// src/app/shared/pagination/pagination.component.ts
function PaginationComponent_Conditional_0_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_Conditional_0_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_For_4_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.go(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r4 === ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function PaginationComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationComponent_Conditional_0_For_4_Conditional_0_Template, 2, 0, "span", 2)(1, PaginationComponent_Conditional_0_For_4_Conditional_1_Template, 2, 3, "button", 3);
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275conditional(p_r4 === -1 ? 0 : 1);
  }
}
function PaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.currentPage - 1));
    });
    \u0275\u0275text(2, "<");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, PaginationComponent_Conditional_0_For_4_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "button", 1);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(6, ">");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.visiblePages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.currentPage = 1;
    this.totalPages = 1;
    this.pageChange = new EventEmitter();
  }
  get visiblePages() {
    const pages = [];
    const total = this.totalPages;
    const cur = this.currentPage;
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    pages.push(1);
    if (cur > 3)
      pages.push(-1);
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) {
      pages.push(i);
    }
    if (cur < total - 2)
      pages.push(-1);
    pages.push(total);
    return pages;
  }
  go(page) {
    if (page < 1 || page > this.totalPages)
      return;
    this.pageChange.emit(page);
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { currentPage: "currentPage", totalPages: "totalPages" }, outputs: { pageChange: "pageChange" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "pagination"], [3, "click", "disabled"], [1, "pagination-ellipsis"], [3, "active"], [3, "click"]], template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaginationComponent_Conditional_0_Template, 7, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.totalPages > 1 ? 0 : -1);
      }
    }, dependencies: [CommonModule], styles: ["\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  margin-top: 2rem;\n}\n.pagination-ellipsis[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  padding: 0 4px;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src\\app\\shared\\pagination\\pagination.component.ts", lineNumber: 30 });
})();

export {
  PaginationComponent
};
//# sourceMappingURL=chunk-O6M5ILUN.js.map
