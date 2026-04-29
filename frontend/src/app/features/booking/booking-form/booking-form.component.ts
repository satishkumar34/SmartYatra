import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingsService } from '../../../core/services/bookings.service';
import { HotelsService } from '../../../core/services/hotels.service';
import { ToastService } from '../../../core/services/toast.service';
import { Hotel } from '../../../core/models';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss',
})
export class BookingFormComponent implements OnInit {
  form: FormGroup;
  hotel = signal<Hotel | null>(null);
  loading = signal(false);
  hotelLoading = signal(true);
  error = signal('');

  today = this.formatDate(new Date());

  // Derived price calculation
  get nightCount(): number {
    const ci = this.form.value.check_in;
    const co = this.form.value.check_out;
    const start = this.parseDate(ci);
    const end = this.parseDate(co);
    if (!start || !end) return 0;
    const diff = (end.getTime() - start.getTime()) / 86_400_000;
    return diff > 0 ? diff : 0;
  }

  get guestCount(): number {
    const guests = this.form.value.guests;
    return Number(guests) > 0 ? Number(guests) : 1;
  }

  get estimatedTotal(): number {
    const h = this.hotel();
    if (!h) return 0;
    const nights = this.nightCount;
    const guests = this.guestCount;
    return nights > 0 ? Math.round(h.price_per_night * nights * guests) : 0;
  }

  private parseDate(value: string | null | undefined): Date | null {
    if (!value) return null;
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private isBeforeDay(a: Date, b: Date): boolean {
    return a.getTime() < b.getTime();
  }

  private isPastDate(value: string): boolean {
    const date = this.parseDate(value);
    const today = this.parseDate(this.today);
    return date !== null && today !== null && this.isBeforeDay(date, today);
  }

  constructor(
    private fb: FormBuilder,
    private bookingSvc: BookingsService,
    private hotelsSvc: HotelsService,
    private toast: ToastService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      hotel_id:         [null, Validators.required],
      check_in:         ['', Validators.required],
      check_out:        ['', Validators.required],
      guests:           [1, [Validators.required, Validators.min(1), Validators.max(20)]],
      special_requests: [''],
    }, { validators: this.datesValidator });
  }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.queryParamMap.get('hotel_id');
    if (hotelId) {
      this.form.patchValue({ hotel_id: Number(hotelId) });
      this.hotelsSvc.getById(Number(hotelId)).subscribe({
        next: (h) => { this.hotel.set(h); this.hotelLoading.set(false); },
        error: () => this.hotelLoading.set(false),
      });
    } else {
      this.hotelLoading.set(false);
    }
  }

  private datesValidator = (g: FormGroup) => {
    const ci = g.get('check_in')?.value;
    const co = g.get('check_out')?.value;
    const errors: Record<string, boolean> = {};

    if (ci && this.isPastDate(ci)) {
      errors['invalidPastDates'] = true;
    }

    if (co && this.isPastDate(co)) {
      errors['invalidPastDates'] = true;
    }

    if (ci && co) {
      const start = this.parseDate(ci);
      const end = this.parseDate(co);
      if (start && end && end.getTime() <= start.getTime()) {
        errors['invalidDates'] = true;
      }
    }

    return Object.keys(errors).length ? errors : null;
  }

  get f() { return this.form.controls; }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.loading()) return;
    this.loading.set(true);
    this.error.set('');

    const payload = {
      hotel_id: this.form.value.hotel_id,
      check_in: this.form.value.check_in,
      check_out: this.form.value.check_out,
      guests: this.form.value.guests,
      special_requests: this.form.value.special_requests || undefined,
    };

    this.bookingSvc.create(payload).subscribe({
      next: (booking) => {
        this.toast.success(`Booking #${booking.id} created successfully!`);
        this.router.navigate(['/bookings']);
      },
      error: (err: Error) => {
        this.error.set(err.message);
        this.loading.set(false);
      },
    });
  }

  get minCheckOut(): string {
    const ci = this.form.value.check_in;
    if (!ci) return this.today;
    const d = this.parseDate(ci);
    if (!d) return this.today;
    d.setDate(d.getDate() + 1);
    return this.formatDate(d);
  }
}
