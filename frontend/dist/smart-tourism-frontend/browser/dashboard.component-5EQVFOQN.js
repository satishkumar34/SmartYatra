import {
  AdminService
} from "./chunk-CKSUMIHG.js";
import {
  BookingsService
} from "./chunk-ULEBUOV3.js";
import {
  AuthService
} from "./chunk-XHBJMX36.js";
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
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
var _c1 = () => ["/bookings"];
function DashboardComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
  }
  if (rf & 2) {
    let tmp_18_0;
    const flake_r1 = ctx.$implicit;
    \u0275\u0275styleProp("left", flake_r1.left, "%")("top", flake_r1.top, "%")("width", flake_r1.size, "px")("height", flake_r1.size, "px")("opacity", flake_r1.opacity)("animation-duration", flake_r1.duration, "s")("animation-delay", flake_r1.delay, "s")("--drift", flake_r1.drift + "px")("filter", "blur(" + ((tmp_18_0 = flake_r1.blur) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 0) + "px)");
  }
}
function DashboardComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
  if (rf & 2) {
    let tmp_18_0;
    const leaf_r2 = ctx.$implicit;
    \u0275\u0275styleProp("left", leaf_r2.left, "%")("top", leaf_r2.top, "%")("width", leaf_r2.size, "px")("height", leaf_r2.size * 0.58, "px")("opacity", leaf_r2.opacity)("animation-duration", leaf_r2.duration, "s")("animation-delay", leaf_r2.delay, "s")("--drift", leaf_r2.drift + "px")("--rotation", ((tmp_18_0 = leaf_r2.rotation) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : 0) + "deg");
  }
}
function DashboardComponent_Conditional_40_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 36)(2, "div", 37);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_40_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_40_Conditional_0_For_2_Template, 3, 0, "div", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DashboardComponent_Conditional_40_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("stat-card stat-card--", card_r3.color, "");
    \u0275\u0275property("routerLink", card_r3.route);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r3.value);
  }
}
function DashboardComponent_Conditional_40_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_40_Conditional_1_For_2_Template, 8, 7, "div", 38, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.statCards());
  }
}
function DashboardComponent_Conditional_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3", 28);
    \u0275\u0275text(2, "Booking status overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "div", 45)(5, "div", 46)(6, "span");
    \u0275\u0275text(7, "Confirmed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 47);
    \u0275\u0275element(11, "div", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 45)(13, "div", 46)(14, "span");
    \u0275\u0275text(15, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 47);
    \u0275\u0275element(19, "div", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 45)(21, "div", 46)(22, "span");
    \u0275\u0275text(23, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 12);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 47);
    \u0275\u0275element(27, "div", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r3.stats().confirmed_bookings);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.stats().total_bookings ? ctx_r3.stats().confirmed_bookings / ctx_r3.stats().total_bookings * 100 : 0, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.stats().pending_bookings);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.stats().total_bookings ? ctx_r3.stats().pending_bookings / ctx_r3.stats().total_bookings * 100 : 0, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.stats().cancelled_bookings);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.stats().total_bookings ? ctx_r3.stats().cancelled_bookings / ctx_r3.stats().total_bookings * 100 : 0, "%");
  }
}
function DashboardComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_Conditional_40_Conditional_0_Template, 3, 1, "div", 26)(1, DashboardComponent_Conditional_40_Conditional_1_Template, 3, 0, "div", 26)(2, DashboardComponent_Conditional_40_Conditional_2_Template, 28, 9, "div", 27);
    \u0275\u0275elementStart(3, "div", 22)(4, "h3", 28);
    \u0275\u0275text(5, "Quick actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29)(7, "a", 30)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Add destination");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "a", 32)(13, "span", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Add hotel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 33)(18, "span", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Manage bookings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "a", 34)(23, "span", 31);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "View users");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.loading() ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.stats() ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate("P");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate("H");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate("B");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate("U");
  }
}
function DashboardComponent_Conditional_41_Conditional_29_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 64)(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 66);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 67)(9, "span", 68);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", booking_r5.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 8, booking_r5.check_in, "MMM d"), " - ", \u0275\u0275pipeBind2(7, 11, booking_r5.check_out, "MMM d, y"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Rs ", \u0275\u0275pipeBind2(11, 14, booking_r5.total_price, "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.statusClass(booking_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(booking_r5.status);
  }
}
function DashboardComponent_Conditional_41_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59)(1, "h3", 28);
    \u0275\u0275text(2, "Recent bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 61);
    \u0275\u0275repeaterCreate(4, DashboardComponent_Conditional_41_Conditional_29_For_5_Template, 14, 18, "div", 62, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 63);
    \u0275\u0275text(7, "View all bookings ->");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.recentBookings());
  }
}
function DashboardComponent_Conditional_41_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 69);
    \u0275\u0275text(2, "T");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No trips yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Book your first adventure to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 70);
    \u0275\u0275text(8, "Explore Now");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 51)(2, "h3", 28);
    \u0275\u0275text(3, "Start your journey");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 52)(5, "a", 53)(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div")(9, "div", 55);
    \u0275\u0275text(10, "Browse Destinations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 56);
    \u0275\u0275text(12, "Discover amazing places");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "a", 57)(14, "span", 54);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div")(17, "div", 55);
    \u0275\u0275text(18, "Find Hotels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 56);
    \u0275\u0275text(20, "Best stays at best prices");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "a", 58)(22, "span", 54);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div")(25, "div", 55);
    \u0275\u0275text(26, "My Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 56);
    \u0275\u0275text(28, "View all your trips");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(29, DashboardComponent_Conditional_41_Conditional_29_Template, 8, 0, "div", 59)(30, DashboardComponent_Conditional_41_Conditional_30_Template, 9, 0, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate("P");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate("H");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate("B");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.recentBookings().length > 0 ? 29 : !ctx_r3.loading() ? 30 : -1);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor(adminSvc, bookingSvc, auth) {
    this.adminSvc = adminSvc;
    this.bookingSvc = bookingSvc;
    this.auth = auth;
    this.heroBackground = `
    linear-gradient(115deg, rgba(7, 10, 20, 0.82) 10%, rgba(10, 17, 34, 0.56) 42%, rgba(242, 175, 76, 0.2) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
    url('assets/dashboard-hero.jpg') center 58% / cover no-repeat
  `;
    this.snowflakes = [
      { left: 3, top: 4, size: 14, duration: 24, delay: -8, opacity: 0.72, drift: 28, blur: 0 },
      { left: 7, top: 26, size: 18, duration: 29, delay: -15, opacity: 0.8, drift: 34, blur: 0.15 },
      { left: 12, top: 12, size: 12, duration: 21, delay: -4, opacity: 0.66, drift: 22, blur: 0.25 },
      { left: 18, top: 38, size: 16, duration: 30, delay: -11, opacity: 0.76, drift: 38, blur: 0.1 },
      { left: 27, top: 18, size: 13, duration: 23, delay: -7, opacity: 0.68, drift: 24, blur: 0.2 },
      { left: 36, top: 46, size: 20, duration: 32, delay: -18, opacity: 0.82, drift: 42, blur: 0 },
      { left: 45, top: 28, size: 15, duration: 27, delay: -10, opacity: 0.74, drift: 30, blur: 0.1 },
      { left: 57, top: 54, size: 18, duration: 31, delay: -14, opacity: 0.78, drift: 40, blur: 0.12 },
      { left: 69, top: 22, size: 14, duration: 25, delay: -6, opacity: 0.7, drift: 28, blur: 0.18 },
      { left: 81, top: 42, size: 19, duration: 33, delay: -16, opacity: 0.82, drift: 44, blur: 0 },
      { left: 92, top: 14, size: 15, duration: 26, delay: -9, opacity: 0.72, drift: 32, blur: 0.2 },
      { left: 96, top: 58, size: 17, duration: 30, delay: -13, opacity: 0.76, drift: 36, blur: 0.1 }
    ];
    this.leaves = [
      { left: 5, top: 18, size: 24, duration: 26, delay: -9, opacity: 0.52, drift: 54, rotation: -18 },
      { left: 14, top: 56, size: 20, duration: 22, delay: -4, opacity: 0.44, drift: 44, rotation: 20 },
      { left: 29, top: 34, size: 22, duration: 30, delay: -15, opacity: 0.48, drift: 58, rotation: -24 },
      { left: 47, top: 62, size: 18, duration: 24, delay: -8, opacity: 0.4, drift: 40, rotation: 16 },
      { left: 64, top: 26, size: 26, duration: 33, delay: -18, opacity: 0.5, drift: 62, rotation: -20 },
      { left: 78, top: 52, size: 21, duration: 27, delay: -10, opacity: 0.42, drift: 46, rotation: 14 },
      { left: 91, top: 36, size: 24, duration: 31, delay: -13, opacity: 0.46, drift: 56, rotation: 22 }
    ];
    this.stats = signal(null);
    this.recentBookings = signal([]);
    this.loading = signal(true);
    this.isAdmin = this.auth.isAdmin;
    this.currentUser = this.auth.currentUser;
    this.firstName = computed(() => {
      const fullName = this.currentUser()?.full_name;
      return fullName ? fullName.split(" ")[0] : "";
    });
    this.statCards = computed(() => {
      const s = this.stats();
      if (!s)
        return [];
      return [
        { label: "Total Users", value: s.total_users, icon: "\u{1F465}", color: "blue", route: "/admin/users" },
        { label: "Destinations", value: s.total_places, icon: "\u{1F30D}", color: "gold", route: "/destinations" },
        { label: "Hotels", value: s.total_hotels, icon: "\u{1F3E8}", color: "purple", route: "/hotels" },
        { label: "Total Bookings", value: s.total_bookings, icon: "\u{1F4CB}", color: "teal", route: "/admin/bookings" },
        { label: "Total Revenue", value: "\u20B9" + s.total_revenue.toLocaleString("en-IN"), icon: "\u{1F4B0}", color: "success" },
        { label: "Pending", value: s.pending_bookings, icon: "\u23F3", color: "warning" },
        { label: "Confirmed", value: s.confirmed_bookings, icon: "\u2713", color: "success" },
        { label: "Cancelled", value: s.cancelled_bookings, icon: "\u2715", color: "danger" }
      ];
    });
  }
  ngOnInit() {
    if (this.isAdmin()) {
      this.adminSvc.getDashboardStats().subscribe({
        next: (s) => {
          this.stats.set(s);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
      this.adminSvc.listUsers({ size: 5 }).subscribe();
    } else {
      this.bookingSvc.myBookings({ size: 5 }).subscribe({
        next: (res) => {
          this.recentBookings.set(res.items);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
  statusClass(status) {
    const map = {
      pending: "badge-pending",
      confirmed: "badge-confirmed",
      cancelled: "badge-cancelled",
      completed: "badge-completed"
    };
    return map[status] ?? "";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(BookingsService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 6, consts: [[1, "dashboard", "fade-in"], ["aria-hidden", "true", 1, "dashboard-atmosphere"], [1, "mist-layer", "mist-layer--one"], [1, "mist-layer", "mist-layer--two"], [1, "snowflake", 3, "left", "top", "width", "height", "opacity", "animationDuration", "animationDelay", "--drift", "filter"], [1, "leaf-particle", 3, "left", "top", "width", "height", "opacity", "animationDuration", "animationDelay", "--drift", "--rotation"], [1, "dashboard-shell"], [1, "dashboard-hero"], [1, "dashboard-hero__content"], [1, "dashboard-header"], [1, "hero-kicker"], [1, "welcome-title"], [1, "text-gold"], [1, "welcome-sub"], [1, "header-actions"], ["routerLink", "/destinations", 1, "btn", "btn-primary"], [1, "hero-highlights"], [1, "hero-pill"], [1, "hero-glass-panel"], [1, "hero-glass-copy"], [1, "hero-glass-label"], [1, "dashboard-body"], [1, "quick-actions", "card"], [1, "user-panels"], [1, "snowflake"], [1, "leaf-particle"], [1, "stats-grid"], [1, "status-overview", "card"], [1, "section-title"], [1, "actions-grid"], ["routerLink", "/admin/places", 1, "action-item"], [1, "action-icon"], ["routerLink", "/admin/hotels", 1, "action-item"], ["routerLink", "/admin/bookings", 1, "action-item"], ["routerLink", "/admin/users", 1, "action-item"], [1, "stat-card", "skeleton-card"], [1, "skeleton-line", "short", 2, "height", "16px", "margin-bottom", "12px", "width", "40%"], [1, "skeleton-line", "wide", 2, "height", "28px", "width", "60%"], [3, "class", "routerLink"], [3, "routerLink"], [1, "stat-top"], [1, "stat-icon"], [1, "stat-label"], [1, "stat-value"], [1, "status-bars"], [1, "status-bar-item"], [1, "status-bar-label"], [1, "bar-track"], [1, "bar-fill", "bar-confirmed"], [1, "bar-fill", "bar-pending"], [1, "bar-fill", "bar-cancelled"], [1, "panel", "card"], [1, "explore-options"], ["routerLink", "/destinations", 1, "explore-card"], [1, "explore-icon"], [1, "explore-title"], [1, "explore-sub"], ["routerLink", "/hotels", 1, "explore-card"], ["routerLink", "/bookings", 1, "explore-card"], [1, "card"], [1, "empty-state"], [1, "bookings-list"], [1, "booking-row", 3, "routerLink"], ["routerLink", "/bookings", 1, "view-all-link"], [1, "booking-info"], [1, "booking-id"], [1, "booking-dates"], [1, "booking-right"], [1, "booking-price"], [1, "empty-icon"], ["routerLink", "/destinations", 1, "btn", "btn-primary", 2, "margin-top", "1rem"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3);
        \u0275\u0275repeaterCreate(4, DashboardComponent_For_5_Template, 1, 18, "span", 4, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275repeaterCreate(6, DashboardComponent_For_7_Template, 1, 18, "span", 5, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "section", 7)(10, "div", 8)(11, "div", 9)(12, "div")(13, "span", 10);
        \u0275\u0275text(14, "Smart Tourism Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "h2", 11);
        \u0275\u0275text(16, " Good day, ");
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "p", 13);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "a", 15);
        \u0275\u0275text(23, " Explore Destinations ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 16)(25, "div", 17);
        \u0275\u0275text(26, "Scenic mountain journeys");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 17);
        \u0275\u0275text(28, "Premium stays and routes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17);
        \u0275\u0275text(30, "Built for modern travel planning");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 18)(32, "div", 19)(33, "span", 20);
        \u0275\u0275text(34, "Featured vibe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "h3");
        \u0275\u0275text(36, "Bring the destination into the dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, " A cinematic travel background, sunrise glow, and clean overlays make the space feel more like a tourism product and less like a plain dashboard. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 21);
        \u0275\u0275template(40, DashboardComponent_Conditional_40_Template, 27, 6, "div", 22)(41, DashboardComponent_Conditional_41_Template, 31, 4, "div", 23);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.snowflakes);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.leaves);
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("background", ctx.heroBackground);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.firstName());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isAdmin() ? "Here's what's happening on the platform today." : "Track your journeys and upcoming adventures.", " ");
        \u0275\u0275advance(20);
        \u0275\u0275conditional(ctx.isAdmin() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isAdmin() ? 41 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterLink], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.dashboard[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: clip;\n  padding: 0.5rem 0 2.5rem;\n  background:\n    radial-gradient(\n      circle at 12% 8%,\n      rgba(180, 205, 230, 0.56),\n      transparent 28%),\n    radial-gradient(\n      circle at 86% 12%,\n      rgba(235, 214, 177, 0.34),\n      transparent 24%),\n    radial-gradient(\n      circle at 48% 100%,\n      rgba(182, 207, 228, 0.18),\n      transparent 28%),\n    linear-gradient(\n      180deg,\n      #f6fbff 0%,\n      #edf4fa 36%,\n      #e5eef7 68%,\n      #f7fbff 100%);\n}\n.dashboard-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.dashboard-shell[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.dashboard-atmosphere[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 0;\n  opacity: 1;\n}\n.mist-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto auto 16% auto;\n  width: 42rem;\n  height: 14rem;\n  border-radius: 50%;\n  filter: blur(44px);\n  opacity: 0.38;\n  background:\n    radial-gradient(\n      circle,\n      rgba(236, 246, 255, 0.82),\n      rgba(191, 208, 224, 0.22) 58%,\n      transparent 72%);\n  animation: _ngcontent-%COMP%_mist-float 24s ease-in-out infinite;\n}\n.mist-layer--one[_ngcontent-%COMP%] {\n  left: -8%;\n  bottom: 26%;\n}\n.mist-layer--two[_ngcontent-%COMP%] {\n  right: -10%;\n  bottom: 10%;\n  width: 36rem;\n  height: 12rem;\n  opacity: 0.24;\n  animation-duration: 29s;\n  animation-delay: -9s;\n}\n.snowflake[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at center,\n      rgba(255, 255, 255, 0.98) 0 15%,\n      transparent 18%),\n    linear-gradient(\n      0deg,\n      transparent 44%,\n      rgba(255, 255, 255, 0.95) 46%,\n      rgba(201, 221, 241, 0.96) 54%,\n      transparent 56%),\n    linear-gradient(\n      90deg,\n      transparent 44%,\n      rgba(255, 255, 255, 0.95) 46%,\n      rgba(201, 221, 241, 0.96) 54%,\n      transparent 56%),\n    linear-gradient(\n      45deg,\n      transparent 46%,\n      rgba(248, 252, 255, 0.92) 48%,\n      rgba(196, 219, 241, 0.96) 52%,\n      transparent 54%),\n    linear-gradient(\n      -45deg,\n      transparent 46%,\n      rgba(248, 252, 255, 0.92) 48%,\n      rgba(196, 219, 241, 0.96) 52%,\n      transparent 54%);\n  box-shadow: 0 0 14px rgba(175, 203, 229, 0.34), inset 0 0 5px rgba(255, 255, 255, 0.65);\n  animation: _ngcontent-%COMP%_snow-drift linear infinite;\n}\n.leaf-particle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 18% 82% 24% 76%/22% 78% 24% 76%;\n  background:\n    radial-gradient(\n      circle at 24% 20%,\n      rgba(231, 247, 213, 0.58),\n      transparent 24%),\n    linear-gradient(\n      140deg,\n      rgba(142, 181, 98, 0.98),\n      rgba(84, 134, 62, 0.95) 54%,\n      rgba(44, 88, 41, 0.9));\n  box-shadow:\n    0 10px 18px rgba(63, 97, 50, 0.12),\n    inset -3px -3px 8px rgba(38, 76, 33, 0.22),\n    inset 3px 3px 7px rgba(229, 245, 205, 0.32);\n  animation: _ngcontent-%COMP%_leaf-glide linear infinite;\n}\n.leaf-particle[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 10%;\n  bottom: 10%;\n  left: 48%;\n  width: 2px;\n  border-radius: 999px;\n  background: rgba(236, 246, 220, 0.72);\n}\n.leaf-particle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 20% 22% 28% 18%;\n  border-radius: 100% 0 100% 0/100% 0 100% 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.18),\n      transparent 68%);\n  transform: rotate(-8deg);\n}\n.dashboard-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 25rem;\n  border-radius: 24px;\n  padding: clamp(1.5rem, 3vw, 2.5rem);\n  margin-bottom: 2rem;\n  border: 1px solid rgba(113, 101, 74, 0.16);\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);\n  isolation: isolate;\n}\n.dashboard-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 84% 18%,\n      rgba(255, 216, 143, 0.35),\n      transparent 24%),\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      rgba(6, 12, 24, 0.26) 100%);\n  pointer-events: none;\n}\n.dashboard-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: auto 1.25rem 1.25rem auto;\n  width: min(18rem, 36vw);\n  height: min(18rem, 36vw);\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 215, 128, 0.2),\n      transparent 68%);\n  filter: blur(6px);\n  pointer-events: none;\n}\n.dashboard-hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.dashboard-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n@keyframes _ngcontent-%COMP%_snow-drift {\n  0% {\n    transform: translate3d(0, -2rem, 0) rotate(0deg) scale(0.86);\n  }\n  25% {\n    transform: translate3d(calc(var(--drift) * 0.35), 22vh, 0) rotate(12deg) scale(1);\n  }\n  50% {\n    transform: translate3d(calc(var(--drift) * -0.2), 48vh, 0) rotate(-10deg) scale(0.95);\n  }\n  75% {\n    transform: translate3d(calc(var(--drift) * 0.55), 74vh, 0) rotate(16deg) scale(1);\n  }\n  100% {\n    transform: translate3d(calc(var(--drift) * -0.1), 112vh, 0) rotate(-8deg) scale(0.8);\n  }\n}\n@keyframes _ngcontent-%COMP%_leaf-glide {\n  0% {\n    transform: translate3d(0, -2rem, 0) rotate(var(--rotation)) scale(0.96);\n  }\n  25% {\n    transform: translate3d(calc(var(--drift) * 0.55), 18vh, 0) rotate(calc(var(--rotation) + 24deg)) scale(1);\n  }\n  50% {\n    transform: translate3d(calc(var(--drift) * -0.2), 38vh, 0) rotate(calc(var(--rotation) - 10deg)) scale(0.98);\n  }\n  75% {\n    transform: translate3d(calc(var(--drift) * 0.72), 66vh, 0) rotate(calc(var(--rotation) + 36deg)) scale(1.02);\n  }\n  100% {\n    transform: translate3d(calc(var(--drift) * -0.15), 108vh, 0) rotate(calc(var(--rotation) + 52deg)) scale(0.94);\n  }\n}\n@keyframes _ngcontent-%COMP%_mist-float {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(2.25rem, -1rem, 0) scale(1.06);\n  }\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.dashboard-header[_ngcontent-%COMP%]   .hero-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.45rem 0.85rem;\n  margin-bottom: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 9999px;\n  background: rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(14px);\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: rgba(255, 248, 232, 0.88);\n}\n.dashboard-header[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 3.4rem);\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  max-width: 12ch;\n  color: #fff8ed;\n  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.24);\n}\n@media (max-width: 640px) {\n  .dashboard-header[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.dashboard-header[_ngcontent-%COMP%]   .welcome-sub[_ngcontent-%COMP%] {\n  max-width: 40rem;\n  color: rgba(247, 239, 224, 0.84);\n  font-size: 1rem;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.hero-highlights[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.hero-pill[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 9999px;\n  background: rgba(9, 20, 38, 0.44);\n  backdrop-filter: blur(14px);\n  color: rgba(255, 249, 236, 0.92);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.hero-glass-panel[_ngcontent-%COMP%] {\n  width: min(30rem, 100%);\n  margin-top: 0.5rem;\n  padding: 1.1rem 1.25rem;\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(7, 16, 32, 0.48),\n      rgba(10, 18, 34, 0.68));\n  backdrop-filter: blur(16px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n.hero-glass-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.45rem;\n  color: #fff8ed;\n  font-size: 1.2rem;\n}\n.hero-glass-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(247, 239, 224, 0.8);\n  font-size: 0.875rem;\n  line-height: 1.7;\n}\n.hero-glass-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.45rem;\n  color: rgba(255, 221, 161, 0.92);\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: 16px;\n  padding: 1.25rem;\n  box-shadow: var(--shadow-card);\n  transition: border-color 250ms ease, box-shadow 250ms ease;\n  cursor: pointer;\n  transition: all 250ms ease;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 244, 0.98),\n      rgba(247, 240, 228, 0.98));\n  box-shadow: 0 14px 30px rgba(140, 120, 78, 0.08);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-medium);\n  box-shadow: var(--shadow-card), var(--shadow-gold);\n}\n.stat-card[_ngcontent-%COMP%]   .stat-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.stat-card[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.stat-card--gold[_ngcontent-%COMP%] {\n  border-top: 2px solid #c9a84c;\n}\n.stat-card--blue[_ngcontent-%COMP%] {\n  border-top: 2px solid #3498db;\n}\n.stat-card--purple[_ngcontent-%COMP%] {\n  border-top: 2px solid #9b59b6;\n}\n.stat-card--teal[_ngcontent-%COMP%] {\n  border-top: 2px solid #1abc9c;\n}\n.stat-card--success[_ngcontent-%COMP%] {\n  border-top: 2px solid #2ecc71;\n}\n.stat-card--warning[_ngcontent-%COMP%] {\n  border-top: 2px solid #f39c12;\n}\n.stat-card--danger[_ngcontent-%COMP%] {\n  border-top: 2px solid #e74c3c;\n}\n.stat-card.skeleton-card[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.stat-card.skeleton-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-subtle);\n  box-shadow: var(--shadow-card);\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.status-overview[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.dashboard-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 251, 244, 0.98),\n      rgba(248, 241, 230, 0.98));\n  border: 1px solid rgba(176, 151, 95, 0.14);\n  box-shadow: 0 18px 38px rgba(146, 126, 86, 0.08);\n}\n.status-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.status-bar-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin-bottom: 0.5rem;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--dark-700);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 9999px;\n  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);\n  min-width: 4px;\n}\n.bar-fill.bar-confirmed[_ngcontent-%COMP%] {\n  background: #2ecc71;\n}\n.bar-fill.bar-pending[_ngcontent-%COMP%] {\n  background: #c9a84c;\n}\n.bar-fill.bar-cancelled[_ngcontent-%COMP%] {\n  background: #e74c3c;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 768px) {\n  .actions-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.action-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: rgba(255, 250, 241, 0.98);\n  border: 1px solid rgba(176, 151, 95, 0.16);\n  border-radius: 12px;\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 150ms ease;\n}\n.action-item[_ngcontent-%COMP%]:hover {\n  border-color: #c9a84c;\n  color: #c9a84c;\n  background: rgba(242, 232, 209, 0.96);\n}\n.action-item[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.user-panels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.explore-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.explore-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  background: rgba(255, 250, 241, 0.98);\n  border: 1px solid rgba(176, 151, 95, 0.16);\n  border-radius: 12px;\n  text-decoration: none;\n  transition: all 150ms ease;\n}\n.explore-card[_ngcontent-%COMP%]:hover {\n  border-color: #c9a84c;\n  background: rgba(242, 232, 209, 0.96);\n}\n.explore-card[_ngcontent-%COMP%]   .explore-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.explore-card[_ngcontent-%COMP%]   .explore-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.explore-card[_ngcontent-%COMP%]   .explore-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.bookings-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.booking-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 250, 241, 0.98);\n  border: 1px solid rgba(176, 151, 95, 0.16);\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 150ms ease;\n}\n.booking-row[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-medium);\n}\n.booking-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.booking-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.booking-dates[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.booking-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.booking-price[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #c9a84c;\n}\n.view-all-link[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #c9a84c;\n  font-weight: 500;\n}\n.view-all-link[_ngcontent-%COMP%]:hover {\n  color: #e0c070;\n}\n.empty-state[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  min-height: 20rem;\n}\n@media (max-width: 768px) {\n  .dashboard-hero[_ngcontent-%COMP%] {\n    min-height: 22rem;\n    background-position: center;\n  }\n  .dashboard[_ngcontent-%COMP%] {\n    padding-bottom: 2rem;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .hero-glass-panel[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 36 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-5EQVFOQN.js.map
