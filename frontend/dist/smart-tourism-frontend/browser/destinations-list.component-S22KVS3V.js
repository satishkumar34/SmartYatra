import {
  CardSkeletonComponent
} from "./chunk-5IFWQRM4.js";
import {
  PaginationComponent
} from "./chunk-O6M5ILUN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3YIVQX77.js";
import {
  StarRatingComponent
} from "./chunk-D6CROIM6.js";
import {
  PlacesService
} from "./chunk-3M7O4WSI.js";
import "./chunk-ZHODDKXD.js";
import {
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  SlicePipe,
  Subject,
  debounceTime,
  distinctUntilChanged,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/destinations/destinations-list/destinations-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/destinations", a0];
function DestinationsListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DestinationsListComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function DestinationsListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-skeleton", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 12);
  }
}
function DestinationsListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F30D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No destinations found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your search or filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function DestinationsListComponent_Conditional_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(8, " Clear Filters ");
    \u0275\u0275elementEnd()();
  }
}
function DestinationsListComponent_Conditional_27_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const place_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(2, 2, place_r5.description, 0, 90), "", place_r5.description.length > 90 ? "\u2026" : "", "");
  }
}
function DestinationsListComponent_Conditional_27_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "div", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementStart(3, "div", 21)(4, "span", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 23)(7, "h3", 24);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, DestinationsListComponent_Conditional_27_For_2_Conditional_11_Template, 3, 6, "p", 26);
    \u0275\u0275elementStart(12, "div", 27);
    \u0275\u0275element(13, "app-star-rating", 28);
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15, "Explore \u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const place_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, place_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", place_r5.image_url || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", \u0275\u0275sanitizeUrl)("alt", place_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(place_r5.country);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(place_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", place_r5.location, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(place_r5.description ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("rating", place_r5.rating);
  }
}
function DestinationsListComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, DestinationsListComponent_Conditional_27_For_2_Template, 16, 10, "a", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-pagination", 18);
    \u0275\u0275listener("pageChange", function DestinationsListComponent_Conditional_27_Template_app_pagination_pageChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.places());
    \u0275\u0275advance(2);
    \u0275\u0275property("currentPage", ctx_r1.currentPage())("totalPages", ctx_r1.totalPages());
  }
}
var DestinationsListComponent = class _DestinationsListComponent {
  constructor(placesSvc) {
    this.placesSvc = placesSvc;
    this.places = signal([]);
    this.loading = signal(true);
    this.totalPages = signal(1);
    this.currentPage = signal(1);
    this.searchQuery = "";
    this.selectedCountry = "";
    this.search$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.load();
    this.search$.pipe(debounceTime(350), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.currentPage.set(1);
      this.load();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  load() {
    this.loading.set(true);
    this.placesSvc.list({
      page: this.currentPage(),
      size: 12,
      search: this.searchQuery || void 0,
      country: this.selectedCountry || void 0,
      min_rating: this.minRating
    }).subscribe({
      next: (res) => {
        this.places.set(res.items);
        this.totalPages.set(res.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onSearch(q) {
    this.searchQuery = q;
    this.search$.next(q);
  }
  onFilter() {
    this.currentPage.set(1);
    this.load();
  }
  onPage(p) {
    this.currentPage.set(p);
    this.load();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  clearFilters() {
    this.searchQuery = "";
    this.selectedCountry = "";
    this.minRating = void 0;
    this.currentPage.set(1);
    this.load();
  }
  get hasFilters() {
    return !!(this.searchQuery || this.selectedCountry || this.minRating);
  }
  static {
    this.\u0275fac = function DestinationsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DestinationsListComponent)(\u0275\u0275directiveInject(PlacesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationsListComponent, selectors: [["app-destinations-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 9, consts: [[1, "destinations-page", "fade-in"], [1, "page-header"], [1, "filters-bar", "card-sm"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "Search destinations, cities...", 1, "search-input", 3, "input", "value"], [1, "filter-group"], ["type", "text", "placeholder", "Country", 1, "filter-input", 3, "ngModelChange", "change", "ngModel"], [1, "filter-input", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [1, "btn", "btn-ghost", "btn-sm"], [3, "count"], [1, "empty-state"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "empty-icon"], [1, "btn", "btn-secondary", 2, "margin-top", "1rem", 3, "click"], [1, "places-grid"], [1, "place-card", 3, "routerLink"], [3, "pageChange", "currentPage", "totalPages"], [1, "card-img-wrap"], ["loading", "lazy", 1, "card-img", 3, "src", "alt"], [1, "card-overlay"], [1, "country-badge"], [1, "card-body"], [1, "card-title"], [1, "card-location"], [1, "card-desc"], [1, "card-footer"], [3, "rating"], [1, "explore-link"]], template: function DestinationsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Explore Destinations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Discover the world's most breathtaking locations");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "span", 4);
        \u0275\u0275text(10, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 5);
        \u0275\u0275listener("input", function DestinationsListComponent_Template_input_input_11_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "input", 7);
        \u0275\u0275twoWayListener("ngModelChange", function DestinationsListComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCountry, $event) || (ctx.selectedCountry = $event);
          return $event;
        });
        \u0275\u0275listener("change", function DestinationsListComponent_Template_input_change_13_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "select", 8);
        \u0275\u0275twoWayListener("ngModelChange", function DestinationsListComponent_Template_select_ngModelChange_15_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minRating, $event) || (ctx.minRating = $event);
          return $event;
        });
        \u0275\u0275listener("change", function DestinationsListComponent_Template_select_change_15_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementStart(16, "option", 9);
        \u0275\u0275text(17, "Any rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 9);
        \u0275\u0275text(19, "3+ Stars");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 9);
        \u0275\u0275text(21, "4+ Stars");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 9);
        \u0275\u0275text(23, "4.5+ Stars");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(24, DestinationsListComponent_Conditional_24_Template, 2, 0, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, DestinationsListComponent_Conditional_25_Template, 1, 1, "app-card-skeleton", 11)(26, DestinationsListComponent_Conditional_26_Template, 9, 0, "div", 12)(27, DestinationsListComponent_Conditional_27_Template, 4, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("value", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCountry);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.minRating);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 3);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 4);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngValue", 4.5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hasFilters ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 25 : ctx.places().length === 0 ? 26 : 27);
      }
    }, dependencies: [CommonModule, SlicePipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, StarRatingComponent, PaginationComponent, CardSkeletonComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.destinations-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  padding-left: 2rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.filter-group[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.filter-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.filter-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.places-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.place-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  overflow: hidden;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  transition: all 250ms ease;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease forwards;\n}\n.place-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--border-medium);\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n}\n.place-card[_ngcontent-%COMP%]:hover   .card-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.place-card[_ngcontent-%COMP%]:hover   .explore-link[_ngcontent-%COMP%] {\n  color: #c9a84c;\n}\n.card-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 200px;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 400ms ease;\n}\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.6) 0%,\n      transparent 60%);\n  display: flex;\n  align-items: flex-end;\n  padding: 0.75rem;\n}\n.country-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: rgba(201, 168, 76, 0.9);\n  color: var(--dark-950);\n  padding: 2px 0.75rem;\n  border-radius: 9999px;\n  letter-spacing: 0.04em;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 0.5rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.card-location[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n  flex: 1;\n  margin: 0;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-subtle);\n}\n.explore-link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  transition: color 150ms ease;\n}\n/*# sourceMappingURL=destinations-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationsListComponent, { className: "DestinationsListComponent", filePath: "src\\app\\features\\destinations\\destinations-list\\destinations-list.component.ts", lineNumber: 19 });
})();
export {
  DestinationsListComponent
};
//# sourceMappingURL=destinations-list.component-S22KVS3V.js.map
