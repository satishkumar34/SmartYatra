import {
  ToastService
} from "./chunk-6ZHTHB22.js";
import {
  BookingsService
} from "./chunk-ULEBUOV3.js";
import {
  PaginationComponent
} from "./chunk-O6M5ILUN.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3YIVQX77.js";
import "./chunk-ZHODDKXD.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
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

// src/app/features/admin/admin-bookings/admin-bookings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminBookingsComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("value", s_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, s_r1));
  }
}
function AdminBookingsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function AdminBookingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No bookings found");
    \u0275\u0275elementEnd()();
  }
}
function AdminBookingsComponent_Conditional_15_For_24_Conditional_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275property("value", s_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2192 ", \u0275\u0275pipeBind1(2, 2, s_r6), "");
  }
}
function AdminBookingsComponent_Conditional_15_For_24_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 18);
    \u0275\u0275listener("change", function AdminBookingsComponent_Conditional_15_For_24_Conditional_23_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const booking_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.updateStatus(booking_r4, $event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, AdminBookingsComponent_Conditional_15_For_24_Conditional_23_For_5_Template, 3, 4, "option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", booking_r4.status)("disabled", ctx_r4.updatingId() === booking_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("value", booking_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, booking_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r4.allowedTransitions(booking_r4.status));
  }
}
function AdminBookingsComponent_Conditional_15_For_24_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminBookingsComponent_Conditional_15_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 14);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 15);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275template(23, AdminBookingsComponent_Conditional_15_For_24_Conditional_23_Template, 6, 6, "select", 16)(24, AdminBookingsComponent_Conditional_15_For_24_Conditional_24_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const booking_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", booking_r4.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("User #", booking_r4.user_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hotel #", booking_r4.hotel_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 12, booking_r4.check_in, "MMM d"), " \u2013 ", \u0275\u0275pipeBind2(10, 15, booking_r4.check_out, "MMM d, y"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.nightsBetween(booking_r4.check_in, booking_r4.check_out));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(booking_r4.guests);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(18, 18, booking_r4.total_price, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r4.statusClass(booking_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(booking_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.allowedTransitions(booking_r4.status).length > 0 ? 23 : 24);
  }
}
function AdminBookingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Hotel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Nights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Guests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275repeaterCreate(23, AdminBookingsComponent_Conditional_15_For_24_Template, 25, 21, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "app-pagination", 12);
    \u0275\u0275listener("pageChange", function AdminBookingsComponent_Conditional_15_Template_app_pagination_pageChange_25_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275repeater(ctx_r4.bookings());
    \u0275\u0275advance(2);
    \u0275\u0275property("currentPage", ctx_r4.currentPage())("totalPages", ctx_r4.totalPages());
  }
}
var AdminBookingsComponent = class _AdminBookingsComponent {
  constructor(bookingSvc, toast) {
    this.bookingSvc = bookingSvc;
    this.toast = toast;
    this.bookings = signal([]);
    this.loading = signal(true);
    this.totalPages = signal(1);
    this.currentPage = signal(1);
    this.filterStatus = "";
    this.updatingId = signal(null);
    this.statusOptions = ["pending", "confirmed", "cancelled", "completed"];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.bookingSvc.allBookings({
      page: this.currentPage(),
      size: 15,
      booking_status: this.filterStatus || void 0
    }).subscribe({
      next: (r) => {
        this.bookings.set(r.items);
        this.totalPages.set(r.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onFilter() {
    this.currentPage.set(1);
    this.load();
  }
  onPage(p) {
    this.currentPage.set(p);
    this.load();
  }
  updateStatus(booking, status) {
    if (status === booking.status)
      return;
    this.updatingId.set(booking.id);
    this.bookingSvc.updateStatus(booking.id, status).subscribe({
      next: (updated) => {
        this.bookings.update((list) => list.map((b) => b.id === updated.id ? updated : b));
        this.toast.success(`Booking #${booking.id} status updated to ${status}.`);
        this.updatingId.set(null);
      },
      error: (err) => {
        this.toast.error(err.message);
        this.updatingId.set(null);
      }
    });
  }
  statusClass(status) {
    return `badge-${status}`;
  }
  nightsBetween(ci, co) {
    return Math.ceil((new Date(co).getTime() - new Date(ci).getTime()) / 864e5);
  }
  allowedTransitions(status) {
    const map = {
      pending: ["confirmed", "cancelled"],
      confirmed: ["completed", "cancelled"],
      cancelled: [],
      completed: []
    };
    return map[status] ?? [];
  }
  static {
    this.\u0275fac = function AdminBookingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminBookingsComponent)(\u0275\u0275directiveInject(BookingsService), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBookingsComponent, selectors: [["app-admin-bookings"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 2, consts: [[1, "admin-page", "fade-in"], [1, "admin-header"], [1, "admin-search"], [1, "search-input", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], [1, "page-loading"], [1, "empty-state"], [1, "loading-spinner"], [1, "empty-icon"], [1, "data-table-wrap", "card"], [1, "data-table"], [3, "pageChange", "currentPage", "totalPages"], [1, "text-secondary"], [1, "text-secondary", 2, "white-space", "nowrap"], [1, "rating-cell"], [1, "status-select", 3, "value", "disabled"], [1, "text-muted", "text-xs"], [1, "status-select", 3, "change", "value", "disabled"]], template: function AdminBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "All Bookings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "View and manage every booking on the platform");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 2)(8, "select", 3);
        \u0275\u0275twoWayListener("ngModelChange", function AdminBookingsComponent_Template_select_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterStatus, $event) || (ctx.filterStatus = $event);
          return $event;
        });
        \u0275\u0275listener("change", function AdminBookingsComponent_Template_select_change_8_listener() {
          return ctx.onFilter();
        });
        \u0275\u0275elementStart(9, "option", 4);
        \u0275\u0275text(10, "All statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(11, AdminBookingsComponent_For_12_Template, 3, 4, "option", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, AdminBookingsComponent_Conditional_13_Template, 2, 0, "div", 6)(14, AdminBookingsComponent_Conditional_14_Template, 5, 0, "div", 7)(15, AdminBookingsComponent_Conditional_15_Template, 26, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterStatus);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.statusOptions);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 13 : ctx.bookings().length === 0 ? 14 : 15);
      }
    }, dependencies: [CommonModule, DecimalPipe, TitleCasePipe, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, PaginationComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.admin-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table-wrap[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle);\n  transition: background 150ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.table-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n}\n.table-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n  border: 1px solid var(--border-subtle);\n}\n.table-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.rating-cell[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 600;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--dark-850);\n  border: 1px solid var(--border-medium);\n  border-radius: 24px;\n  width: 100%;\n  max-width: 640px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-900);\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--dark-600);\n  border-radius: 9999px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b8932a;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.25rem;\n  border-radius: 4px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .modal-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-subtle);\n  margin-top: 0.5rem;\n}\n.admin-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  max-width: 320px;\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   .search-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  max-width: 200px;\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.admin-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.status-select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  width: auto;\n  min-width: 130px;\n}\n.status-select[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.status-select[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.status-select.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.admin-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  max-width: 320px;\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   .search-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  max-width: 200px;\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.data-table-wrap[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle);\n  transition: background 150ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.rating-cell[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 600;\n}\n/*# sourceMappingURL=admin-bookings.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBookingsComponent, { className: "AdminBookingsComponent", filePath: "src\\app\\features\\admin\\admin-bookings\\admin-bookings.component.ts", lineNumber: 16 });
})();
export {
  AdminBookingsComponent
};
//# sourceMappingURL=admin-bookings.component-OXHTQ36L.js.map
