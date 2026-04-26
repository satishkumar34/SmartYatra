import {
  ToastService
} from "./chunk-6ZHTHB22.js";
import {
  BookingsService
} from "./chunk-ULEBUOV3.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-3YIVQX77.js";
import {
  HotelsService
} from "./chunk-52RINIPS.js";
import "./chunk-ZHODDKXD.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-JKA44PGP.js";
import {
  CommonModule,
  DecimalPipe,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/booking/booking-form/booking-form.component.ts
function BookingFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span");
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
function BookingFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "div")(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.hotel().image_url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80", \u0275\u0275sanitizeUrl)("alt", ctx_r0.hotel().name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hotel().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.hotel().address, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(9, 5, ctx_r0.hotel().price_per_night, "1.0-0"), " / night");
  }
}
function BookingFormComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Select a check-in date");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Select a check-out date");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Check-out must be after check-in");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "Guests must be between 1 and 20");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
    \u0275\u0275text(1, " Processing... ");
  }
}
function BookingFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Confirm Booking \u2014 \u20B9", \u0275\u0275pipeBind2(1, 1, ctx_r0.estimatedTotal(), "1.0-0"), " ");
  }
}
function BookingFormComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 36)(9, "span");
    \u0275\u0275text(10, "Service fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 37);
    \u0275\u0275text(12, "Included");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 36)(14, "span");
    \u0275\u0275text(15, "Taxes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 37);
    \u0275\u0275text(17, "Included");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 38)(19, "span");
    \u0275\u0275text(20, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("\u20B9", \u0275\u0275pipeBind2(4, 5, ctx_r0.hotel().price_per_night, "1.0-0"), " \xD7 ", ctx_r0.nightCount(), " night", ctx_r0.nightCount() !== 1 ? "s" : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 8, ctx_r0.estimatedTotal(), "1.0-0"), "");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(23, 11, ctx_r0.estimatedTotal(), "1.0-0"), "");
  }
}
function BookingFormComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1, "Select a hotel to see pricing");
    \u0275\u0275elementEnd();
  }
}
function BookingFormComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, " \u26A0 Check-out must be after check-in ");
    \u0275\u0275elementEnd();
  }
}
var BookingFormComponent = class _BookingFormComponent {
  constructor(fb, bookingSvc, hotelsSvc, toast, router, route) {
    this.fb = fb;
    this.bookingSvc = bookingSvc;
    this.hotelsSvc = hotelsSvc;
    this.toast = toast;
    this.router = router;
    this.route = route;
    this.hotel = signal(null);
    this.loading = signal(false);
    this.hotelLoading = signal(true);
    this.error = signal("");
    this.today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    this.nightCount = computed(() => {
      const ci = this.form?.value?.check_in;
      const co = this.form?.value?.check_out;
      if (!ci || !co)
        return 0;
      const diff = (new Date(co).getTime() - new Date(ci).getTime()) / 864e5;
      return diff > 0 ? diff : 0;
    });
    this.estimatedTotal = computed(() => {
      const h = this.hotel();
      if (!h)
        return 0;
      return Math.round(h.price_per_night * this.nightCount());
    });
    this.form = this.fb.group({
      hotel_id: [null, Validators.required],
      check_in: ["", Validators.required],
      check_out: ["", Validators.required],
      guests: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
      special_requests: [""]
    }, { validators: this.datesValidator });
  }
  ngOnInit() {
    const hotelId = this.route.snapshot.queryParamMap.get("hotel_id");
    if (hotelId) {
      this.form.patchValue({ hotel_id: Number(hotelId) });
      this.hotelsSvc.getById(Number(hotelId)).subscribe({
        next: (h) => {
          this.hotel.set(h);
          this.hotelLoading.set(false);
        },
        error: () => this.hotelLoading.set(false)
      });
    } else {
      this.hotelLoading.set(false);
    }
  }
  datesValidator(g) {
    const ci = g.get("check_in")?.value;
    const co = g.get("check_out")?.value;
    if (ci && co && new Date(co) <= new Date(ci)) {
      return { invalidDates: true };
    }
    return null;
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.loading())
      return;
    this.loading.set(true);
    this.error.set("");
    const payload = {
      hotel_id: this.form.value.hotel_id,
      check_in: this.form.value.check_in,
      check_out: this.form.value.check_out,
      guests: this.form.value.guests,
      special_requests: this.form.value.special_requests || void 0
    };
    this.bookingSvc.create(payload).subscribe({
      next: (booking) => {
        this.toast.success(`Booking #${booking.id} created successfully!`);
        this.router.navigate(["/bookings"]);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      }
    });
  }
  get minCheckOut() {
    const ci = this.form.value.check_in;
    if (!ci)
      return this.today;
    const d = new Date(ci);
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  }
  static {
    this.\u0275fac = function BookingFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(BookingsService), \u0275\u0275directiveInject(HotelsService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingFormComponent, selectors: [["app-booking-form"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 19, consts: [[1, "booking-page", "fade-in"], [1, "booking-header"], ["routerLink", "/hotels", 1, "back-link"], [1, "booking-layout"], [1, "booking-form-wrap"], [1, "card"], [1, "form-section-title"], [1, "form-error-banner"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "selected-hotel"], [1, "dates-row"], [1, "form-group"], ["for", "check_in"], ["id", "check_in", "type", "date", "formControlName", "check_in", 3, "min"], [1, "form-error"], ["for", "check_out"], ["id", "check_out", "type", "date", "formControlName", "check_out", 3, "min"], ["for", "guests"], ["id", "guests", "type", "number", "formControlName", "guests", "min", "1", "max", "20"], ["for", "special_requests"], [1, "optional"], ["id", "special_requests", "formControlName", "special_requests", "placeholder", "Early check-in, specific floor, dietary requirements...", "rows", "3"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", "btn-lg", 3, "disabled"], [1, "legal-note"], [1, "price-sidebar"], [1, "card", "price-card"], [1, "text-muted", "text-sm"], [1, "price-warning"], [1, "card", "info-card"], [1, "includes-list"], [1, "hotel-thumb", 3, "src", "alt"], [1, "hotel-title"], [1, "hotel-sub"], [1, "hotel-rate"], [1, "loading-spinner", 2, "width", "18px", "height", "18px", "border-width", "2px"], [1, "price-rows"], [1, "price-row"], [1, "text-muted"], [1, "price-total"], [1, "total-amount"]], template: function BookingFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back to Hotels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Complete Your Booking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Review your stay details before confirming");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "h3", 6);
        \u0275\u0275text(12, "Stay Details");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, BookingFormComponent_Conditional_13_Template, 4, 1, "div", 7);
        \u0275\u0275elementStart(14, "form", 8);
        \u0275\u0275listener("ngSubmit", function BookingFormComponent_Template_form_ngSubmit_14_listener() {
          return ctx.submit();
        });
        \u0275\u0275template(15, BookingFormComponent_Conditional_15_Template, 10, 8, "div", 9);
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "label", 12);
        \u0275\u0275text(19, "Check-in Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 13);
        \u0275\u0275template(21, BookingFormComponent_Conditional_21_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 11)(23, "label", 15);
        \u0275\u0275text(24, "Check-out Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "input", 16);
        \u0275\u0275template(26, BookingFormComponent_Conditional_26_Template, 2, 0, "span", 14)(27, BookingFormComponent_Conditional_27_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11)(29, "label", 17);
        \u0275\u0275text(30, "Number of Guests");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 18);
        \u0275\u0275template(32, BookingFormComponent_Conditional_32_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 11)(34, "label", 19);
        \u0275\u0275text(35, "Special Requests ");
        \u0275\u0275elementStart(36, "span", 20);
        \u0275\u0275text(37, "(optional)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(38, "textarea", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 22);
        \u0275\u0275template(40, BookingFormComponent_Conditional_40_Template, 2, 0)(41, BookingFormComponent_Conditional_41_Template, 2, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 23);
        \u0275\u0275text(43, " By confirming, you agree to our cancellation policy. Free cancellation within 24 hours. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "div", 24)(45, "div", 25)(46, "h3");
        \u0275\u0275text(47, "Price Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, BookingFormComponent_Conditional_48_Template, 24, 14)(49, BookingFormComponent_Conditional_49_Template, 2, 0, "p", 26)(50, BookingFormComponent_Conditional_50_Template, 2, 0, "div", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 28)(52, "h4");
        \u0275\u0275text(53, "What's included");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "ul", 29)(55, "li");
        \u0275\u0275text(56, "\u2713 Free cancellation (24h)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li");
        \u0275\u0275text(58, "\u2713 Instant confirmation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "li");
        \u0275\u0275text(60, "\u2713 No hidden fees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "li");
        \u0275\u0275text(62, "\u2713 24/7 support");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.error() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hotel() ? 15 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("error", ctx.f["check_in"].invalid && ctx.f["check_in"].touched);
        \u0275\u0275property("min", ctx.today);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["check_in"].invalid && ctx.f["check_in"].touched ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["check_out"].invalid && ctx.f["check_out"].touched);
        \u0275\u0275property("min", ctx.minCheckOut);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["check_out"].invalid && ctx.f["check_out"].touched ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.form.errors == null ? null : ctx.form.errors["invalidDates"]) && ctx.f["check_out"].touched ? 27 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.f["guests"].invalid && ctx.f["guests"].touched);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.f["guests"].invalid && ctx.f["guests"].touched ? 32 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.loading() || ctx.nightCount() === 0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.loading() ? 40 : 41);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.hotel() ? 48 : 49);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nightCount() === 0 && ctx.form.value.check_in && ctx.form.value.check_out ? 50 : -1);
      }
    }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, CommonModule, DecimalPipe, RouterLink], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.booking-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.booking-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.booking-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #c9a84c;\n  font-size: 0.875rem;\n  margin-bottom: 0.75rem;\n}\n.booking-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: #e0c070;\n}\n.booking-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.booking-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.booking-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 2rem;\n  align-items: flex-start;\n}\n@media (max-width: 900px) {\n  .booking-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-section-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  background: rgba(231, 76, 60, 0.1);\n  border: 1px solid rgba(231, 76, 60, 0.25);\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  color: #e74c3c;\n  margin-bottom: 1.25rem;\n}\n.selected-hotel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.selected-hotel[_ngcontent-%COMP%]   .hotel-thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n}\n.selected-hotel[_ngcontent-%COMP%]   .hotel-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n.selected-hotel[_ngcontent-%COMP%]   .hotel-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-bottom: 0.25rem;\n}\n.selected-hotel[_ngcontent-%COMP%]   .hotel-rate[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #c9a84c;\n}\n.dates-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .dates-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .optional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n  font-size: 0.75rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n}\ninput[type=date][_ngcontent-%COMP%] {\n  color-scheme: inherit;\n}\ninput[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.7);\n  cursor: pointer;\n}\n.legal-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-align: center;\n  margin-top: 0.75rem;\n}\n.price-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  position: sticky;\n  top: 1.5rem;\n}\n.price-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-medium);\n}\n.price-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-bottom: 1.25rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.price-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n}\n.price-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-medium);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #c9a84c;\n}\n.price-warning[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  background: rgba(243, 156, 18, 0.1);\n  border: 1px solid rgba(243, 156, 18, 0.25);\n  border-radius: 8px;\n  font-size: 0.75rem;\n  color: #f39c12;\n}\n.info-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n.includes-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.includes-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #2ecc71;\n}\n/*# sourceMappingURL=booking-form.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingFormComponent, { className: "BookingFormComponent", filePath: "src\\app\\features\\booking\\booking-form\\booking-form.component.ts", lineNumber: 17 });
})();
export {
  BookingFormComponent
};
//# sourceMappingURL=booking-form.component-ZHODUHEY.js.map
