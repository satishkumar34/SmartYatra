import {
  AdminService
} from "./chunk-CKSUMIHG.js";
import {
  BookingsService
} from "./chunk-ULEBUOV3.js";
import "./chunk-ZHODDKXD.js";
import {
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.route;
var _forTrack2 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("kpi-card kpi--", card_r1.accent, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.label);
  }
}
function AdminDashboardComponent_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "No bookings recorded yet");
    \u0275\u0275elementEnd();
  }
}
function AdminDashboardComponent_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "Confirmed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25);
    \u0275\u0275element(5, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 23)(11, "span", 24);
    \u0275\u0275text(12, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25);
    \u0275\u0275element(14, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 27);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 28);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23)(20, "span", 24);
    \u0275\u0275text(21, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25);
    \u0275\u0275element(23, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 27);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 28);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 31)(29, "div", 32)(30, "span", 33);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 34);
    \u0275\u0275text(33, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 32)(35, "span", 35);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 34);
    \u0275\u0275text(38, "Confirmed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 32)(40, "span", 36);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 34);
    \u0275\u0275text(43, "Pending");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 32)(45, "span", 37);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 34);
    \u0275\u0275text(48, "Cancelled");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.confirmedPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stats().confirmed_bookings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.confirmedPct(), "%");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.pendingPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stats().pending_bookings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.pendingPct(), "%");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r1.cancelledPct(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.stats().cancelled_bookings);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.cancelledPct(), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.stats().total_bookings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats().confirmed_bookings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats().pending_bookings);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.stats().cancelled_bookings);
  }
}
function AdminDashboardComponent_Conditional_13_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 40);
    \u0275\u0275text(6, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r3.label);
  }
}
function AdminDashboardComponent_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 41);
    \u0275\u0275text(2, "Total platform revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 43);
    \u0275\u0275text(7, "from confirmed bookings");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 1, ctx_r1.stats().total_revenue, "1.0-0"), "");
  }
}
function AdminDashboardComponent_Conditional_13_Conditional_16_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 51);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 52);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", b_r4.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("User #", b_r4.user_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Hotel #", b_r4.hotel_id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 10, b_r4.check_in, "MMM d, y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.nightsBetween(b_r4.check_in, b_r4.check_out));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.guests);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(16, 13, b_r4.total_price, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.statusClass(b_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.status);
  }
}
function AdminDashboardComponent_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 44)(2, "h3", 45);
    \u0275\u0275text(3, "Recent bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 46);
    \u0275\u0275text(5, "View all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 47)(7, "table", 48)(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Hotel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Check-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Nights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Guests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, AdminDashboardComponent_Conditional_13_Conditional_16_For_28_Template, 20, 16, "tr", null, _forTrack2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(27);
    \u0275\u0275repeater(ctx_r1.recent());
  }
}
function AdminDashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, AdminDashboardComponent_Conditional_13_For_2_Template, 8, 6, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "h3", 11);
    \u0275\u0275text(6, "Booking breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminDashboardComponent_Conditional_13_Conditional_7_Template, 2, 0, "div", 12)(8, AdminDashboardComponent_Conditional_13_Conditional_8_Template, 49, 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 13)(10, "h3", 11);
    \u0275\u0275text(11, "Quick navigation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 14);
    \u0275\u0275repeaterCreate(13, AdminDashboardComponent_Conditional_13_For_14_Template, 7, 3, "a", 15, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminDashboardComponent_Conditional_13_Conditional_15_Template, 8, 4, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, AdminDashboardComponent_Conditional_13_Conditional_16_Template, 29, 0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.kpiCards());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.stats().total_bookings === 0 ? 7 : 8);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.quickLinks);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.stats() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.recent().length > 0 ? 16 : -1);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(adminSvc, bookingSvc) {
    this.adminSvc = adminSvc;
    this.bookingSvc = bookingSvc;
    this.stats = signal(null);
    this.recent = signal([]);
    this.loading = signal(true);
    this.confirmedPct = computed(() => {
      const s = this.stats();
      if (!s || !s.total_bookings)
        return 0;
      return Math.round(s.confirmed_bookings / s.total_bookings * 100);
    });
    this.pendingPct = computed(() => {
      const s = this.stats();
      if (!s || !s.total_bookings)
        return 0;
      return Math.round(s.pending_bookings / s.total_bookings * 100);
    });
    this.cancelledPct = computed(() => {
      const s = this.stats();
      if (!s || !s.total_bookings)
        return 0;
      return Math.round(s.cancelled_bookings / s.total_bookings * 100);
    });
    this.kpiCards = computed(() => {
      const s = this.stats();
      if (!s)
        return [];
      return [
        { label: "Total Revenue", value: "\u20B9" + s.total_revenue.toLocaleString("en-IN"), icon: "\u{1F4B0}", accent: "gold" },
        { label: "Total Bookings", value: s.total_bookings, icon: "\u{1F4CB}", accent: "teal" },
        { label: "Registered Users", value: s.total_users, icon: "\u{1F465}", accent: "blue" },
        { label: "Destinations", value: s.total_places, icon: "\u{1F30D}", accent: "purple" },
        { label: "Hotels Listed", value: s.total_hotels, icon: "\u{1F3E8}", accent: "coral" },
        { label: "Pending Review", value: s.pending_bookings, icon: "\u23F3", accent: "warning" }
      ];
    });
    this.quickLinks = [
      { label: "Manage Destinations", route: "/admin/places", icon: "\u{1F4CD}" },
      { label: "Manage Hotels", route: "/admin/hotels", icon: "\u{1F3E8}" },
      { label: "All Bookings", route: "/admin/bookings", icon: "\u{1F4CB}" },
      { label: "User Accounts", route: "/admin/users", icon: "\u{1F465}" }
    ];
  }
  ngOnInit() {
    this.adminSvc.getDashboardStats().subscribe({
      next: (s) => {
        this.stats.set(s);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
    this.bookingSvc.allBookings({ page: 1, size: 8 }).subscribe({
      next: (r) => this.recent.set(r.items)
    });
  }
  statusClass(status) {
    return `badge-${status}`;
  }
  nightsBetween(ci, co) {
    return Math.ceil((new Date(co).getTime() - new Date(ci).getTime()) / 864e5);
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminDashboardComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(BookingsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 1, consts: [[1, "admin-dash", "fade-in"], [1, "dash-header"], [1, "dash-actions"], ["routerLink", "/admin/places", 1, "btn", "btn-secondary", "btn-sm"], ["routerLink", "/admin/hotels", 1, "btn", "btn-primary", "btn-sm"], [1, "page-loading"], [1, "loading-spinner"], [1, "kpi-grid"], [3, "class"], [1, "mid-row"], [1, "card", "status-card"], [1, "section-title"], [1, "no-data"], [1, "card", "quick-nav-card"], [1, "quick-links"], [1, "quick-link", 3, "routerLink"], [1, "revenue-highlight"], [1, "card", "recent-card"], [1, "kpi-icon"], [1, "kpi-body"], [1, "kpi-value"], [1, "kpi-label"], [1, "bar-chart"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill", "fill-confirmed"], [1, "bar-count"], [1, "bar-pct"], [1, "bar-fill", "fill-pending"], [1, "bar-fill", "fill-cancelled"], [1, "totals-strip"], [1, "total-item"], [1, "total-num", "text-gold"], [1, "total-lbl"], [1, "total-num", 2, "color", "var(--c-success, #2ecc71)"], [1, "total-num", 2, "color", "var(--c-warning, #f39c12)"], [1, "total-num", 2, "color", "var(--c-danger, #e74c3c)"], [1, "ql-icon"], [1, "ql-label"], [1, "ql-arrow"], [1, "rev-label"], [1, "rev-value"], [1, "rev-sub"], [1, "recent-header"], [1, "section-title", 2, "margin-bottom", "0"], ["routerLink", "/admin/bookings", 1, "view-all-link"], [1, "data-table-wrap"], [1, "data-table"], [1, "text-muted"], [1, "text-secondary"], [1, "text-secondary", 2, "white-space", "nowrap"], [1, "price-cell"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Admin Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Platform overview and real-time analytics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 2)(8, "a", 3);
        \u0275\u0275text(9, "+ Destination");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 4);
        \u0275\u0275text(11, "+ Hotel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, AdminDashboardComponent_Conditional_12_Template, 2, 0, "div", 5)(13, AdminDashboardComponent_Conditional_13_Template, 17, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.loading() ? 12 : 13);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterLink], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n[_nghost-%COMP%] {\n  --c-success: #2ecc71;\n  --c-warning: #f39c12;\n  --c-danger: #e74c3c;\n}\n.admin-dash[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.dash-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.dash-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.dash-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.dash-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n@media (max-width: 1200px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  padding: 1.25rem;\n  box-shadow: var(--shadow-card);\n  transition: border-color 250ms ease, box-shadow 250ms ease;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  cursor: default;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-medium);\n  box-shadow: var(--shadow-card), var(--shadow-gold);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  flex-shrink: 0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n}\n.kpi-card.kpi--gold[_ngcontent-%COMP%] {\n  border-top: 2px solid #c9a84c;\n}\n.kpi-card.kpi--teal[_ngcontent-%COMP%] {\n  border-top: 2px solid #1abc9c;\n}\n.kpi-card.kpi--blue[_ngcontent-%COMP%] {\n  border-top: 2px solid #3498db;\n}\n.kpi-card.kpi--purple[_ngcontent-%COMP%] {\n  border-top: 2px solid #9b59b6;\n}\n.kpi-card.kpi--coral[_ngcontent-%COMP%] {\n  border-top: 2px solid #e67e22;\n}\n.kpi-card.kpi--warning[_ngcontent-%COMP%] {\n  border-top: 2px solid #f39c12;\n}\n.mid-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .mid-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  width: 70px;\n  flex-shrink: 0;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--dark-700);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 9999px;\n  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 4px;\n}\n.bar-fill.fill-confirmed[_ngcontent-%COMP%] {\n  background: #2ecc71;\n}\n.bar-fill.fill-pending[_ngcontent-%COMP%] {\n  background: #c9a84c;\n}\n.bar-fill.fill-cancelled[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.bar-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  width: 28px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.bar-pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  width: 36px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.no-data[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  padding: 1rem 0;\n}\n.totals-strip[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1.5rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid var(--border-subtle);\n}\n.total-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.total-num[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.total-lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.quick-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.quick-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 12px;\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 150ms ease;\n}\n.quick-link[_ngcontent-%COMP%]:hover {\n  border-color: #c9a84c;\n  color: #c9a84c;\n  background: var(--gold-glow);\n}\n.quick-link[_ngcontent-%COMP%]   .ql-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.quick-link[_ngcontent-%COMP%]   .ql-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.quick-link[_ngcontent-%COMP%]   .ql-arrow[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  transition: transform 150ms ease;\n}\n.quick-link[_ngcontent-%COMP%]:hover   .ql-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n  color: #c9a84c;\n}\n.revenue-highlight[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  padding: 1rem;\n  background: var(--gold-glow);\n  border: 1px solid var(--border-medium);\n  border-radius: 12px;\n}\n.rev-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  flex-basis: 100%;\n}\n.rev-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #c9a84c;\n}\n.rev-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  align-self: flex-end;\n  padding-bottom: 4px;\n}\n.recent-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.recent-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.view-all-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #c9a84c;\n  font-weight: 500;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: #e0c070;\n}\n.data-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle);\n  transition: background 150ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.02);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  vertical-align: middle;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.price-cell[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 700;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src\\app\\features\\admin\\admin-dashboard\\admin-dashboard.component.ts", lineNumber: 15 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=admin-dashboard.component-LEQM4R7P.js.map
