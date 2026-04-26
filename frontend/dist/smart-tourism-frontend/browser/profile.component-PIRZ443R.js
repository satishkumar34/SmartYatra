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
import "./chunk-JKA44PGP.js";
import {
  CommonModule,
  DatePipe,
  HttpClient,
  environment,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/profile/profile.component.ts
function ProfileComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Full name must be at least 2 characters");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 24);
    \u0275\u0275text(1, " Saving\u2026 ");
  }
}
function ProfileComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Save Changes ");
  }
}
var ProfileComponent = class _ProfileComponent {
  constructor(fb, auth, http, toast) {
    this.fb = fb;
    this.auth = auth;
    this.http = http;
    this.toast = toast;
    this.saving = signal(false);
    this.currentUser = this.auth.currentUser;
    this.form = this.fb.group({
      full_name: ["", [Validators.required, Validators.minLength(2)]]
    });
  }
  ngOnInit() {
    const user = this.currentUser();
    if (user)
      this.form.patchValue({ full_name: user.full_name });
  }
  get f() {
    return this.form.controls;
  }
  get avatarInitials() {
    const name = this.currentUser()?.full_name ?? "";
    return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.saving())
      return;
    this.saving.set(true);
    this.http.patch(`${environment.apiBaseUrl}/users/me/profile`, this.form.value).subscribe({
      next: () => {
        this.auth.fetchCurrentUser().subscribe();
        this.toast.success("Profile updated successfully.");
        this.saving.set(false);
      },
      error: () => {
        this.toast.error("Failed to update profile.");
        this.saving.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ToastService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 50, vars: 18, consts: [[1, "profile-page", "fade-in"], [1, "profile-header"], [1, "profile-layout"], [1, "avatar-card", "card"], [1, "avatar-display"], [1, "avatar-name"], [1, "avatar-email"], [2, "margin-top", ".75rem"], [1, "account-meta"], [1, "meta-row"], [1, "meta-label"], [1, "badge-confirmed"], [1, "meta-value"], [1, "edit-card", "card"], [1, "section-title"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "full_name"], ["id", "full_name", "type", "text", "formControlName", "full_name"], [1, "form-error"], ["type", "email", "disabled", "", 1, "disabled-input", 3, "value"], [1, "field-hint"], ["type", "text", "disabled", "", 1, "disabled-input", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "loading-spinner", 2, "width", "16px", "height", "16px", "border-width", "2px"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
        \u0275\u0275text(3, "My Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, "Manage your account information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 2)(7, "div", 3)(8, "div", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 7);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "span", 10);
        \u0275\u0275text(19, "Account status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 11);
        \u0275\u0275text(21, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "span", 10);
        \u0275\u0275text(24, "Member since");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 13)(29, "h3", 14);
        \u0275\u0275text(30, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "form", 15);
        \u0275\u0275listener("ngSubmit", function ProfileComponent_Template_form_ngSubmit_31_listener() {
          return ctx.save();
        });
        \u0275\u0275elementStart(32, "div", 16)(33, "label", 17);
        \u0275\u0275text(34, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 18);
        \u0275\u0275template(36, ProfileComponent_Conditional_36_Template, 2, 0, "span", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 16)(38, "label");
        \u0275\u0275text(39, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 20);
        \u0275\u0275elementStart(41, "span", 21);
        \u0275\u0275text(42, "Email cannot be changed. Contact support if needed.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 16)(44, "label");
        \u0275\u0275text(45, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "input", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "button", 23);
        \u0275\u0275template(48, ProfileComponent_Conditional_48_Template, 2, 0)(49, ProfileComponent_Conditional_49_Template, 1, 0);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_9_0;
        let tmp_10_0;
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.avatarInitials);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_1_0 = ctx.currentUser()) == null ? null : tmp_1_0.full_name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((tmp_2_0 = ctx.currentUser()) == null ? null : tmp_2_0.email);
        \u0275\u0275advance();
        \u0275\u0275classMap("badge-" + ((tmp_3_0 = (tmp_3_0 = ctx.currentUser()) == null ? null : tmp_3_0.role) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "user"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx.currentUser()) == null ? null : tmp_4_0.role, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 15, (tmp_5_0 = ctx.currentUser()) == null ? null : tmp_5_0.created_at, "MMM y"));
        \u0275\u0275advance(5);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["full_name"].invalid && ctx.f["full_name"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["full_name"].invalid && ctx.f["full_name"].touched ? 36 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", (tmp_9_0 = ctx.currentUser()) == null ? null : tmp_9_0.email);
        \u0275\u0275advance(6);
        \u0275\u0275property("value", (tmp_10_0 = ctx.currentUser()) == null ? null : tmp_10_0.role);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.saving());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.saving() ? 48 : 49);
      }
    }, dependencies: [CommonModule, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n}\n.profile-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.profile-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.profile-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.profile-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 700px) {\n  .profile-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.avatar-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.5rem;\n}\n.avatar-display[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background:\n    linear-gradient(\n      135deg,\n      #b8932a,\n      #c9a84c);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--dark-950);\n  margin-bottom: 0.5rem;\n  box-shadow: 0 4px 16px rgba(201, 168, 76, 0.3);\n}\n.avatar-name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.avatar-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-muted);\n}\n.account-meta[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px solid var(--border-subtle);\n  margin-top: 1rem;\n  padding-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.875rem;\n}\n.meta-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.meta-value[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.form-group[_ngcontent-%COMP%]   .disabled-input[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.form-group[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n}\n.form-group[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\features\\profile\\profile.component.ts", lineNumber: 16 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=profile.component-PIRZ443R.js.map
