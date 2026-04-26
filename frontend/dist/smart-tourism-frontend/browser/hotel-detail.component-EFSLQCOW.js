import {
  HotelsService
} from "./chunk-52RINIPS.js";
import {
  StarRatingComponent
} from "./chunk-D6CROIM6.js";
import "./chunk-ZHODDKXD.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  DecimalPipe,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/hotels/hotel-detail/hotel-detail.component.ts
function HotelDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function HotelDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5);
    \u0275\u0275text(2, "\u{1F3E8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 6);
    \u0275\u0275text(6, "Back to Hotels");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HotelDetailComponent_Conditional_3_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "About this hotel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.hotel().description);
  }
}
function HotelDetailComponent_Conditional_3_Conditional_16_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const amenity_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.iconFor(amenity_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(amenity_r2);
  }
}
function HotelDetailComponent_Conditional_3_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "Amenities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275repeaterCreate(4, HotelDetailComponent_Conditional_3_Conditional_16_For_5_Template, 5, 2, "div", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.amenities);
  }
}
function HotelDetailComponent_Conditional_3_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function HotelDetailComponent_Conditional_3_Conditional_57_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bookNow());
    });
    \u0275\u0275text(1, " Book Now ");
    \u0275\u0275elementEnd();
  }
}
function HotelDetailComponent_Conditional_3_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275text(1, " Currently Unavailable ");
    \u0275\u0275elementEnd();
  }
}
function HotelDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7);
    \u0275\u0275element(2, "img", 8);
    \u0275\u0275elementStart(3, "div", 9)(4, "a", 10);
    \u0275\u0275text(5, "\u2190 All Hotels");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 11)(7, "div", 12)(8, "div", 13)(9, "div")(10, "h1", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "app-star-rating", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, HotelDetailComponent_Conditional_3_Conditional_15_Template, 5, 1, "div", 17)(16, HotelDetailComponent_Conditional_3_Conditional_16_Template, 6, 0, "div", 17);
    \u0275\u0275elementStart(17, "div", 17)(18, "h3");
    \u0275\u0275text(19, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "div", 19)(22, "span", 20);
    \u0275\u0275text(23, "Total rooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 21);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "span", 20);
    \u0275\u0275text(28, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 21);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 19)(32, "span", 20);
    \u0275\u0275text(33, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(36, "div", 22)(37, "div", 23)(38, "div", 24)(39, "span", 25);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 26);
    \u0275\u0275text(43, "per night");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 27)(45, "div", 28)(46, "span");
    \u0275\u0275text(47, "\u{1F3E8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 28)(51, "span");
    \u0275\u0275text(52, "\u2B50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 29);
    \u0275\u0275text(56, " Taxes and fees calculated at checkout ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, HotelDetailComponent_Conditional_3_Conditional_57_Template, 2, 0, "button", 30)(58, HotelDetailComponent_Conditional_3_Conditional_58_Template, 2, 0, "button", 31);
    \u0275\u0275elementStart(59, "p", 32);
    \u0275\u0275text(60, "You won't be charged yet");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.hotel().image_url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80", \u0275\u0275sanitizeUrl)("alt", ctx_r0.hotel().name);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.hotel().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.hotel().address, "");
    \u0275\u0275advance();
    \u0275\u0275property("rating", ctx_r0.hotel().rating);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hotel().description ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.amenities.length > 0 ? 16 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.hotel().total_rooms);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.hotel().rating, " / 5");
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r0.hotel().is_active ? "badge-confirmed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.hotel().is_active ? "Available" : "Unavailable", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(41, 16, ctx_r0.hotel().price_per_night, "1.0-0"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r0.hotel().total_rooms, " rooms available");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.hotel().rating, "/5 guest rating");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.hotel().is_active ? 57 : 58);
  }
}
var HotelDetailComponent = class _HotelDetailComponent {
  constructor(route, router, hotelsSvc) {
    this.route = route;
    this.router = router;
    this.hotelsSvc = hotelsSvc;
    this.hotel = signal(null);
    this.loading = signal(true);
    this.error = signal("");
    this.amenityIcons = {
      WiFi: "\u{1F4F6}",
      Pool: "\u{1F3CA}",
      Spa: "\u{1F486}",
      Gym: "\u{1F3CB}",
      Restaurant: "\u{1F37D}",
      Parking: "\u{1F17F}",
      "Air Conditioning": "\u2744",
      "Room Service": "\u{1F6CE}",
      Bar: "\u{1F378}",
      Concierge: "\u{1F3A9}",
      "Pet Friendly": "\u{1F43E}",
      Laundry: "\u{1F455}"
    };
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.hotelsSvc.getById(id).subscribe({
      next: (h) => {
        this.hotel.set(h);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("Hotel not found.");
        this.loading.set(false);
      }
    });
  }
  bookNow() {
    this.router.navigate(["/bookings/new"], {
      queryParams: { hotel_id: this.hotel().id }
    });
  }
  get amenities() {
    const raw = this.hotel()?.amenities;
    if (!raw)
      return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }
  iconFor(amenity) {
    return this.amenityIcons[amenity] ?? "\u2713";
  }
  static {
    this.\u0275fac = function HotelDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HotelDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HotelsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HotelDetailComponent, selectors: [["app-hotel-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "hotel-detail-page"], [1, "page-loading"], [1, "empty-state"], [1, "fade-in"], [1, "loading-spinner"], [1, "empty-icon"], ["routerLink", "/hotels", 1, "btn", "btn-secondary", 2, "margin-top", "1rem"], [1, "hotel-hero"], [1, "hero-img", 3, "src", "alt"], [1, "hero-overlay"], ["routerLink", "/hotels", 1, "back-link"], [1, "detail-grid"], [1, "detail-info"], [1, "hotel-header"], [1, "hotel-name"], [1, "hotel-address"], [3, "rating"], [1, "info-section", "card"], [1, "details-list"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "booking-sidebar"], [1, "booking-card", "card"], [1, "price-display"], [1, "price-amount"], [1, "price-unit"], [1, "booking-meta"], [1, "meta-row"], [1, "price-note"], [1, "btn", "btn-primary", "btn-full", "btn-lg"], ["disabled", "", 1, "btn", "btn-secondary", "btn-full", "btn-lg"], [1, "no-charge-note"], [1, "amenities-grid"], [1, "amenity-item"], [1, "amenity-icon"], [1, "btn", "btn-primary", "btn-full", "btn-lg", 3, "click"]], template: function HotelDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, HotelDetailComponent_Conditional_1_Template, 2, 0, "div", 1)(2, HotelDetailComponent_Conditional_2_Template, 7, 1, "div", 2)(3, HotelDetailComponent_Conditional_3_Template, 61, 19, "div", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 1 : ctx.error() ? 2 : ctx.hotel() ? 3 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, RouterLink, StarRatingComponent], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.hotel-detail-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.hotel-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 420px;\n  border-radius: 24px;\n  overflow: hidden;\n  margin-bottom: 2rem;\n}\n.hotel-hero[_ngcontent-%COMP%]   .hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hotel-hero[_ngcontent-%COMP%]   .hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(0, 0, 0, 0.3) 0%,\n      transparent 50%);\n  padding: 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.875rem;\n  text-decoration: none;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 0.5rem 1rem;\n  border-radius: 9999px;\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  transition: all 150ms ease;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 2rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.detail-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.hotel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.hotel-name[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.hotel-address[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.info-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.amenities-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 0.75rem;\n}\n.amenity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  padding: 0.5rem 0.75rem;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n}\n.amenity-item[_ngcontent-%COMP%]   .amenity-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.details-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.booking-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1.5rem;\n}\n.booking-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  border: 1px solid var(--border-medium);\n  box-shadow: var(--shadow-gold);\n}\n.price-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-weight: 700;\n  color: #c9a84c;\n}\n.price-unit[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.booking-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.price-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-align: center;\n}\n.no-charge-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-align: center;\n  margin-top: -0.5rem;\n}\n/*# sourceMappingURL=hotel-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HotelDetailComponent, { className: "HotelDetailComponent", filePath: "src\\app\\features\\hotels\\hotel-detail\\hotel-detail.component.ts", lineNumber: 15 });
})();
export {
  HotelDetailComponent
};
//# sourceMappingURL=hotel-detail.component-EFSLQCOW.js.map
