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
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/destinations/destination-detail/destination-detail.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/hotels", a0];
function DestinationDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementEnd();
  }
}
function DestinationDetailComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3");
    \u0275\u0275text(2, "About this destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.place().description);
  }
}
function DestinationDetailComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 18);
    \u0275\u0275text(2, "\u{1F3E8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No hotels listed yet");
    \u0275\u0275elementEnd()();
  }
}
function DestinationDetailComponent_Conditional_1_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "h4", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-star-rating", 11);
    \u0275\u0275elementStart(8, "div", 24)(9, "div", 25)(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 27);
    \u0275\u0275text(14, "/night");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "a", 28);
    \u0275\u0275text(16, "Book Now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const hotel_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", hotel_r2.image_url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", \u0275\u0275sanitizeUrl)("alt", hotel_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hotel_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", hotel_r2.address, "");
    \u0275\u0275advance();
    \u0275\u0275property("rating", hotel_r2.rating);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(12, 7, hotel_r2.price_per_night, "1.0-0"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, hotel_r2.id));
  }
}
function DestinationDetailComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, DestinationDetailComponent_Conditional_1_Conditional_20_For_2_Template, 17, 12, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.hotels());
  }
}
function DestinationDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 3);
    \u0275\u0275element(2, "img", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "a", 6);
    \u0275\u0275text(5, "\u2190 All Destinations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "app-star-rating", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 12);
    \u0275\u0275template(15, DestinationDetailComponent_Conditional_1_Conditional_15_Template, 5, 1, "div", 13);
    \u0275\u0275elementStart(16, "div", 14)(17, "h3", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, DestinationDetailComponent_Conditional_1_Conditional_19_Template, 5, 0, "div", 16)(20, DestinationDetailComponent_Conditional_1_Conditional_20_Template, 3, 0, "div", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.place().image_url || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80", \u0275\u0275sanitizeUrl)("alt", ctx_r0.place().name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.place().country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.place().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.place().location, "");
    \u0275\u0275advance();
    \u0275\u0275property("rating", ctx_r0.place().rating);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.place().description ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Hotels in ", ctx_r0.place().name, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hotels().length === 0 ? 19 : 20);
  }
}
var DestinationDetailComponent = class _DestinationDetailComponent {
  constructor(route, placesSvc, hotelsSvc) {
    this.route = route;
    this.placesSvc = placesSvc;
    this.hotelsSvc = hotelsSvc;
    this.place = signal(null);
    this.hotels = signal([]);
    this.loading = signal(true);
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.placesSvc.getById(id).subscribe({
      next: (p) => {
        this.place.set(p);
        this.hotelsSvc.list({ place_id: id, size: 20 }).subscribe({ next: (res) => this.hotels.set(res.items) });
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static {
    this.\u0275fac = function DestinationDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DestinationDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PlacesService), \u0275\u0275directiveInject(HotelsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationDetailComponent, selectors: [["app-destination-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "page-loading"], [1, "detail-page", "fade-in"], [1, "loading-spinner"], [1, "detail-hero"], [1, "hero-img", 3, "src", "alt"], [1, "hero-overlay"], ["routerLink", "/destinations", 1, "back-link"], [1, "hero-content"], [1, "hero-country"], [1, "hero-title"], [1, "hero-location"], [3, "rating"], [1, "detail-body"], [1, "detail-section", "card"], [1, "detail-section"], [1, "section-heading"], [1, "empty-state"], [1, "hotels-grid"], [1, "empty-icon"], [1, "hotel-card"], ["loading", "lazy", 1, "hotel-img", 3, "src", "alt"], [1, "hotel-body"], [1, "hotel-name"], [1, "hotel-address"], [1, "hotel-footer"], [1, "hotel-price"], [1, "price-amount"], [1, "price-label"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"]], template: function DestinationDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DestinationDetailComponent_Conditional_0_Template, 2, 0, "div", 0)(1, DestinationDetailComponent_Conditional_1_Template, 21, 9, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.loading() ? 0 : ctx.place() ? 1 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, StarRatingComponent], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.detail-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.detail-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 380px;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.detail-hero[_ngcontent-%COMP%]   .hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.85) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      transparent 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.875rem;\n  text-decoration: none;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 0.5rem 1rem;\n  border-radius: 9999px;\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  width: fit-content;\n  transition: all 150ms ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.5);\n}\n.hero-content[_ngcontent-%COMP%]   .hero-country[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: #c9a84c;\n  color: var(--dark-950);\n  padding: 2px 0.75rem;\n  border-radius: 9999px;\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: #fff;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.hero-content[_ngcontent-%COMP%]   .hero-location[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 0.5rem;\n}\n.detail-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.detail-section.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 0.75rem;\n}\n.detail-section.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 1.25rem;\n}\n.hotels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.hotel-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  padding: 0;\n  box-shadow: var(--shadow-card);\n  transition: border-color 250ms ease, box-shadow 250ms ease;\n  overflow: hidden;\n}\n.hotel-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-medium);\n  box-shadow: var(--shadow-card), var(--shadow-gold);\n}\n.hotel-card[_ngcontent-%COMP%]   .hotel-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n}\n.hotel-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.hotel-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.hotel-address[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.hotel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 0.5rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-subtle);\n}\n.hotel-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #c9a84c;\n}\n.price-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=destination-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationDetailComponent, { className: "DestinationDetailComponent", filePath: "src\\app\\features\\destinations\\destination-detail\\destination-detail.component.ts", lineNumber: 79 });
})();
export {
  DestinationDetailComponent
};
//# sourceMappingURL=destination-detail.component-TVHMFQPU.js.map
