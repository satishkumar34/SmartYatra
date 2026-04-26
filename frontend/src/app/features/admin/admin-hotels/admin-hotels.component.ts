import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../../../core/services/hotels.service';
import { PlacesService } from '../../../core/services/places.service';
import { ToastService } from '../../../core/services/toast.service';
import { Hotel, Place } from '../../../core/models';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-admin-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './admin-hotels.component.html',
  styleUrl: './admin-hotels.component.scss',
})
export class AdminHotelsComponent implements OnInit {
  hotels      = signal<Hotel[]>([]);
  places      = signal<Place[]>([]);
  loading     = signal(true);
  saving      = signal(false);
  showModal   = signal(false);
  editingHotel = signal<Hotel | null>(null);
  totalPages  = signal(1);
  currentPage = signal(1);

  form: FormGroup;

  constructor(
    private hotelsSvc: HotelsService,
    private placesSvc: PlacesService,
    private toast: ToastService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name:            ['', [Validators.required, Validators.minLength(2)]],
      description:     [''],
      place_id:        [null, Validators.required],
      address:         ['', Validators.required],
      image_url:       [''],
      price_per_night: [null, [Validators.required, Validators.min(1)]],
      rating:          [0, [Validators.min(0), Validators.max(5)]],
      total_rooms:     [10, [Validators.required, Validators.min(1)]],
      amenities_raw:   [''],   // comma-separated input; split on save
    });
  }

  ngOnInit(): void {
    this.placesSvc.list({ size: 200 }).subscribe({ next: (r) => this.places.set(r.items) });
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.hotelsSvc.list({ page: this.currentPage(), size: 15 }).subscribe({
      next: (r) => { this.hotels.set(r.items); this.totalPages.set(r.pages); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  openCreate(): void {
    this.editingHotel.set(null);
    this.form.reset({ rating: 0, total_rooms: 10 });
    this.showModal.set(true);
  }

  openEdit(hotel: Hotel): void {
    this.editingHotel.set(hotel);
    let amenitiesRaw = '';
    if (hotel.amenities) {
      try { amenitiesRaw = JSON.parse(hotel.amenities).join(', '); } catch { amenitiesRaw = ''; }
    }
    this.form.patchValue({ ...hotel, amenities_raw: amenitiesRaw });
    this.showModal.set(true);
  }

  closeModal(): void { this.showModal.set(false); }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.saving()) return;
    this.saving.set(true);

    const { amenities_raw, ...rest } = this.form.value;
    const amenities = amenities_raw
      ? amenities_raw.split(',').map((s: string) => s.trim()).filter(Boolean)
      : [];
    const payload = { ...rest, amenities };

    const editing = this.editingHotel();
    const req = editing
      ? this.hotelsSvc.update(editing.id, payload)
      : this.hotelsSvc.create(payload);

    req.subscribe({
      next: () => {
        this.toast.success(editing ? 'Hotel updated.' : 'Hotel created.');
        this.saving.set(false);
        this.closeModal();
        this.load();
      },
      error: (err: Error) => { this.toast.error(err.message); this.saving.set(false); },
    });
  }

  delete(hotel: Hotel): void {
    if (!confirm(`Delete "${hotel.name}"? All bookings for this hotel will also be removed.`)) return;
    this.hotelsSvc.delete(hotel.id).subscribe({
      next: () => { this.toast.success('Hotel deleted.'); this.load(); },
      error: (err: Error) => this.toast.error(err.message),
    });
  }

  onPage(p: number): void { this.currentPage.set(p); this.load(); }
  get f() { return this.form.controls; }

  placeName(id: number): string {
    return this.places().find((p) => p.id === id)?.name ?? `Place #${id}`;
  }
}
