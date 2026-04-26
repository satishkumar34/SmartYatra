import {
  DOCUMENT,
  computed,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-6OJTOGUY.js";

// src/app/core/services/theme.service.ts
var STORAGE_KEY = "st_theme";
var FALLBACK_THEME = "dark";
var ThemeService = class _ThemeService {
  constructor() {
    this.document = inject(DOCUMENT);
    this.currentTheme = signal(FALLBACK_THEME);
    this.theme = this.currentTheme.asReadonly();
    this.isDark = computed(() => this.currentTheme() === "dark");
  }
  initialize() {
    this.applyResolvedTheme(this.resolveInitialTheme());
  }
  toggleTheme() {
    this.setTheme(this.isDark() ? "light" : "dark");
  }
  setTheme(theme) {
    this.applyResolvedTheme(theme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }
  resolveInitialTheme() {
    if (typeof window === "undefined") {
      return FALLBACK_THEME;
    }
    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyResolvedTheme(theme) {
    this.currentTheme.set(theme);
    const root = this.document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    const metaTheme = this.document.querySelector('meta[name="theme-color"]');
    metaTheme?.setAttribute("content", theme === "dark" ? "#10101a" : "#fcf9f1");
  }
  static {
    this.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
  }
};

export {
  ThemeService
};
//# sourceMappingURL=chunk-7SYI734T.js.map
