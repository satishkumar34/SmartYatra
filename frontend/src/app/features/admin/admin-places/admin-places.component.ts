import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../../../core/services/places.service';
import { ToastService } from '../../../core/services/toast.service';
import { Place } from '../../../core/models';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-admin-places',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationComponent],
  templateUrl: './admin-places.component.html',
  styleUrl: './admin-places.component.scss',
})
export class AdminPlacesComponent implements OnInit {
  places = signal<Place[]>([]);
  loading = signal(true);
  saving = signal(false);
  showModal = signal(false);
  editingPlace = signal<Place | null>(null);
  totalPages = signal(1);
  currentPage = signal(1);

  form: FormGroup;

  constructor(
    private placesSvc: PlacesService,
    private toast: ToastService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name:        ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      location:    ['', Validators.required],
      country:     ['', Validators.required],
      image_url:   [''],
      rating:      [0, [Validators.min(0), Validators.max(5)]],
    });
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading.set(true);
    this.placesSvc.list({ page: this.currentPage(), size: 15 }).subscribe({
      next: (r) => { this.places.set(r.items); this.totalPages.set(r.pages); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  openCreate(): void {
    this.editingPlace.set(null);
    this.form.reset({ rating: 0 });
    this.showModal.set(true);
  }

  openEdit(place: Place): void {
    this.editingPlace.set(place);
    this.form.patchValue(place);
    this.showModal.set(true);
  }

  closeModal(): void { this.showModal.set(false); }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.saving()) return;
    this.saving.set(true);

    const payload = this.form.value;
    const editing = this.editingPlace();
    const req = editing
      ? this.placesSvc.update(editing.id, payload)
      : this.placesSvc.create(payload);

    req.subscribe({
      next: () => {
        this.toast.success(editing ? 'Destination updated.' : 'Destination created.');
        this.saving.set(false);
        this.closeModal();
        this.load();
      },
      error: (err: Error) => { this.toast.error(err.message); this.saving.set(false); },
    });
  }

  delete(place: Place): void {
    if (!confirm(`Delete "${place.name}"? This will also remove all associated hotels and bookings.`)) return;
    this.placesSvc.delete(place.id).subscribe({
      next: () => { this.toast.success('Destination deleted.'); this.load(); },
      error: (err: Error) => this.toast.error(err.message),
    });
  }

  onPage(p: number): void { this.currentPage.set(p); this.load(); }
  get f() { return this.form.controls; }
}
