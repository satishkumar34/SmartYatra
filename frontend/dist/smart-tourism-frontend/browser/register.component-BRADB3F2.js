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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_17_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), "");
  }
}
function RegisterComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Full name must be at least 2 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Password must be at least 8 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.f["password"].errors == null ? null : ctx_r0.f["password"].errors["complexity"]);
  }
}
function RegisterComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
function RegisterComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Account ");
  }
}
function passwordComplexity(ctrl) {
  const v = ctrl.value;
  if (!v)
    return null;
  if (!/[A-Z]/.test(v))
    return { complexity: "Must contain an uppercase letter." };
  if (!/[0-9]/.test(v))
    return { complexity: "Must contain a digit." };
  return null;
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, auth, router, toast) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.toast = toast;
    this.loading = signal(false);
    this.error = signal("");
    this.form = this.fb.group({
      full_name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), passwordComplexity]]
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
    this.auth.register(this.form.value).subscribe({
      next: () => {
        this.toast.success("Account created! Please sign in.");
        this.router.navigate(["/auth/login"]);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 14, consts: [[1, "auth-page"], [1, "auth-backdrop"], [1, "auth-pattern"], [1, "auth-container"], [1, "auth-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-tagline"], [1, "auth-card"], [1, "auth-card-header"], [1, "auth-error"], ["novalidate", "", 1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "full_name"], ["id", "full_name", "type", "text", "formControlName", "full_name", "placeholder", "John Doe", "autocomplete", "name"], [1, "form-error"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Min 8 chars, 1 uppercase, 1 digit", "autocomplete", "new-password"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", "btn-lg", 3, "disabled"], [1, "loading-spinner", 2, "width", "18px", "height", "18px", "border-width", "2px"], [1, "auth-footer"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) {
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
        \u0275\u0275text(10, "Join the smart travel community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "h2");
        \u0275\u0275text(14, "Create account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "Start exploring the world's finest destinations");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(17, RegisterComponent_Conditional_17_Template, 4, 1, "div", 10);
        \u0275\u0275elementStart(18, "form", 11);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(19, "div", 12)(20, "label", 13);
        \u0275\u0275text(21, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "input", 14);
        \u0275\u0275template(23, RegisterComponent_Conditional_23_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12)(25, "label", 16);
        \u0275\u0275text(26, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 17);
        \u0275\u0275template(28, RegisterComponent_Conditional_28_Template, 2, 0, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 12)(30, "label", 18);
        \u0275\u0275text(31, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 19);
        \u0275\u0275template(33, RegisterComponent_Conditional_33_Template, 2, 0, "span", 15)(34, RegisterComponent_Conditional_34_Template, 2, 1, "span", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 20);
        \u0275\u0275template(36, RegisterComponent_Conditional_36_Template, 1, 0, "span", 21)(37, RegisterComponent_Conditional_37_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 22);
        \u0275\u0275text(39, " Already have an account? ");
        \u0275\u0275elementStart(40, "a", 23);
        \u0275\u0275text(41, "Sign in");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275conditional(ctx.error() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["full_name"].invalid && ctx.f["full_name"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["full_name"].invalid && ctx.f["full_name"].touched ? 23 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["email"].invalid && ctx.f["email"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["email"].invalid && ctx.f["email"].touched ? 28 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["password"].invalid && ctx.f["password"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.f["password"].errors == null ? null : ctx.f["password"].errors["minlength"]) && ctx.f["password"].touched ? 33 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.f["password"].errors == null ? null : ctx.f["password"].errors["complexity"]) && ctx.f["password"].touched ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 36 : 37);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, RouterLink], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--dark-950);\n  position: relative;\n  overflow: hidden;\n  padding: 1rem;\n}\n.auth-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n.auth-backdrop[_ngcontent-%COMP%]   .auth-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      ellipse 80% 60% at 20% 20%,\n      rgba(201, 168, 76, 0.06) 0%,\n      transparent 60%),\n    radial-gradient(\n      ellipse 60% 80% at 80% 80%,\n      rgba(201, 168, 76, 0.04) 0%,\n      transparent 60%);\n}\n.auth-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  position: relative;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease forwards;\n}\n.auth-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: var(--dark-950);\n  margin: 0 auto 1rem;\n  box-shadow: 0 8px 24px rgba(201, 168, 76, 0.25);\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: 0.15em;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c,\n      #e0c070);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 0.25rem;\n}\n.auth-brand[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: var(--dark-850);\n  border: 1px solid var(--border-subtle);\n  border-radius: 24px;\n  padding: 2rem;\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n}\n@media (max-width: 640px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.auth-card-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.auth-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.25rem;\n}\n.auth-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.auth-error[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  border: 1px solid rgba(231, 76, 60, 0.25);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #e74c3c;\n  margin-bottom: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  background: var(--dark-900);\n  border-color: var(--border-subtle);\n  padding: 1rem;\n  font-size: 1rem;\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.auth-form[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.auth-form[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n  margin-top: 0.25rem;\n  display: block;\n}\n.auth-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  height: 52px;\n  font-size: 1rem;\n  letter-spacing: 0.03em;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 600;\n  margin-left: 0.25rem;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e0c070;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register\\register.component.ts", lineNumber: 23 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=register.component-BRADB3F2.js.map
