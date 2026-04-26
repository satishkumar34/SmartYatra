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
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3YIVQX77.js";
import {
  HotelsService
} from "./chunk-52RINIPS.js";
import {
  StarRatingComponent
} from "./chunk-D6CROIM6.js";
import {
  PlacesService
} from "./chunk-3M7O4WSI.js";
import "./chunk-ZHODDKXD.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/hotels/hotels-list/hotels-list.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/hotels", a0];
function HotelsListComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const place_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", place_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(place_r1.name);
  }
}
function HotelsListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function HotelsListComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function HotelsListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-skeleton", 11);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 12);
  }
}
function HotelsListComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 14);
    \u0275\u0275text(2, "\u{1F3E8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No hotels found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15);
    \u0275\u0275listener("click", function HotelsListComponent_Conditional_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(8, "Clear Filters");
    \u0275\u0275elementEnd()();
  }
}
function HotelsListComponent_Conditional_31_For_2_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6);
  }
}
function HotelsListComponent_Conditional_31_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, HotelsListComponent_Conditional_31_For_2_Conditional_12_For_2_Template, 2, 1, "span", 30, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hotel_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.amenitiesList(hotel_r7.amenities).slice(0, 3));
  }
}
function HotelsListComponent_Conditional_31_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17)(1, "div", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementStart(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 22)(7, "h3", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "app-star-rating", 25);
    \u0275\u0275template(12, HotelsListComponent_Conditional_31_For_2_Conditional_12_Template, 3, 0, "div", 26);
    \u0275\u0275elementStart(13, "div", 27)(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 29);
    \u0275\u0275text(17, "Book Now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const hotel_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, hotel_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", hotel_r7.image_url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", \u0275\u0275sanitizeUrl)("alt", hotel_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 9, hotel_r7.price_per_night, "1.0-0"), "/night");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(hotel_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", hotel_r7.address, "");
    \u0275\u0275advance();
    \u0275\u0275property("rating", hotel_r7.rating);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.amenitiesList(hotel_r7.amenities).length > 0 ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", hotel_r7.total_rooms, " rooms available");
  }
}
function HotelsListComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, HotelsListComponent_Conditional_31_For_2_Template, 18, 14, "a", 17, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-pagination", 18);
    \u0275\u0275listener("pageChange", function HotelsListComponent_Conditional_31_Template_app_pagination_pageChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.hotels());
    \u0275\u0275advance(2);
    \u0275\u0275property("currentPage", ctx_r2.currentPage())("totalPages", ctx_r2.totalPages());
  }
}
var HotelsListComponent = class _HotelsListComponent {
  constructor(hotelsSvc, placesSvc, route) {
    this.hotelsSvc = hotelsSvc;
    this.placesSvc = placesSvc;
    this.route = route;
    this.hotels = signal([]);
    this.places = signal([]);
    this.loading = signal(true);
    this.totalPages = signal(1);
    this.currentPage = signal(1);
    this.searchQuery = "";
    this.search$ = new Subject();
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    const placeId = this.route.snapshot.queryParamMap.get("place_id");
    if (placeId)
      this.selectedPlaceId = Number(placeId);
    this.placesSvc.list({ size: 100 }).subscribe({ next: (r) => this.places.set(r.items) });
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
    this.hotelsSvc.list({
      page: this.currentPage(),
      size: 12,
      search: this.searchQuery || void 0,
      place_id: this.selectedPlaceId,
      min_price: this.minPrice,
      max_price: this.maxPrice,
      min_rating: this.minRating
    }).subscribe({
      next: (res) => {
        this.hotels.set(res.items);
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
    this.selectedPlaceId = void 0;
    this.minPrice = void 0;
    this.maxPrice = void 0;
    this.minRating = void 0;
    this.currentPage.set(1);
    this.load();
  }
  get hasFilters() {
    return !!(this.searchQuery || this.selectedPlaceId || this.minPrice || this.maxPrice || this.minRating);
  }
  amenitiesList(amenities) {
    if (!amenities)
      return [];
    try {
      return JSON.parse(amenities);
    } catch {
      return [];
    }
  }
  static {
    this.\u0275fac = function HotelsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HotelsListComponent)(\u0275\u0275directiveInject(HotelsService), \u0275\u0275directiveInject(PlacesService), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HotelsListComponent, selectors: [["app-hotels-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 12, consts: [[1, "hotels-page", "fade-in"], [1, "page-header"], [1, "filters-bar", "card-sm"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "Search hotels...", 1, "search-input", 3, "input", "value"], [1, "filter-input", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], ["type", "number", "placeholder", "Min price", 1, "filter-input", "price-input", 3, "ngModelChange", "change", "ngModel"], ["type", "number", "placeholder", "Max price", 1, "filter-input", "price-input", 3, "ngModelChange", "change", "ngModel"], [1, "btn", "btn-ghost", "btn-sm"], [3, "count"], [1, "empty-state"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "empty-icon"], [1, "btn", "btn-secondary", 2, "margin-top", "1rem", 3, "click"], [1, "hotels-grid"], [1, "hotel-card", 3, "routerLink"], [3, "pageChange", "currentPage", "totalPages"], [1, "card-img-wrap"], ["loading", "lazy", 1, "card-img", 3, "src", "alt"], [1, "price-badge"], [1, "card-body"], [1, "hotel-name"], [1, "hotel-address"], [3, "rating"], [1, "amenities"], [1, "card-cta"], [1, "rooms-left"], [1, "book-link", "btn", "btn-primary", "btn-sm"], [1, "amenity-tag"]], template: function HotelsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Find Hotels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Luxury stays handpicked for every destination");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "div", 3)(9, "span", 4);
        \u0275\u0275text(10, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "input", 5);
        \u0275\u0275listener("input", function HotelsListComponent_Template_input_input_11_listener($event) {
          return ctx.onSearch($event.target.value);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function HotelsListComponent_Template_select_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedPlaceId, $event) || (ctx.selectedPlaceId = $event);
          return $event;
        });
        \u0275\u0275listener("change", function HotelsListComponent_Template_select_change_12_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementStart(13, "option", 7);
        \u0275\u0275text(14, "All destinations");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(15, HotelsListComponent_For_16_Template, 2, 2, "option", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function HotelsListComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event);
          return $event;
        });
        \u0275\u0275listener("change", function HotelsListComponent_Template_input_change_17_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function HotelsListComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
          return $event;
        });
        \u0275\u0275listener("change", function HotelsListComponent_Template_input_change_18_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 6);
        \u0275\u0275twoWayListener("ngModelChange", function HotelsListComponent_Template_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minRating, $event) || (ctx.minRating = $event);
          return $event;
        });
        \u0275\u0275listener("change", function HotelsListComponent_Template_select_change_19_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementStart(20, "option", 7);
        \u0275\u0275text(21, "Any rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 7);
        \u0275\u0275text(23, "3+ Stars");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 7);
        \u0275\u0275text(25, "4+ Stars");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 7);
        \u0275\u0275text(27, "4.5+ Stars");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, HotelsListComponent_Conditional_28_Template, 2, 0, "button", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(29, HotelsListComponent_Conditional_29_Template, 1, 1, "app-card-skeleton", 11)(30, HotelsListComponent_Conditional_30_Template, 9, 0, "div", 12)(31, HotelsListComponent_Conditional_31_Template, 4, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("value", ctx.searchQuery);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedPlaceId);
        \u0275\u0275advance();
        \u0275\u0275property("ngValue", void 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.places());
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.minPrice);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
        \u0275\u0275advance();
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
        \u0275\u0275conditional(ctx.hasFilters ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 29 : ctx.hotels().length === 0 ? 30 : 31);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, StarRatingComponent, PaginationComponent, CardSkeletonComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.hotels-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 200px;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 0.875rem;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  padding-left: 2rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  min-width: 140px;\n}\n.filter-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.filter-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.filter-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.price-input[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n.hotels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.hotel-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  padding: 0;\n  box-shadow: var(--shadow-card);\n  transition: border-color 250ms ease, box-shadow 250ms ease;\n  overflow: hidden;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  transition: all 250ms ease;\n}\n.hotel-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-medium);\n  box-shadow: var(--shadow-card), var(--shadow-gold);\n}\n.hotel-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--border-medium);\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n}\n.hotel-card[_ngcontent-%COMP%]:hover   .card-img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.card-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 200px;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 400ms ease;\n}\n.price-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: rgba(0, 0, 0, 0.75);\n  color: #c9a84c;\n  backdrop-filter: blur(8px);\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border: 1px solid rgba(201, 168, 76, 0.3);\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n}\n.hotel-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.hotel-address[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.amenities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.25rem;\n}\n.amenity-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 0.5rem;\n  background: var(--dark-700);\n  border: 1px solid var(--border-subtle);\n  border-radius: 9999px;\n  color: var(--text-secondary);\n}\n.card-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-subtle);\n}\n.rooms-left[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.book-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=hotels-list.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HotelsListComponent, { className: "HotelsListComponent", filePath: "src\\app\\features\\hotels\\hotels-list\\hotels-list.component.ts", lineNumber: 20 });
})();
export {
  HotelsListComponent
};
//# sourceMappingURL=hotels-list.component-5RCA6UPD.js.map
