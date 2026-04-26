import {
  ToastService
} from "./chunk-6ZHTHB22.js";
import {
  PaginationComponent
} from "./chunk-O6M5ILUN.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
  PlacesService
} from "./chunk-3M7O4WSI.js";
import "./chunk-ZHODDKXD.js";
import {
  CommonModule,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OJTOGUY.js";
import "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-places/admin-places.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminPlacesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function AdminPlacesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F30D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No destinations yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add your first destination to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(8, "Add Destination");
    \u0275\u0275elementEnd()();
  }
}
function AdminPlacesComponent_Conditional_11_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "td", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 16);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 17)(18, "button", 18);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_11_For_18_Template_button_click_18_listener() {
      const place_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(place_r5));
    });
    \u0275\u0275text(19, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 19);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_11_For_18_Template_button_click_20_listener() {
      const place_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(place_r5));
    });
    \u0275\u0275text(21, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const place_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", place_r5.image_url || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=80&q=60", \u0275\u0275sanitizeUrl)("alt", place_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(place_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(place_r5.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(place_r5.country);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2B50 ", place_r5.rating, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(place_r5.is_active ? "badge-confirmed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", place_r5.is_active ? "Active" : "Inactive", " ");
  }
}
function AdminPlacesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AdminPlacesComponent_Conditional_11_For_18_Template, 22, 9, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "app-pagination", 11);
    \u0275\u0275listener("pageChange", function AdminPlacesComponent_Conditional_11_Template_app_pagination_pageChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.places());
    \u0275\u0275advance(2);
    \u0275\u0275property("currentPage", ctx_r1.currentPage())("totalPages", ctx_r1.totalPages());
  }
}
function AdminPlacesComponent_Conditional_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Required, min 2 chars");
    \u0275\u0275elementEnd();
  }
}
function AdminPlacesComponent_Conditional_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function AdminPlacesComponent_Conditional_12_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function AdminPlacesComponent_Conditional_12_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saving... ");
  }
}
function AdminPlacesComponent_Conditional_12_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingPlace() ? "Save Changes" : "Create Destination", " ");
  }
}
function AdminPlacesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 21);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 22)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 24);
    \u0275\u0275listener("ngSubmit", function AdminPlacesComponent_Conditional_12_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 25)(9, "div", 26)(10, "label");
    \u0275\u0275text(11, "Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 27);
    \u0275\u0275template(13, AdminPlacesComponent_Conditional_12_Conditional_13_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26)(15, "label");
    \u0275\u0275text(16, "Country *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 29);
    \u0275\u0275template(18, AdminPlacesComponent_Conditional_12_Conditional_18_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 26)(20, "label");
    \u0275\u0275text(21, "Location / City *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 30);
    \u0275\u0275template(23, AdminPlacesComponent_Conditional_12_Conditional_23_Template, 2, 0, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 26)(25, "label");
    \u0275\u0275text(26, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "textarea", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 25)(29, "div", 26)(30, "label");
    \u0275\u0275text(31, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 26)(34, "label");
    \u0275\u0275text(35, "Rating (0\u20135)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 34)(38, "button", 35);
    \u0275\u0275listener("click", function AdminPlacesComponent_Conditional_12_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(39, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 36);
    \u0275\u0275template(41, AdminPlacesComponent_Conditional_12_Conditional_41_Template, 1, 0)(42, AdminPlacesComponent_Conditional_12_Conditional_42_Template, 1, 1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingPlace() ? "Edit Destination" : "New Destination");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r1.f["name"].invalid && ctx_r1.f["name"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["name"].invalid && ctx_r1.f["name"].touched ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.f["country"].invalid && ctx_r1.f["country"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["country"].invalid && ctx_r1.f["country"].touched ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.f["location"].invalid && ctx_r1.f["location"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["location"].invalid && ctx_r1.f["location"].touched ? 23 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 41 : 42);
  }
}
var AdminPlacesComponent = class _AdminPlacesComponent {
  constructor(placesSvc, toast, fb) {
    this.placesSvc = placesSvc;
    this.toast = toast;
    this.fb = fb;
    this.places = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.showModal = signal(false);
    this.editingPlace = signal(null);
    this.totalPages = signal(1);
    this.currentPage = signal(1);
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      location: ["", Validators.required],
      country: ["", Validators.required],
      image_url: [""],
      rating: [0, [Validators.min(0), Validators.max(5)]]
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.placesSvc.list({ page: this.currentPage(), size: 15 }).subscribe({
      next: (r) => {
        this.places.set(r.items);
        this.totalPages.set(r.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openCreate() {
    this.editingPlace.set(null);
    this.form.reset({ rating: 0 });
    this.showModal.set(true);
  }
  openEdit(place) {
    this.editingPlace.set(place);
    this.form.patchValue(place);
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.saving())
      return;
    this.saving.set(true);
    const payload = this.form.value;
    const editing = this.editingPlace();
    const req = editing ? this.placesSvc.update(editing.id, payload) : this.placesSvc.create(payload);
    req.subscribe({
      next: () => {
        this.toast.success(editing ? "Destination updated." : "Destination created.");
        this.saving.set(false);
        this.closeModal();
        this.load();
      },
      error: (err) => {
        this.toast.error(err.message);
        this.saving.set(false);
      }
    });
  }
  delete(place) {
    if (!confirm(`Delete "${place.name}"? This will also remove all associated hotels and bookings.`))
      return;
    this.placesSvc.delete(place.id).subscribe({
      next: () => {
        this.toast.success("Destination deleted.");
        this.load();
      },
      error: (err) => this.toast.error(err.message)
    });
  }
  onPage(p) {
    this.currentPage.set(p);
    this.load();
  }
  get f() {
    return this.form.controls;
  }
  static {
    this.\u0275fac = function AdminPlacesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminPlacesComponent)(\u0275\u0275directiveInject(PlacesService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminPlacesComponent, selectors: [["app-admin-places"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "admin-page", "fade-in"], [1, "admin-header"], [1, "btn", "btn-primary", 3, "click"], [1, "page-loading"], [1, "empty-state"], [1, "modal-backdrop"], [1, "loading-spinner"], [1, "empty-icon"], [1, "btn", "btn-primary", 2, "margin-top", "1rem", 3, "click"], [1, "data-table-wrap", "card"], [1, "data-table"], [3, "pageChange", "currentPage", "totalPages"], [1, "table-name-cell"], [1, "table-thumb", 3, "src", "alt"], [1, "table-name"], [1, "text-secondary"], [1, "rating-cell"], [1, "action-btns"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["novalidate", "", 1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Santorini"], [1, "form-error"], ["type", "text", "formControlName", "country", "placeholder", "e.g. Greece"], ["type", "text", "formControlName", "location", "placeholder", "e.g. Aegean Sea"], ["formControlName", "description", "rows", "3", "placeholder", "A brief description of the destination..."], ["type", "url", "formControlName", "image_url", "placeholder", "https://..."], ["type", "number", "formControlName", "rating", "min", "0", "max", "5", "step", "0.1"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AdminPlacesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Manage Destinations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Create, edit and remove travel destinations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function AdminPlacesComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ Add Destination");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AdminPlacesComponent_Conditional_9_Template, 2, 0, "div", 3)(10, AdminPlacesComponent_Conditional_10_Template, 9, 0, "div", 4)(11, AdminPlacesComponent_Conditional_11_Template, 20, 2)(12, AdminPlacesComponent_Conditional_12_Template, 43, 13, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading() ? 9 : ctx.places().length === 0 ? 10 : 11);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal() ? 12 : -1);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, PaginationComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.admin-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table-wrap[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle);\n  transition: background 150ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.table-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n}\n.table-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n  border: 1px solid var(--border-subtle);\n}\n.table-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.rating-cell[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 600;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(4px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--dark-850);\n  border: 1px solid var(--border-medium);\n  border-radius: 24px;\n  width: 100%;\n  max-width: 640px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-900);\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--dark-600);\n  border-radius: 9999px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b8932a;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.25rem;\n  border-radius: 4px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .modal-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-subtle);\n  margin-top: 0.5rem;\n}\n.admin-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.5rem;\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  max-width: 320px;\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.admin-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   .search-input.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n  max-width: 200px;\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.admin-search[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.admin-search[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n/*# sourceMappingURL=admin-places.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminPlacesComponent, { className: "AdminPlacesComponent", filePath: "src\\app\\features\\admin\\admin-places\\admin-places.component.ts", lineNumber: 16 });
})();
export {
  AdminPlacesComponent
};
//# sourceMappingURL=admin-places.component-EJNPH7RD.js.map
