import {
  ThemeService
} from "./chunk-7SYI734T.js";
import {
  AuthService
} from "./chunk-XHBJMX36.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  computed,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
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

// src/app/layout/shell/shell.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function ShellComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function ShellComponent_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementEnd();
  }
}
function ShellComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("click", function ShellComponent_For_17_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementStart(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r4.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.label, " ");
  }
}
function ShellComponent_Conditional_18_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275listener("click", function ShellComponent_Conditional_18_For_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeSidebar());
    });
    \u0275\u0275elementStart(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r6.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.label, " ");
  }
}
function ShellComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 11);
    \u0275\u0275text(2, "Administration");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ShellComponent_Conditional_18_For_4_Template, 4, 3, "a", 12, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.adminNavItems);
  }
}
function ShellComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Admin");
    \u0275\u0275elementEnd();
  }
}
var NAV_ITEMS = [
  { label: "Dashboard", route: "/dashboard", icon: "D" },
  { label: "Destinations", route: "/destinations", icon: "P" },
  { label: "Hotels", route: "/hotels", icon: "H" },
  { label: "My Bookings", route: "/bookings", icon: "B" },
  { label: "My Profile", route: "/profile", icon: "U" }
];
var ADMIN_NAV_ITEMS = [
  { label: "Admin Panel", route: "/admin", icon: "A", adminOnly: true },
  { label: "Manage Places", route: "/admin/places", icon: "P", adminOnly: true },
  { label: "Manage Hotels", route: "/admin/hotels", icon: "H", adminOnly: true },
  { label: "All Bookings", route: "/admin/bookings", icon: "B", adminOnly: true },
  { label: "Users", route: "/admin/users", icon: "U", adminOnly: true }
];
var ShellComponent = class _ShellComponent {
  constructor(auth, router, themeService) {
    this.auth = auth;
    this.router = router;
    this.themeService = themeService;
    this.sidebarOpen = signal(false);
    this.navItems = NAV_ITEMS;
    this.adminNavItems = ADMIN_NAV_ITEMS;
    this.currentUser = this.auth.currentUser;
    this.isAdmin = this.auth.isAdmin;
    this.isDarkTheme = this.themeService.isDark;
    this.avatarInitials = computed(() => {
      const name = this.currentUser()?.full_name ?? "";
      return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
    });
  }
  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }
  closeSidebar() {
    this.sidebarOpen.set(false);
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  logout() {
    this.auth.logout();
  }
  get pageTitle() {
    const url = this.router.url;
    if (url.includes("/dashboard"))
      return "Dashboard";
    if (url.includes("/destinations"))
      return "Destinations";
    if (url.includes("/hotels"))
      return "Hotels";
    if (url.includes("/bookings"))
      return "My Bookings";
    if (url.includes("/admin"))
      return "Admin Panel";
    return "Smart Tourism";
  }
  get themeToggleLabel() {
    return this.isDarkTheme() ? "Light mode" : "Dark mode";
  }
  static {
    this.\u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShellComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ThemeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 10, consts: [[1, "shell"], [1, "sidebar-overlay"], [1, "sidebar"], [1, "sidebar-logo"], ["routerLink", "/dashboard", 1, "logo-mark", 3, "click"], [1, "logo-icon"], [1, "logo-text"], [1, "name"], [1, "tagline"], [1, "sidebar-nav"], [1, "nav-section"], [1, "section-label"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "sidebar-footer"], [1, "user-info"], [1, "avatar"], [1, "info"], [1, "role"], ["type", "button", 1, "btn", "btn-secondary", "btn-full", "btn-sm", 3, "click"], [1, "main"], [1, "header"], [1, "header-left"], ["type", "button", 1, "menu-btn", 3, "click"], [1, "page-title"], [1, "header-right"], [1, "header-badge"], ["type", "button", 1, "theme-btn", 3, "click"], ["type", "button", 1, "logout-btn", 3, "click"], [1, "content"], [1, "sidebar-overlay", 3, "click"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink"], [1, "nav-icon"]], template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, ShellComponent_Conditional_1_Template, 1, 0, "div", 1);
        \u0275\u0275elementStart(2, "aside", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275listener("click", function ShellComponent_Template_a_click_4_listener() {
          return ctx.closeSidebar();
        });
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275text(6, "V");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
        \u0275\u0275text(9, "VOYAGER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 8);
        \u0275\u0275text(11, "Smart Tourism");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "nav", 9)(13, "div", 10)(14, "span", 11);
        \u0275\u0275text(15, "Main");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(16, ShellComponent_For_17_Template, 4, 3, "a", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, ShellComponent_Conditional_18_Template, 5, 0, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 16)(24, "span", 7);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 17);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "button", 18);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_28_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(29, " Sign out ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 19)(31, "header", 20)(32, "div", 21)(33, "button", 22);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_33_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275text(34, "Menu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 23);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 24);
        \u0275\u0275template(38, ShellComponent_Conditional_38_Template, 2, 0, "span", 25);
        \u0275\u0275elementStart(39, "button", 26);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_39_listener() {
          return ctx.toggleTheme();
        });
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 27);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_41_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(42, "Sign out");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "main", 28);
        \u0275\u0275element(44, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.sidebarOpen() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.sidebarOpen());
        \u0275\u0275advance(14);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAdmin() ? 18 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.avatarInitials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate((tmp_5_0 = ctx.currentUser()) == null ? null : tmp_5_0.full_name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_6_0 = ctx.currentUser()) == null ? null : tmp_6_0.role);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isAdmin() ? 38 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.themeToggleLabel, " ");
      }
    }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  background: var(--dark-950);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 100vh;\n  background: var(--dark-900);\n  border-right: 1px solid var(--border-subtle);\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  overflow-y: auto;\n  transition: transform 250ms ease;\n  z-index: 100;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-900);\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--dark-600);\n  border-radius: 9999px;\n}\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b8932a;\n}\n@media (max-width: 1024px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-mark[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  text-decoration: none;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-mark[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  color: var(--dark-950);\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-mark[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  letter-spacing: 0.05em;\n  display: block;\n  line-height: 1.2;\n}\n.sidebar-logo[_ngcontent-%COMP%]   .logo-mark[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  display: block;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 0.75rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  padding: 0 0.75rem;\n  margin-bottom: 0.5rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  color: var(--text-secondary);\n  text-decoration: none;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 150ms ease;\n  cursor: pointer;\n  margin-bottom: 2px;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  width: 1.35rem;\n  text-align: center;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--dark-800);\n  color: var(--text-primary);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--gold-glow);\n  color: #c9a84c;\n  border: 1px solid var(--border-subtle);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #c9a84c;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--border-subtle);\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  padding: 0.75rem;\n  border-radius: 12px;\n  background: var(--dark-800);\n  margin-bottom: 0.75rem;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--dark-950);\n  flex-shrink: 0;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sidebar-footer[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #c9a84c;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  height: 64px;\n  background: var(--dark-900);\n  border-bottom: 1px solid var(--border-subtle);\n  padding: 0 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-shrink: 0;\n  z-index: 50;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n}\n.header-left[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: all 250ms ease;\n  background: none;\n  color: var(--text-secondary);\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.75rem;\n}\n@media (max-width: 1024px) {\n  .header-left[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.header-left[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.header-left[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n  background: var(--dark-800);\n}\n.header-left[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n.header-right[_ngcontent-%COMP%]   .header-badge[_ngcontent-%COMP%] {\n  background: var(--gold-glow);\n  border: 1px solid var(--border-medium);\n  color: #c9a84c;\n  padding: 0.25rem 0.75rem;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.header-right[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: all 250ms ease;\n  background: var(--surface-elevated);\n  color: var(--text-primary);\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--border-subtle);\n  border-radius: 9999px;\n  font-size: 0.75rem;\n}\n.header-right[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.header-right[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]:hover {\n  border-color: #c9a84c;\n  color: #c9a84c;\n  box-shadow: var(--shadow-gold);\n}\n.header-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  text-decoration: none;\n  transition: all 250ms ease;\n  background: transparent;\n  color: var(--text-muted);\n  padding: 0.5rem 0.75rem;\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  font-size: 0.75rem;\n}\n.header-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.header-right[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover {\n  color: #e74c3c;\n  border-color: rgba(231, 76, 60, 0.3);\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-900);\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--dark-600);\n  border-radius: 9999px;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b8932a;\n}\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.6);\n    z-index: 90;\n    backdrop-filter: blur(2px);\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src\\app\\layout\\shell\\shell.component.ts", lineNumber: 37 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=shell.component-KFR6TUFH.js.map
