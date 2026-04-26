import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingsService } from '../../../core/services/bookings.service';
import { ToastService } from '../../../core/services/toast.service';
import { Booking, BookingStatus } from '../../../core/models';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  templateUrl: './admin-bookings.component.html',
  styleUrl: './admin-bookings.component.scss',
})
export class AdminBookingsComponent implements OnInit {
  bookings = signal<Booking[]>([]);
  loading = signal(true);
  totalPages = signal(1);
  currentPage = signal(1);
  filterStatus: BookingStatus | '' = '';
  updatingId = signal<number | null>(null);

  readonly statusOptions: BookingStatus[] = ['pending', 'confirmed', 'cancelled', 'completed'];

  constructor(
    private bookingSvc: BookingsService,
    private toast: ToastService,
  ) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading.set(true);
    this.bookingSvc.allBookings({
      page: this.currentPage(),
      size: 15,
      booking_status: this.filterStatus || undefined,
    }).subscribe({
      next: (r) => { this.bookings.set(r.items); this.totalPages.set(r.pages); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  onFilter(): void { this.currentPage.set(1); this.load(); }
  onPage(p: number): void { this.currentPage.set(p); this.load(); }

  updateStatus(booking: Booking, status: BookingStatus): void {
    if (status === booking.status) return;
    this.updatingId.set(booking.id);
    this.bookingSvc.updateStatus(booking.id, status).subscribe({
      next: (updated) => {
        this.bookings.update((list) => list.map((b) => (b.id === updated.id ? updated : b)));
        this.toast.success(`Booking #${booking.id} status updated to ${status}.`);
        this.updatingId.set(null);
      },
      error: (err: Error) => { this.toast.error(err.message); this.updatingId.set(null); },
    });
  }

  statusClass(status: string): string { return `badge-${status}`; }

  nightsBetween(ci: string, co: string): number {
    return Math.ceil((new Date(co).getTime() - new Date(ci).getTime()) / 86_400_000);
  }

  allowedTransitions(status: BookingStatus): BookingStatus[] {
    const map: Record<BookingStatus, BookingStatus[]> = {
      pending:   ['confirmed', 'cancelled'],
      confirmed: ['completed', 'cancelled'],
      cancelled: [],
      completed: [],
    };
    return map[status] ?? [];
  }
}
