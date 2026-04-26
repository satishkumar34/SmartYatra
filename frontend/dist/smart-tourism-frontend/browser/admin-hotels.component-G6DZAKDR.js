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
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-3YIVQX77.js";
import {
  HotelsService
} from "./chunk-52RINIPS.js";
import {
  PlacesService
} from "./chunk-3M7O4WSI.js";
import "./chunk-ZHODDKXD.js";
import {
  CommonModule,
  DecimalPipe,
  SlicePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-6OJTOGUY.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/features/admin/admin-hotels/admin-hotels.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminHotelsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function AdminHotelsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 7);
    \u0275\u0275text(2, "\u{1F3E8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No hotels listed yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Add your first hotel to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 8);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreate());
    });
    \u0275\u0275text(8, "Add Hotel");
    \u0275\u0275elementEnd()();
  }
}
function AdminHotelsComponent_Conditional_11_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 12);
    \u0275\u0275element(3, "img", 13);
    \u0275\u0275elementStart(4, "div")(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 17);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 16);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 18);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "div", 19)(26, "button", 20);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_11_For_20_Template_button_click_26_listener() {
      const hotel_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEdit(hotel_r5));
    });
    \u0275\u0275text(27, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 21);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_11_For_20_Template_button_click_28_listener() {
      const hotel_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delete(hotel_r5));
    });
    \u0275\u0275text(29, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const hotel_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", hotel_r5.image_url || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&q=60", \u0275\u0275sanitizeUrl)("alt", hotel_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hotel_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(9, 12, hotel_r5.address, 0, 40), "", hotel_r5.address.length > 40 ? "\u2026" : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.placeName(hotel_r5.place_id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(15, 16, hotel_r5.price_per_night, "1.0-0"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(hotel_r5.total_rooms);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2B50 ", hotel_r5.rating, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(hotel_r5.is_active ? "badge-confirmed" : "badge-cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", hotel_r5.is_active ? "Active" : "Inactive", " ");
  }
}
function AdminHotelsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "table", 10)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Hotel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Price / night");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Rooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, AdminHotelsComponent_Conditional_11_For_20_Template, 30, 19, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "app-pagination", 11);
    \u0275\u0275listener("pageChange", function AdminHotelsComponent_Conditional_11_Template_app_pagination_pageChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.hotels());
    \u0275\u0275advance(2);
    \u0275\u0275property("currentPage", ctx_r1.currentPage())("totalPages", ctx_r1.totalPages());
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Required, min 2 chars");
    \u0275\u0275elementEnd();
  }
}
function AdminHotelsComponent_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const place_r7 = ctx.$implicit;
    \u0275\u0275property("ngValue", place_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", place_r7.name, ", ", place_r7.country, "");
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Must be greater than 0");
    \u0275\u0275elementEnd();
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "Must be at least 1");
    \u0275\u0275elementEnd();
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saving\u2026 ");
  }
}
function AdminHotelsComponent_Conditional_12_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.editingHotel() ? "Save Changes" : "Create Hotel", " ");
  }
}
function AdminHotelsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 24)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_12_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 26);
    \u0275\u0275listener("ngSubmit", function AdminHotelsComponent_Conditional_12_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(8, "div", 27)(9, "div", 28)(10, "label");
    \u0275\u0275text(11, "Hotel Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 29);
    \u0275\u0275template(13, AdminHotelsComponent_Conditional_12_Conditional_13_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28)(15, "label");
    \u0275\u0275text(16, "Destination *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 31)(18, "option", 32);
    \u0275\u0275text(19, "Select destination\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(20, AdminHotelsComponent_Conditional_12_For_21_Template, 2, 3, "option", 33, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminHotelsComponent_Conditional_12_Conditional_22_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 28)(24, "label");
    \u0275\u0275text(25, "Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 34);
    \u0275\u0275template(27, AdminHotelsComponent_Conditional_12_Conditional_27_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 28)(29, "label");
    \u0275\u0275text(30, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "textarea", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 28)(33, "label");
    \u0275\u0275text(34, "Image URL");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 27)(37, "div", 28)(38, "label");
    \u0275\u0275text(39, "Price per Night (\u20B9) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 37);
    \u0275\u0275template(41, AdminHotelsComponent_Conditional_12_Conditional_41_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 28)(43, "label");
    \u0275\u0275text(44, "Total Rooms *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 38);
    \u0275\u0275template(46, AdminHotelsComponent_Conditional_12_Conditional_46_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 28)(48, "label");
    \u0275\u0275text(49, "Rating (0\u20135)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 28)(52, "label");
    \u0275\u0275text(53, "Amenities ");
    \u0275\u0275elementStart(54, "span", 40);
    \u0275\u0275text(55, "(comma-separated)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(56, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 42)(58, "button", 43);
    \u0275\u0275listener("click", function AdminHotelsComponent_Conditional_12_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(59, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 44);
    \u0275\u0275template(61, AdminHotelsComponent_Conditional_12_Conditional_61_Template, 1, 0)(62, AdminHotelsComponent_Conditional_12_Conditional_62_Template, 1, 1);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingHotel() ? "Edit Hotel" : "New Hotel");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("error", ctx_r1.f["name"].invalid && ctx_r1.f["name"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["name"].invalid && ctx_r1.f["name"].touched ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.f["place_id"].invalid && ctx_r1.f["place_id"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.places());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.f["place_id"].invalid && ctx_r1.f["place_id"].touched ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.f["address"].invalid && ctx_r1.f["address"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["address"].invalid && ctx_r1.f["address"].touched ? 27 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275classProp("error", ctx_r1.f["price_per_night"].invalid && ctx_r1.f["price_per_night"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["price_per_night"].invalid && ctx_r1.f["price_per_night"].touched ? 41 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.f["total_rooms"].invalid && ctx_r1.f["total_rooms"].touched);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["total_rooms"].invalid && ctx_r1.f["total_rooms"].touched ? 46 : -1);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving() ? 61 : 62);
  }
}
var AdminHotelsComponent = class _AdminHotelsComponent {
  constructor(hotelsSvc, placesSvc, toast, fb) {
    this.hotelsSvc = hotelsSvc;
    this.placesSvc = placesSvc;
    this.toast = toast;
    this.fb = fb;
    this.hotels = signal([]);
    this.places = signal([]);
    this.loading = signal(true);
    this.saving = signal(false);
    this.showModal = signal(false);
    this.editingHotel = signal(null);
    this.totalPages = signal(1);
    this.currentPage = signal(1);
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: [""],
      place_id: [null, Validators.required],
      address: ["", Validators.required],
      image_url: [""],
      price_per_night: [null, [Validators.required, Validators.min(1)]],
      rating: [0, [Validators.min(0), Validators.max(5)]],
      total_rooms: [10, [Validators.required, Validators.min(1)]],
      amenities_raw: [""]
      // comma-separated input; split on save
    });
  }
  ngOnInit() {
    this.placesSvc.list({ size: 200 }).subscribe({ next: (r) => this.places.set(r.items) });
    this.load();
  }
  load() {
    this.loading.set(true);
    this.hotelsSvc.list({ page: this.currentPage(), size: 15 }).subscribe({
      next: (r) => {
        this.hotels.set(r.items);
        this.totalPages.set(r.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openCreate() {
    this.editingHotel.set(null);
    this.form.reset({ rating: 0, total_rooms: 10 });
    this.showModal.set(true);
  }
  openEdit(hotel) {
    this.editingHotel.set(hotel);
    let amenitiesRaw = "";
    if (hotel.amenities) {
      try {
        amenitiesRaw = JSON.parse(hotel.amenities).join(", ");
      } catch {
        amenitiesRaw = "";
      }
    }
    this.form.patchValue(__spreadProps(__spreadValues({}, hotel), { amenities_raw: amenitiesRaw }));
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
    const _a = this.form.value, { amenities_raw } = _a, rest = __objRest(_a, ["amenities_raw"]);
    const amenities = amenities_raw ? amenities_raw.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const payload = __spreadProps(__spreadValues({}, rest), { amenities });
    const editing = this.editingHotel();
    const req = editing ? this.hotelsSvc.update(editing.id, payload) : this.hotelsSvc.create(payload);
    req.subscribe({
      next: () => {
        this.toast.success(editing ? "Hotel updated." : "Hotel created.");
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
  delete(hotel) {
    if (!confirm(`Delete "${hotel.name}"? All bookings for this hotel will also be removed.`))
      return;
    this.hotelsSvc.delete(hotel.id).subscribe({
      next: () => {
        this.toast.success("Hotel deleted.");
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
  placeName(id) {
    return this.places().find((p) => p.id === id)?.name ?? `Place #${id}`;
  }
  static {
    this.\u0275fac = function AdminHotelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminHotelsComponent)(\u0275\u0275directiveInject(HotelsService), \u0275\u0275directiveInject(PlacesService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminHotelsComponent, selectors: [["app-admin-hotels"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "admin-page", "fade-in"], [1, "admin-header"], [1, "btn", "btn-primary", 3, "click"], [1, "page-loading"], [1, "empty-state"], [1, "modal-backdrop"], [1, "loading-spinner"], [1, "empty-icon"], [1, "btn", "btn-primary", 2, "margin-top", "1rem", 3, "click"], [1, "data-table-wrap", "card"], [1, "data-table"], [3, "pageChange", "currentPage", "totalPages"], [1, "table-name-cell"], [1, "table-thumb", 3, "src", "alt"], [1, "table-name"], [1, "table-sub"], [1, "text-secondary"], [1, "price-cell"], [1, "rating-cell"], [1, "action-btns"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["novalidate", "", 1, "modal-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Caldera Suites"], [1, "form-error"], ["formControlName", "place_id"], ["disabled", "", 3, "ngValue"], [3, "ngValue"], ["type", "text", "formControlName", "address", "placeholder", "123 Beachfront Road, City, Country"], ["formControlName", "description", "rows", "3", "placeholder", "A brief description of the hotel and its highlights\u2026"], ["type", "url", "formControlName", "image_url", "placeholder", "https://images.unsplash.com/..."], ["type", "number", "formControlName", "price_per_night", "placeholder", "5000"], ["type", "number", "formControlName", "total_rooms", "placeholder", "20"], ["type", "number", "formControlName", "rating", "min", "0", "max", "5", "step", "0.1"], [1, "hint"], ["type", "text", "formControlName", "amenities_raw", "placeholder", "WiFi, Pool, Spa, Restaurant, Gym, Parking\u2026"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function AdminHotelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
        \u0275\u0275text(4, "Manage Hotels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Create, edit and remove hotel listings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 2);
        \u0275\u0275listener("click", function AdminHotelsComponent_Template_button_click_7_listener() {
          return ctx.openCreate();
        });
        \u0275\u0275text(8, "+ Add Hotel");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AdminHotelsComponent_Conditional_9_Template, 2, 0, "div", 3)(10, AdminHotelsComponent_Conditional_10_Template, 9, 0, "div", 4)(11, AdminHotelsComponent_Conditional_11_Template, 22, 2)(12, AdminHotelsComponent_Conditional_12_Template, 63, 20, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.loading() ? 9 : ctx.hotels().length === 0 ? 10 : 11);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showModal() ? 12 : -1);
      }
    }, dependencies: [CommonModule, SlicePipe, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, PaginationComponent], styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --dark-950: #f6f1e4;\n  --dark-900: #fcf9f1;\n  --dark-850: #fffdf7;\n  --dark-800: #f2ead9;\n  --dark-750: #ebe2cf;\n  --dark-700: #dfd3bc;\n  --dark-600: #c9ba9e;\n  --dark-500: #a29174;\n  --dark-400: #786a55;\n  --surface-primary: #fffdf7;\n  --surface-secondary: #f7f0e1;\n  --surface-card: #fffaf0;\n  --surface-elevated: #f0e6d2;\n  --border-subtle: rgba(120, 96, 40, 0.12);\n  --border-medium: rgba(120, 96, 40, 0.2);\n  --border-strong: rgba(120, 96, 40, 0.35);\n  --text-primary: #211b12;\n  --text-secondary: #5f533f;\n  --text-muted: #89785f;\n  --text-gold: #b8932a;\n  --gold-glow: rgba(201, 168, 76, 0.2);\n  --shadow-sm: 0 1px 3px rgba(79, 58, 20, 0.12);\n  --shadow-md: 0 10px 24px rgba(79, 58, 20, 0.14);\n  --shadow-lg: 0 20px 40px rgba(79, 58, 20, 0.18);\n  --shadow-gold: 0 0 24px rgba(201, 168, 76, 0.18);\n  --shadow-card: 0 12px 28px rgba(79, 58, 20, 0.12), 0 0 0 1px var(--border-subtle);\n}\n[data-theme=dark][_ngcontent-%COMP%] {\n  --dark-950: #0a0a0f;\n  --dark-900: #10101a;\n  --dark-850: #14141f;\n  --dark-800: #1a1a28;\n  --dark-750: #1e1e2e;\n  --dark-700: #242438;\n  --dark-600: #2e2e48;\n  --dark-500: #3a3a58;\n  --dark-400: #4a4a6a;\n  --surface-primary: #14141f;\n  --surface-secondary: #1a1a28;\n  --surface-card: #1e1e2e;\n  --surface-elevated: #242438;\n  --border-subtle: rgba(201, 168, 76, 0.12);\n  --border-medium: rgba(201, 168, 76, 0.25);\n  --border-strong: rgba(201, 168, 76, 0.5);\n  --text-primary: #f0f0f5;\n  --text-secondary: #a0a0b8;\n  --text-muted: #606078;\n  --text-gold: #c9a84c;\n  --gold-glow: rgba(201, 168, 76, 0.15);\n  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);\n  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);\n  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);\n  --shadow-gold: 0 0 20px rgba(201, 168, 76, 0.15);\n  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--border-subtle);\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -600px 0;\n  }\n  100% {\n    background-position: 600px 0;\n  }\n}\n.admin-page[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n}\n.admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.admin-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.admin-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.data-table-wrap[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  text-align: left;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-subtle);\n  transition: background 150ms ease;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--dark-800);\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  color: var(--text-primary);\n  vertical-align: middle;\n}\n.table-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.75rem;\n}\n.table-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: cover;\n  border-radius: 8px;\n  flex-shrink: 0;\n  border: 1px solid var(--border-subtle);\n}\n.table-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.table-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.price-cell[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 700;\n}\n.rating-cell[_ngcontent-%COMP%] {\n  color: #c9a84c;\n  font-weight: 600;\n}\n.action-btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  backdrop-filter: blur(4px);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--dark-850);\n  border: 1px solid var(--border-medium);\n  border-radius: 24px;\n  width: 100%;\n  max-width: 680px;\n  max-height: 92vh;\n  overflow-y: auto;\n  box-shadow: var(--shadow-lg), var(--shadow-gold);\n  animation: _ngcontent-%COMP%_slideUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-900);\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--dark-600);\n  border-radius: 9999px;\n}\n.modal[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #b8932a;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid var(--border-subtle);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.25rem;\n  border-radius: 4px;\n}\n.modal-header[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--text-primary);\n}\n.modal-form[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .modal-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  text-transform: none;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: var(--dark-800);\n  border: 1px solid var(--border-subtle);\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-family:\n    "Inter",\n    "Segoe UI",\n    system-ui,\n    sans-serif;\n  padding: 0.75rem 1rem;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #c9a84c;\n  box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.error[_ngcontent-%COMP%], \n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.12);\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.modal-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #e74c3c;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-subtle);\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=admin-hotels.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminHotelsComponent, { className: "AdminHotelsComponent", filePath: "src\\app\\features\\admin\\admin-hotels\\admin-hotels.component.ts", lineNumber: 17 });
})();
export {
  AdminHotelsComponent
};
//# sourceMappingURL=admin-hotels.component-G6DZAKDR.js.map
