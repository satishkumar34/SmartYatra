import {
  ToastService
} from "./chunk-6ZHTHB22.js";
import {
  AuthService
} from "./chunk-XHBJMX36.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3YIVQX77.js";
import {
  Router,
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2, "\u26A0");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function LoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router, toast) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.loading = signal(false);
    this.error = signal("");
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    if (this.form.invalid || this.loading())
      return;
    this.loading.set(true);
    this.error.set("");
    this.auth.login(this.form.value).subscribe({
      next: () => {
        this.toast.success("Welcome back!");
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 10, consts: [[1, "auth-page"], [1, "auth-backdrop"], [1, "auth-pattern"], [1, "auth-container"], [1, "auth-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-tagline"], [1, "auth-card"], [1, "auth-card-header"], [1, "auth-error"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "username", "placeholder", "you@example.com", "autocomplete", "email"], [1, "form-error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", "btn-lg", 3, "disabled"], [1, "loading-spinner", 2, "width", "18px", "height", "18px", "border-width", "2px"], [1, "auth-footer"], ["routerLink", "/auth/register"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "\u2708");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8, "VOYAGER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10, "Your Smart Travel Companion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "h2");
        \u0275\u0275text(14, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "Sign in to continue your journey");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, LoginComponent_Conditional_17_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(18, "form", 11);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
        \u0275\u0275text(21, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 14);
        \u0275\u0275template(23, LoginComponent_Conditional_23_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12)(25, "label", 16);
        \u0275\u0275text(26, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 17);
        \u0275\u0275template(28, LoginComponent_Conditional_28_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 18);
        \u0275\u0275template(30, LoginComponent_Conditional_30_Template, 1, 0, "span", 19)(31, LoginComponent_Conditional_31_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 20);
        \u0275\u0275text(33, " Don't have an account? ");
        \u0275\u0275elementStart(34, "a", 21);
        \u0275\u0275text(35, "Create account");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275conditional(ctx.error() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["username"].invalid && ctx.f["username"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["username"].invalid && ctx.f["username"].touched ? 23 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["password"].invalid && ctx.f["password"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["password"].invalid && ctx.f["password"].touched ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 30 : 31);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, RouterLink], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--dark-950);\n  position: relative;\n  overflow: hidden;\n  padding: 1rem;\n}\n.auth-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-backdrop[_ngcontent-%COMP%]   .auth-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      ellipse 80% 60% at 20% 20%,\n      rgba(201, 168, 76, 0.06) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 60% 80% at 80% 80%,\n      rgba(201, 168, 76, 0.04) 0%,\n      transparent 60%);\n}\n.auth-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease forwards;\n}\n.auth-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: var(--dark-950);\n  margin: 0 auto 1rem;\n  box-shadow: 0 8px 24px rgba(201, 168, 76, 0.25);\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c,\n      #e0c070);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.25rem;\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: var(--dark-850);\n  border: 1px solid var(--border-subtle);\n  border-radius: 24px;\n  padding: 2rem;\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n}\n@media (max-width: 640px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.auth-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.auth-error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  border: 1px solid rgba(231, 76, 60, 0.25);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #e74c3c;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  background: var(--dark-900);\n  border-color: var(--border-subtle);\n  padding: 1rem;\n  font-size: 1rem;\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.auth-form[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.auth-form[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n  margin-top: 0.25rem;\n  display: block;\n}\n.auth-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  height: 52px;\n  font-size: 1rem;\n  letter-spacing: 0.03em;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 600;\n  margin-left: 0.25rem;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e0c070;\n}\n.auth-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1.25rem 0;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n}\n.auth-divider[_ngcontent-%COMP%]::before, \n.auth-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-subtle);\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 15 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-C422ZBC4.js.map
