import {
  ToastService
} from "./chunk-6ZHTHB22.js";
import {
  BookingsService
} from "./chunk-ULEBUOV3.js";
import {
  PaginationComponent
} from "./chunk-O6M5ILUN.js";
import "./chunk-ZHODDKXD.js";
import {
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/booking/my-bookings/my-bookings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MyBookingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementEnd();
  }
}
function MyBookingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6);
    \u0275\u0275text(2, "\u2708");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No bookings yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Start exploring destinations and book your first stay");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275text(8, "Explore Now");
    \u0275\u0275elementEnd()();
  }
}
function MyBookingsComponent_Conditional_11_For_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 33);
    \u0275\u0275text(2, "Special requests:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const booking_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(booking_r2.special_requests);
  }
}
function MyBookingsComponent_Conditional_11_For_2_Conditional_52_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cancelling... ");
  }
}
function MyBookingsComponent_Conditional_11_For_2_Conditional_52_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cancel Booking ");
  }
}
function MyBookingsComponent_Conditional_11_For_2_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function MyBookingsComponent_Conditional_11_For_2_Conditional_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const booking_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancel(booking_r2.id));
    });
    \u0275\u0275template(1, MyBookingsComponent_Conditional_11_For_2_Conditional_52_Conditional_1_Template, 1, 0)(2, MyBookingsComponent_Conditional_11_For_2_Conditional_52_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r3.cancellingId() === booking_r2.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.cancellingId() === booking_r2.id ? 1 : 2);
  }
}
function MyBookingsComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11)(2, "div", 12)(3, "span", 13);
    \u0275\u0275text(4, "Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "div", 16)(11, "div", 17)(12, "span", 18);
    \u0275\u0275text(13, "Check-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 19);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 20)(18, "div", 21);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 17)(22, "span", 18);
    \u0275\u0275text(23, "Check-out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 19);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 23)(28, "div", 24)(29, "span", 25);
    \u0275\u0275text(30, "Guests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 26);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 24)(34, "span", 25);
    \u0275\u0275text(35, "Hotel ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 26);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 24)(39, "span", 25);
    \u0275\u0275text(40, "Booked on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 26);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(44, MyBookingsComponent_Conditional_11_For_2_Conditional_44_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(45, "div", 28)(46, "div", 29)(47, "span", 30);
    \u0275\u0275text(48, "Total paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 31);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(52, MyBookingsComponent_Conditional_11_For_2_Conditional_52_Template, 3, 2, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const booking_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", booking_r2.id, "");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r3.statusClass(booking_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(booking_r2.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 13, booking_r2.check_in, "EEE, MMM d, y"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.nightsBetween(booking_r2.check_in, booking_r2.check_out), " nights");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 16, booking_r2.check_out, "EEE, MMM d, y"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(booking_r2.guests);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("#", booking_r2.hotel_id, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 19, booking_r2.created_at, "MMM d, y"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(booking_r2.special_requests ? 44 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(51, 22, booking_r2.total_price, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.canCancel(booking_r2.status) ? 52 : -1);
  }
}
function MyBookingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, MyBookingsComponent_Conditional_11_For_2_Template, 53, 25, "div", 9, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-pagination", 10);
    \u0275\u0275listener("pageChange", function MyBookingsComponent_Conditional_11_Template_app_pagination_pageChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.bookings());
    \u0275\u0275advance(2);
    \u0275\u0275property("currentPage", ctx_r3.currentPage())("totalPages", ctx_r3.totalPages());
  }
}
var MyBookingsComponent = class _MyBookingsComponent {
  constructor(bookingSvc, toast) {
    this.bookingSvc = bookingSvc;
    this.toast = toast;
    this.bookings = signal([]);
    this.loading = signal(true);
    this.totalPages = signal(1);
    this.currentPage = signal(1);
    this.cancellingId = signal(null);
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.bookingSvc.myBookings({ page: this.currentPage(), size: 10 }).subscribe({
      next: (res) => {
        this.bookings.set(res.items);
        this.totalPages.set(res.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onPage(p) {
    this.currentPage.set(p);
    this.load();
  }
  cancel(id) {
    if (!confirm("Are you sure you want to cancel this booking?"))
      return;
    this.cancellingId.set(id);
    this.bookingSvc.cancel(id).subscribe({
      next: () => {
        this.toast.success("Booking cancelled successfully.");
        this.cancellingId.set(null);
        this.load();
      },
      error: (err) => {
        this.toast.error(err.message);
        this.cancellingId.set(null);
      }
    });
  }
  canCancel(status) {
    return status === "pending" || status === "confirmed";
  }
  nightsBetween(ci, co) {
    return Math.ceil((new Date(co).getTime() - new Date(ci).getTime()) / 864e5);
  }
  statusClass(status) {
    return `badge-${status}`;
  }
  static {
    this.\u0275fac = function MyBookingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyBookingsComponent)(\u0275\u0275directiveInject(BookingsService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyBookingsComponent, selectors: [["app-my-bookings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [[1, "my-bookings-page", "fade-in"], [1, "page-header"], ["routerLink", "/hotels", 1, "btn", "btn-primary"], [1, "page-loading"], [1, "empty-state"], [1, "loading-spinner"], [1, "empty-icon"], ["routerLink", "/destinations", 1, "btn", "btn-primary", 2, "margin-top", "1.5rem"], [1, "bookings-list"], [1, "booking-card", "card"], [3, "pageChange", "currentPage", "totalPages"], [1, "booking-top"], [1, "booking-id-wrap"], [1, "booking-label"], [1, "booking-num"], [1, "booking-body"], [1, "booking-dates"], [1, "date-block"], [1, "date-label"], [1, "date-value"], [1, "date-divider"], [1, "nights-badge"], [1, "date-line"], [1, "booking-meta"], [1, "meta-item"], [1, "meta-label"], [1, "meta-value"], [1, "special-requests"], [1, "booking-footer"], [1, "total-price"], [1, "price-label"], [1, "price-value"], [1, "btn", "btn-danger", "btn-sm", 3, "disabled"], [1, "sr-label"], [1, "sr-text"], [1, "btn", "btn-danger", "btn-sm", 3, "click", "disabled"]], template: function MyBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "My Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Your complete travel history");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 2);
        \u0275\u0275text(8, "Book a Stay");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, MyBookingsComponent_Conditional_9_Template, 2, 0, "div", 3)(10, MyBookingsComponent_Conditional_10_Template, 9, 0, "div", 4)(11, MyBookingsComponent_Conditional_11_Template, 4, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading() ? 9 : ctx.bookings().length === 0 ? 10 : 11);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterLink, PaginationComponent], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.my-bookings-page[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.bookings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.booking-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.booking-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.booking-id-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n.booking-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.booking-num[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.booking-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.booking-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .booking-dates[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.date-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.date-block[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.date-block[_ngcontent-%COMP%]   .date-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.date-divider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1;\n  gap: 0.25rem;\n  min-width: 80px;\n}\n@media (max-width: 640px) {\n  .date-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nights-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 2px 0.75rem;\n  background: var(--gold-glow);\n  border: 1px solid var(--border-subtle);\n  border-radius: 9999px;\n  color: #c9a84c;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.date-line[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background: var(--border-subtle);\n}\n.booking-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.meta-item[_ngcontent-%COMP%]   .meta-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.meta-item[_ngcontent-%COMP%]   .meta-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.special-requests[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  display: flex;\n  gap: 0.5rem;\n}\n.special-requests[_ngcontent-%COMP%]   .sr-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.special-requests[_ngcontent-%COMP%]   .sr-text[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.booking-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-subtle);\n  margin-top: 1rem;\n}\n.total-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.total-price[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.total-price[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #c9a84c;\n}\n/*# sourceMappingURL=my-bookings.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyBookingsComponent, { className: "MyBookingsComponent", filePath: "src\\app\\features\\booking\\my-bookings\\my-bookings.component.ts", lineNumber: 16 });
})();
export {
  MyBookingsComponent
};
//# sourceMappingURL=my-bookings.component-XE2HVAKC.js.map
